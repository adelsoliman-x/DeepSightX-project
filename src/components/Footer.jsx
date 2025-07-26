import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const showToast = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">DeepSightX</span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" onClick={showToast} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" onClick={showToast} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" onClick={showToast} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" onClick={showToast} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">{t('footer.quickLinks')}</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('nav.services')}
              </Link>
              <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('nav.portfolio')}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">{t('footer.services')}</span>
            <div className="space-y-2">
              <span className="block text-gray-400 text-sm">{t('services.aiIntegration.title')}</span>
              <span className="block text-gray-400 text-sm">{t('services.customSoftware.title')}</span>
              <span className="block text-gray-400 text-sm">{t('services.assessmentPlatform.title')}</span>
              <span className="block text-gray-400 text-sm">{t('services.dashboards.title')}</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">{t('footer.contact')}</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{t('contact.info.address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DeepSightX. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" onClick={showToast} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.privacy')}
            </a>
            <a href="#" onClick={showToast} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;