# SDS Authoring Landing Page

A modern, responsive landing page for SDS (Safety Data Sheet) authoring software built with Gatsby, React, and Tailwind CSS. This landing page showcases professional chemical safety documentation tools and compliance solutions.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, video modals, and dynamic pricing panels
- **Performance Optimized**: Built with Gatsby for fast loading and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Animation Library**: Smooth transitions using Framer Motion
- **Video Integration**: Embedded product demonstration videos

## 🛠️ Tech Stack

- **Framework**: Gatsby 5.14.6
- **Frontend**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **Build Tool**: PostCSS with Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/sdsmanager/sds-authoring-landing.git
cd sds-authoring-landing
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run develop
# or
yarn develop
```

### 4. Open Your Browser

Navigate to [http://localhost:8000](http://localhost:8000) to view the landing page.

## 📁 Project Structure

```
sds-authoring-landing/
├── public/                 # Static files and build output
├── src/
│   ├── components/         # Reusable React components
│   │   ├── header.js      # Navigation header
│   │   ├── layout.js      # Main layout wrapper
│   │   ├── layout.css     # Global styles
│   │   └── seo.js         # SEO component
│   ├── images/            # Image assets
│   ├── pages/             # Page components
│   │   ├── index.js       # Homepage
│   │   └── 404.js         # 404 error page
│   └── templates/         # Page templates
├── gatsby-config.js       # Gatsby configuration
├── gatsby-node.js         # Gatsby Node.js APIs
├── gatsby-browser.js      # Gatsby browser APIs
├── gatsby-ssr.js          # Gatsby SSR APIs
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Customize colors, fonts, and other design tokens in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... more colors
      }
    }
  }
}
```

### Content
Edit the main content in `src/pages/index.js`. The page includes:
- Hero section with call-to-action
- Features showcase
- Pricing panels
- Customer testimonials
- Video demonstrations
- Contact forms

### SEO
Update site metadata in `gatsby-config.js`:

```javascript
siteMetadata: {
  title: `Your Site Title`,
  description: `Your site description`,
  author: `Your Name`,
  siteUrl: `https://yoursite.com`,
}
```

## 📜 Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build production version
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run format` - Format code with Prettier

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sdsmanager/sds-authoring-landing)

### Other Platforms

This Gatsby site can be deployed to any static hosting service:
- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: Upload build files to S3
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
GATSBY_SITE_URL=https://yoursite.com
GATSBY_ANALYTICS_ID=your-analytics-id
```

### Build Configuration

Modify `gatsby-config.js` to add plugins, configure site metadata, or add new features.

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version**: Ensure you're using Node.js 16.0 or higher
2. **Dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Cache Issues**: Run `npm run clean` to clear Gatsby cache
4. **Port Conflicts**: If port 8000 is busy, Gatsby will automatically use the next available port

### Getting Help

- Check the [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- Search [GitHub Issues](https://github.com/sdsmanager/sds-authoring-landing/issues)
- Join the [Gatsby Discord](https://gatsby.dev/discord)

## 📄 License

This project is licensed under the 0BSD License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@sdsmanager.com
- Website: [https://sdsmanager.com](https://sdsmanager.com)
- Documentation: [https://docs.sdsmanager.com](https://docs.sdsmanager.com)

---

Built with ❤️ by the SDS Manager team
