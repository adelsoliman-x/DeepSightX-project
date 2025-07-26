import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AlternateLinks from '@/components/seo/AlternateLinks';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovationText')
    },
    {
      icon: Award,
      title: t('about.excellence'),
      description: t('about.excellenceText')
    },
    {
      icon: Users,
      title: t('about.collaboration'),
      description: t('about.collaborationText')
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Development',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Data Scientist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Senior Software Architect',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200'
    }
  ];

  return (
    <>
    <AlternateLinks />

      <Helmet>
  <title>{`${t('meta.about.title')} - DeepSightX`}</title>
  <meta name="description" content={t('meta.about.description')} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${t('meta.about.title')} - DeepSightX`} />
  <meta property="og:description" content={t('meta.about.description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.deepsightx.com/about" />
  <meta property="og:image" content="https://www.deepsightx.com/og-image.png" />
</Helmet>

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
                {t('about.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-8">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-gray-700 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{t('about.mission')}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {t('about.missionText')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-gray-700 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{t('about.vision')}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {t('about.visionText')}
                    </p>
                  </CardContent>
                </Card>
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
                {t('about.values')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('about.valuesDesc')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
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
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
              
 {/* team section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('about.team')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('about.teamDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-gray-700 card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-blue-300 text-sm">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
{/* team section */}

        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-300">{t('about.stats.experience')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">12+</div>
                <div className="text-gray-300">{t('about.stats.members')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">160+</div>
                <div className="text-gray-300">{t('about.stats.countries')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">90+</div>
                <div className="text-gray-300">{t('about.stats.delivered')}</div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;