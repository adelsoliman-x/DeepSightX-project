
# DeepSightX - AI-Powered Software Solutions

A modern, professional website for DeepSightX, showcasing AI-powered software solutions and services. Built with React.js and featuring multi-language support, responsive design, and a content management system.

## 🚀 Features

- **Multi-language Support**: English, Arabic, and German with RTL support
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Admin Panel**: Simple CMS for content management
- **Contact Form**: Direct email integration to info@deepsightx.com
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Frontend**: React.js 18.2.0
- **Routing**: React Router 6.16.0
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.285.0
- **Internationalization**: react-i18next 13.2.2
- **UI Components**: Custom components built with Radix UI primitives
- **Build Tool**: Vite 4.4.5

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── LanguageSwitcher.jsx # Language selection
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About Us page
│   ├── Services.jsx    # Services page
│   ├── Portfolio.jsx   # Portfolio/Work page
│   ├── Contact.jsx     # Contact page
│   └── Admin.jsx       # Admin panel
├── i18n/               # Internationalization
│   ├── index.js        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       ├── ar.json     # Arabic translations
│       └── de.json     # German translations
├── lib/                # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd deepsightx-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Multi-language Support

The website supports three languages:

- **English** (en) - Default language
- **Arabic** (ar) - RTL support included
- **German** (de)

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/`
2. Add the language to the `resources` object in `src/i18n/index.js`
3. Update the language switcher in `src/components/LanguageSwitcher.jsx`

### Editing Translations

Translation files are located in `src/i18n/locales/`. Each file contains nested objects for different sections of the website.

## 🔧 Admin Panel

The website includes a simple content management system accessible at `/admin`.

### Default Credentials
- **Username**: admin
- **Password**: deepsightx2024

### Features
- Content editing for key sections
- Dashboard with site statistics
- Secure login system
- Content persistence using localStorage

### Customizing Admin Panel

To modify the admin panel:

1. **Add new content sections**: Edit the `contentSections` array in `src/pages/Admin.jsx`
2. **Change authentication**: Modify the login logic in the `handleLogin` function
3. **Add new features**: Extend the admin dashboard with additional management tools

## 📧 Contact Form Setup

The contact form is configured to send emails to `info@deepsightx.com`. 

### Current Implementation
- Form validation and user feedback
- Simulated email sending (for demo purposes)
- Success/error notifications

### Production Setup
To enable actual email sending in production:

1. **Backend Integration**: Set up a backend service to handle form submissions
2. **Email Service**: Integrate with services like SendGrid, Mailgun, or AWS SES
3. **API Endpoint**: Create an API endpoint to process form data and send emails

## 🎨 Customization

### Styling
- **Colors**: Modify the color scheme in `src/index.css` and Tailwind config
- **Fonts**: Update font imports in `src/index.css`
- **Components**: Customize UI components in `src/components/ui/`

### Content
- **Text Content**: Edit translation files in `src/i18n/locales/`
- **Images**: Replace placeholder images with actual company images
- **Branding**: Update logo and brand colors throughout the application

### Features
- **Add New Pages**: Create new page components and add routes in `src/App.jsx`
- **Extend Admin Panel**: Add new content management features
- **API Integration**: Connect to external APIs for dynamic content

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for each page
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: AWS CloudFront, Cloudflare
- **Traditional Hosting**: Any web server with static file support

### Environment Variables
For production deployment, consider setting up:
- API endpoints for contact form
- Analytics tracking codes
- Error monitoring services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for DeepSightX. All rights reserved.

## 📞 Support

For technical support or questions about this project:
- Email: info@deepsightx.com
- Documentation: This README file
- Admin Panel: Available at `/admin` for content management

---

**DeepSightX** - Transforming Businesses with AI-Powered Solutions
