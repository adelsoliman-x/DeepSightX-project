import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Code, FileText, BarChart3, MessageSquare, Headphones, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AlternateLinks from '@/components/seo/AlternateLinks';
import StructuredData from '@/components/seo/StructuredData';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.aiIntegration.title'),
      description: t('services.aiIntegration.description'),
      features: t('services.aiIntegration.features', { returnObjects: true })
    },
    {
      icon: Code,
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      features: t('services.customSoftware.features', { returnObjects: true })
    },
    {
      icon: FileText,
      title: t('services.assessmentPlatform.title'),
      description: t('services.assessmentPlatform.description'),
      features: t('services.assessmentPlatform.features', { returnObjects: true })
    },
    {
      icon: BarChart3,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      features: t('services.dashboards.features', { returnObjects: true })
    },
    {
      icon: MessageSquare,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features', { returnObjects: true })
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: t('services.support.features', { returnObjects: true })
    }
  ];

  const process = [
    {
      step: '01',
      title: t('services.process.step1'),
      description: t('services.process.step1Desc')
    },
    {
      step: '02',
      title: t('services.process.step2'),
      description: t('services.process.step2Desc')
    },
    {
      step: '03',
      title: t('services.process.step3'),
      description: t('services.process.step3Desc')
    },
    {
      step: '04',
      title: t('services.process.step4'),
      description: t('services.process.step4Desc')
    }
  ];

  return (
    <>
    <AlternateLinks />

      <Helmet>
  <title>{`${t('meta.services.title')} - DeepSightX`}</title>
  <meta name="description" content={t('meta.services.description')} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${t('meta.services.title')} - DeepSightX`} />
  <meta property="og:description" content={t('meta.services.description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.deepsightx.com/services" />
  <meta property="og:image" content="https://www.deepsightx.com/og-image.png" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Solutions and Custom Software",
      "provider": {
        "@type": "Organization",
        "name": "DeepSightX",
        "url": "https://www.deepsightx.com/services"
      }
    })}
  </script>
</Helmet>
<StructuredData type="services" />

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
                {t('services.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-8">
                {t('services.subtitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('services.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-gray-700 card-hover h-full flex flex-col">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
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
                {t('services.process.title')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('services.process.desc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rtl:left-auto rtl:right-full rtl:bg-gradient-to-l"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('services.tech.title')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('services.tech.desc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
              {['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-gray-700 transition-colors">
                    <span className="text-white font-semibold text-sm">{tech}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{tech}</span>
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
                {t('services.cta.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('services.cta.desc')}
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 pulse-glow">
                <Link to="/contact">
                  {t('services.cta.button')} <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;