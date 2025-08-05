# Danish Hakim - Portfolio Website

A modern, responsive portfolio website showcasing my journey in cybersecurity, networking, and web development.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Accessibility**: WCAG compliant with skip navigation and proper ARIA labels
- **Performance Optimized**: Lazy loading, image optimization, and efficient CSS
- **SEO Friendly**: Meta tags, Open Graph, and semantic HTML
- **Modern Tech Stack**: Vanilla JavaScript, CSS Grid/Flexbox, Vite

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **Fonts**: Sentient (via Fontshare)
- **Icons**: Heroicons SVG
- **Deployment**: Vercel/Netlify ready

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/DannySauruz/portfolio--pending-update.git
   cd portfolio--pending-update
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

## 📁 Project Structure

```
├── src/
│   ├── main.js              # Main JavaScript entry point
│   ├── utils/
│   │   ├── dark-mode.js     # Theme switching functionality
│   │   ├── lazy-loading.js  # Image lazy loading
│   │   ├── mobile-nav.js    # Mobile navigation
│   │   ├── performance.js   # Performance optimizations
│   │   └── analytics.js     # Simple analytics tracking
├── styles/
│   ├── style.css           # Global styles and CSS variables
│   ├── components/         # Component-specific styles
│   └── utils.css          # Utility classes
├── public/
│   ├── images/            # Project screenshots and assets
│   └── Resume.pdf         # Downloadable resume
└── index.html             # Main HTML file
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles/style.css`:
```css
:root {
  --clr-dark: #070a13;
  --clr-light: #f1f5f9;
  --clr-indigo: #4f46e5;
  --clr-rose: #e11d48;
}
```

### Content
Update personal information in `index.html`:
- Hero section: Name, title, description
- About section: Bio, skills, profile image
- Projects: Descriptions, links, images
- Contact: Email, social links

### Images
Replace images in the `public/` directory:
- `me.jpg` - Hero profile image
- `me1.jpg` - About section image
- Project screenshots (1.png, 2.png, etc.)

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Skip navigation links

## 🔧 Development

### Code Style
- Use Prettier for formatting
- Follow semantic HTML practices
- Use CSS custom properties for theming
- Write accessible code

### Performance Tips
- Optimize images (WebP format recommended)
- Use lazy loading for below-fold content
- Minimize CSS and JavaScript
- Implement proper caching headers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/DannySauruz/portfolio--pending-update/issues).

## 📞 Contact

Danish Hakim - [akmardanishhakim@gmail.com](mailto:akmardanishhakim@gmail.com)

Project Link: [https://github.com/DannySauruz/portfolio--pending-update](https://github.com/DannySauruz/portfolio--pending-update)

---

⭐ Star this repo if you found it helpful!
