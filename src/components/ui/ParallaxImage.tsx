import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Rotate ranges from -20 to +20 degrees
  const rotateY = useTransform(mouseX, [0, 1], [20, -20]); // left ↔️ right
  const rotateX = useTransform(mouseY, [0, 1], [-20, 20]); // top ↕️ bottom

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl ring-2 ring-offset-4 ring-blue-400 dark:ring-purple-500 perspective-1000"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="w-full h-full object-cover rounded-full transition-transform duration-300"
      />
    </div>
  );
};

export default ParallaxImage;
