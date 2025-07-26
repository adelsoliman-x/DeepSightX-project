import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import AlternateLinks from '@/components/seo/AlternateLinks';
import StructuredData from '@/components/seo/StructuredData';


const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        title: formData.subject,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: t('contact.form.success'),
      description: t('contact.form.sent'),
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    toast({
      title: t('contact.form.error'),
      description: t('contact.form.tryAgain'),
      variant: "destructive",
      duration: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: t('nav.contact'),
      value: t('contact.info.email'),
      description: t('contact.info.emailDesc')
    },
    // {
    //   icon: Phone,
    //   title: t('contact.info.phone'),
    //   value: t('contact.info.phone'),
    //   description: t('contact.info.phoneDesc')
    // },
    {
      icon: MapPin,
      title: 'Office',
      value: t('contact.info.address'),
      description: t('contact.info.addressDesc')
    }
  ];

  return (
    <>
    <AlternateLinks />

      <Helmet>
  <title>{`${t('meta.contact.title')} - DeepSightX`}</title>
  <meta name="description" content={t('meta.contact.description')} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${t('meta.contact.title')} - DeepSightX`} />
  <meta property="og:description" content={t('meta.contact.description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.deepsightx.com/contact" />
  <meta property="og:image" content="https://www.deepsightx.com/og-image.png" />
<script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us - DeepSightX",
      "url": "https://www.deepsightx.com/contact"
    })}
  </script>
</Helmet>
  <StructuredData type="home" />

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
                {t('contact.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-8">
                {t('contact.subtitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('contact.description')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{t('contact.form.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            {t('contact.form.name')}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            {t('contact.form.email')}
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          {t('contact.form.company')}
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          {t('contact.form.subject')}
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          {t('contact.form.message')}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 rtl:ml-2 rtl:mr-0"></div>
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                            {t('contact.form.send')}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
                  <p className="text-gray-400 mb-8">
                    {t('contact.info.desc')}
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="glass-effect border-gray-700 card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4 rtl:space-x-reverse">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <info.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                              <p className="text-blue-300 font-medium mb-1">{info.value}</p>
                              <p className="text-gray-400 text-sm">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <Card className="glass-effect border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">{t('contact.info.hours')}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">{t('contact.info.hours1')}</span>
                            <span className="text-white">8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">{t('contact.info.hours2')}</span>
                            <span className="text-white">{t('contact.info.closed')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">{t('contact.info.hours3')}</span>
                            <span className="text-white">{t('contact.info.closed')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">{t('contact.info.presence')}</h4>
                        <p className="text-gray-400 text-sm">
                          {t('contact.info.presenceDesc')}
                        </p>
                      </div>
                    </div>
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
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{t('contact.map.title')}</h2>
              <p className="text-gray-400">{t('contact.map.desc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-white font-semibold">{t('contact.map.placeholder')}</p>
                <p className="text-gray-400 text-sm">{t('contact.map.placeholderDesc')}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;