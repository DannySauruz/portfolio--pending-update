const performance = () => {
  // Preload critical images
  const preloadImages = () => {
    const criticalImages = ['/me.jpg', '/me1.jpg'];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };

  // Optimize font loading
  const optimizeFonts = () => {
    // Add font-display: swap to improve loading performance
    const fontLink = document.querySelector('link[href*="fontshare"]');
    if (fontLink && !fontLink.href.includes('display=swap')) {
      fontLink.href += '&display=swap';
    }
  };

  // Initialize performance optimizations
  const init = () => {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        preloadImages();
        optimizeFonts();
      });
    } else {
      preloadImages();
      optimizeFonts();
    }
  };

  init();
};

export default performance;
