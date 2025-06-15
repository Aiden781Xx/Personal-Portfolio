import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { profileData } from '../../data/profile';

export const TiltImage: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [15, -15]);
  const rotateY = useTransform(x, [0, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <div
      className="w-64 h-64 md:w-80 md:h-80 perspective-1000"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(150); // center reset
        y.set(150);
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-full overflow-hidden w-full h-full shadow-glow ring-2 ring-blue-400 dark:ring-purple-500 transition-all duration-300"
      >
        <img
          src={profileData.avatar}
          alt={profileData.name}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    </div>
  );
};
