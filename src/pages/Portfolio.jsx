import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import AlternateLinks from '@/components/seo/AlternateLinks';
import StructuredData from '@/components/seo/StructuredData';

const Portfolio = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.description'),
      tech: t('portfolio.project1.tech'),
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800',
      category: t('portfolio.categories.education')
    },
    {
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description'),
      tech: t('portfolio.project2.tech'),
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800',
      category: t('portfolio.categories.hr')
    },
    // {
    //   title: t('portfolio.project3.title'),
    //   description: t('portfolio.project3.description'),
    //   tech: t('portfolio.project3.tech'),
    //   image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800',
    //   category: t('portfolio.categories.finance')
    // },
    // {
    //   title: t('portfolio.project4.title'),
    //   description: t('portfolio.project4.description'),
    //   tech: t('portfolio.project4.tech'),
    //   image: 'https://images.unsplash.com/photo-1579684385127-6ab180507744?q=80&w=800',
    //   category: t('portfolio.categories.healthcare')
    // },
//     {
//       title: t('portfolio.project5.title'),
//       description: t('portfolio.project5.description'),
//       tech: t('portfolio.project5.tech'),
// image: 'https://images.unsplash.com/photo-1581090700227-1e8eaf6ce164?q=80&w=800',
//       category: t('portfolio.categories.logistics')
//     },
    {
      title: t('portfolio.project6.title'),
      description: t('portfolio.project6.description'),
      tech: t('portfolio.project6.tech'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      category: t('portfolio.categories.analytics')
    }
  ];

  const categories = Object.values(t('portfolio.categories', { returnObjects: true }));
  const [selectedCategory, setSelectedCategory] = React.useState(t('portfolio.categories.all'));

  const filteredProjects = selectedCategory === t('portfolio.categories.all')
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const showToast = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
    <AlternateLinks />

      <Helmet>
  <title>{`${t('meta.portfolio.title')} - DeepSightX`}</title>
  <meta name="description" content={t('meta.portfolio.description')} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${t('meta.portfolio.title')} - DeepSightX`} />
  <meta property="og:description" content={t('meta.portfolio.description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.deepsightx.com/portfolio" />
  <meta property="og:image" content="https://www.deepsightx.com/og-image.png" />
</Helmet>
<StructuredData type="portfolio" />

      <div className="min-h-screen pt-24 md:pt-32">
        <section className="py-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('portfolio.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-8">
                {t('portfolio.subtitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('portfolio.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-gray-900/50 sticky top-[72px] md:top-[80px] z-40">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card className="glass-effect border-gray-700 card-hover h-full overflow-hidden flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                      
                      <div className="space-y-4 mt-auto">
                        <div>
                          <span className="text-sm text-blue-300 font-medium">{t('portfolio.techUsed')}:</span>
                          <p className="text-sm text-gray-300 mt-1">{project.tech}</p>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
                            onClick={showToast}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                            {t('portfolio.viewLive')}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                            onClick={showToast}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('portfolio.metrics.title')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('portfolio.metrics.desc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">60%</div>
                <div className="text-gray-300">{t('portfolio.metrics.efficiency')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <div className="text-gray-300">{t('portfolio.metrics.cost')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-300">{t('portfolio.metrics.satisfaction')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">3x</div>
                <div className="text-gray-300">{t('portfolio.metrics.roi')}</div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('portfolio.cta.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('portfolio.cta.desc')}
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 pulse-glow">
                <Link to="/contact">
                  {t('portfolio.cta.button')} <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;