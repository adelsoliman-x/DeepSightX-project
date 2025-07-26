import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LogIn, LogOut, Settings, FileText, BarChart3, Users, Edit, Save, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import AlternateLinks from '@/components/seo/AlternateLinks';

const Admin = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [editingContent, setEditingContent] = useState(null);
  const [contentData, setContentData] = useState({});

  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession) {
      setIsLoggedIn(true);
    }
    
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContentData(JSON.parse(savedContent));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'deepsightx2024') {
      setIsLoggedIn(true);
      localStorage.setItem('adminSession', 'true');
      toast({
        title: "Success!",
        description: t('admin.welcome'),
        duration: 3000,
      });
    } else {
      toast({
        title: "Error",
        description: t('admin.loginError'),
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminSession');
    setLoginData({ username: '', password: '' });
  };

  const handleSaveContent = (section, data) => {
    const updatedContent = {
      ...contentData,
      [section]: data
    };
    setContentData(updatedContent);
    localStorage.setItem('siteContent', JSON.stringify(updatedContent));
    setEditingContent(null);
    
    toast({
      title: "Success!",
      description: t('admin.saved'),
      duration: 3000,
    });
  };

  const contentSections = [
    {
      id: 'hero',
      title: t('admin.contentSections.hero'),
      fields: [
        { key: 'title', label: t('admin.fields.mainTitle'), type: 'text' },
        { key: 'subtitle', label: t('admin.fields.subtitle'), type: 'text' },
        { key: 'description', label: t('admin.fields.description'), type: 'textarea' }
      ]
    },
    {
      id: 'about',
      title: t('admin.contentSections.about'),
      fields: [
        { key: 'title', label: t('admin.fields.title'), type: 'text' },
        { key: 'description', label: t('admin.fields.description'), type: 'textarea' }
      ]
    },
    {
      id: 'services',
      title: t('admin.contentSections.services'),
      fields: [
        { key: 'title', label: t('admin.fields.title'), type: 'text' },
        { key: 'subtitle', label: t('admin.fields.subtitle'), type: 'text' }
      ]
    }
  ];

  const stats = [
    { title: t('admin.stats.pages'), value: '5', icon: FileText },
    { title: t('admin.stats.users'), value: '1,234', icon: Users },
    { title: t('admin.stats.views'), value: '12,456', icon: BarChart3 },
    { title: t('admin.stats.settings'), value: '8', icon: Settings }
  ];

  if (!isLoggedIn) {
    return (
      <>
      <AlternateLinks />

        <Helmet>
          <title>{t('admin.login')} - DeepSightX</title>
          <meta name="description" content="Admin panel login for DeepSightX website management." />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <Card className="glass-effect border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <LogIn className="w-6 h-6" />
                  {t('admin.login')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-300">
                      {t('admin.username')}
                    </Label>
                    <Input
                      id="username"
                      value={loginData.username}
                      onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">
                      {t('admin.password')}
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    {t('admin.loginButton')}
                  </Button>
                </form>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400 text-center">
                    {t('admin.demo')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('admin.title')} - DeepSightX</title>
        <meta name="description" content="DeepSightX admin panel for website content management." />
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-32">
        <section className="py-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold text-white">{t('admin.title')}</h1>
                <p className="text-gray-400 mt-2">{t('admin.welcome')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <LogOut className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                  {t('admin.logout')}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-gray-700 card-hover">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.title}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{t('admin.content')}</h2>
              <p className="text-gray-400">{t('admin.manageContent')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg text-white flex items-center justify-between">
                        {section.title}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingContent(section.id)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {editingContent === section.id ? (
                        <EditContentForm
                          section={section}
                          data={contentData[section.id] || {}}
                          onSave={(data) => handleSaveContent(section.id, data)}
                          onCancel={() => setEditingContent(null)}
                        />
                      ) : (
                        <div className="space-y-3">
                          {section.fields.map((field) => (
                            <div key={field.key}>
                              <span className="text-sm text-gray-400">{field.label}:</span>
                              <p className="text-white text-sm mt-1 truncate">
                                {contentData[section.id]?.[field.key] || 'Not set'}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const EditContentForm = ({ section, data, onSave, onCancel }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {section.fields.map((field) => (
        <div key={field.key} className="space-y-2">
          <Label className="text-gray-300 text-sm">{field.label}</Label>
          {field.type === 'textarea' ? (
            <Textarea
              value={formData[field.key] || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
              className="bg-gray-800 border-gray-600 text-white text-sm"
              rows={3}
            />
          ) : (
            <Input
              value={formData[field.key] || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
              className="bg-gray-800 border-gray-600 text-white text-sm"
            />
          )}
        </div>
      ))}
      
      <div className="flex gap-2 pt-2">
        <Button
          type="submit"
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white flex-1"
        >
          <Save className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
          {t('admin.save')}
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={onCancel}
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          <X className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
          {t('admin.cancel')}
        </Button>
      </div>
    </form>
  );
};

export default Admin;