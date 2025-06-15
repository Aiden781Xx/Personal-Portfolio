import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Wrench } from 'lucide-react';
import { Card } from '../ui/Card';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/profile';

export const Skills: React.FC = () => {
  const { ref, controls, containerVariants, itemVariants } = useStaggerAnimation();

  const skillCategories = [
    { name: 'Frontend', icon: Code, color: 'blue' },
    { name: 'Backend', icon: Settings, color: 'green' },
    { name: 'Database', icon: Database, color: 'purple' },
    { name: 'Tools', icon: Wrench, color: 'orange' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category.toLowerCase());
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(category.name);
            const IconComponent = category.icon;
            
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.color === 'blue' ? 'from-blue-500 to-blue-600' :
                              category.color === 'green' ? 'from-green-500 to-green-600' :
                              category.color === 'purple' ? 'from-purple-500 to-purple-600' :
                              'from-orange-500 to-orange-600'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Core Strengths
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['JavaScript', 'React.js', 'Node.js', 'RESTful API', 'MongoDB'].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};