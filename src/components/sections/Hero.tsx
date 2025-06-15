 import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [15, -15]);
  const rotateY = useTransform(x, [0, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(150); // center
    y.set(150);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {profileData.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              {profileData.tagline}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {profileData.bio}
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail size={16} />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone size={16} />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:col-span-2">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="primary" size="lg" icon={Download} href={profileData.resume}>
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {profileData.socialLinks.map((link, index) => {
                const Icon = link.icon === 'Github' ? Github : link.icon === 'Linkedin' ? Linkedin : Mail;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: 3D Tilt Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              ref={cardRef}
              className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl ring-2 ring-offset-4 ring-blue-400 dark:ring-purple-500"
                style={{
                  rotateX: [80,180],
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ backfaceVisibility: 'hidden' }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
