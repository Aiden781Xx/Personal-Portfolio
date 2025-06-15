import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { education } from '../../data/profile';

export const About: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Intermediate level Full Stack Developer with a strong foundation in modern web technologies.
            Currently pursuing my Bachelor's in Computer Science while gaining real-world experience through internships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="prose prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My passion for technology started early, leading me to pursue Computer Science. 
                I've always been fascinated by how code can solve real-world problems and create 
                meaningful user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through various internships, I've gained hands-on experience in full-stack development, 
                specializing in the MERN stack. I love working on both frontend interfaces and backend 
                systems, understanding how they work together to create seamless applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and staying updated with the latest trends in web development.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                          {edu.current && (
                            <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs">
                              Current
                            </span>
                          )}
                        </div>
                        {edu.location && (
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
