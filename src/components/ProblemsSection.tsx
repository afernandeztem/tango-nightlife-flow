
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const ProblemsSection = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      emoji: '📉',
      title: t('problems.highFailure.title'),
      description: t('problems.highFailure.description')
    },
    {
      emoji: '🤷',
      title: t('problems.noControl.title'),
      description: t('problems.noControl.description')
    },
    {
      emoji: '⚙️',
      title: t('problems.limitedFlexibility.title'),
      description: t('problems.limitedFlexibility.description')
    },
    {
      emoji: '🕵️',
      title: t('problems.noData.title'),
      description: t('problems.noData.description')
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="problemas" className="py-28 md:py-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
        variants={containerVariants}
      >
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            {t('home.problemsTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('home.problemsSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="feature-card-hover border-0 p-8 flex flex-col items-start h-full shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <div className="text-5xl mb-6">
                  {problem.emoji}
                </div>
                <h3 className="text-xl font-bold mb-4 text-left text-black">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-left">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.problemsConclusion')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemsSection;
