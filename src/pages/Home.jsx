import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AlternateLinks from '@/components/seo/AlternateLinks';
import StructuredData from '@/components/seo/StructuredData';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('home.features.fast'),
      description: t('home.features.fastDesc')
    },
    {
      icon: Shield,
      title: t('home.features.secure'),
      description: t('home.features.secureDesc')
    },
    {
      icon: Cpu,
      title: t('home.features.advanced'),
      description: t('home.features.advancedDesc')
    }
  ];

  const stats = [
    { number: '90+', label: t('home.stats.projects') },
    { number: '100', label: t('home.stats.clients') },
    { number: '99%', label: t('home.stats.rate') },
    { number: '24/7', label: t('home.stats.support') }
  ];

  return (
    <>
    <AlternateLinks />
      <Helmet>
  <title>{`${t('meta.home.title')} - DeepSightX`}</title>
  <meta name="description" content={t('meta.home.description')} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${t('meta.home.title')} - DeepSightX`} />
  <meta property="og:description" content={t('meta.home.description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.deepsightx.com/" />
  <meta property="og:image" content="https://www.deepsightx.com/og-image.png" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DeepSightX",
      "url": "https://www.deepsightx.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.deepsightx.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })}
  </script>
</Helmet>
     <StructuredData type="home" />
   

      <div className="min-h-screen">
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left rtl:lg:text-right"
              >
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                  >
                    <span className="gradient-text">{t('hero.title')}</span>
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 font-medium"
                  >
                    {t('hero.subtitle')}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0"
                  >
                    {t('hero.description')}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 glow-effect">
                    <Link to="/contact" className="flex items-center justify-center">
                      {t('hero.cta')} <ArrowRight className="ms-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                    <Link to="/about">
                      {t('hero.learnMore')}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="floating-animation">
                  <img  alt="AI Technology Visualization" class="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1667371927761-8fa90f33a248" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
              </motion.div>
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
                {t('home.whyChoose')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('home.whyChooseDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-gray-700 card-hover h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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
                {t('home.cta.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('home.cta.desc')}
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 pulse-glow">
                <Link to="/contact" className="flex items-center justify-center">
                  {t('home.cta.button')} <Rocket className="ms-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;