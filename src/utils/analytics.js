const analytics = () => {
  // Simple error tracking
  const trackErrors = () => {
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
      // You could send this to an error tracking service like Sentry
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      // You could send this to an error tracking service
    });
  };

  // Simple performance tracking
  const trackPerformance = () => {
    window.addEventListener('load', () => {
      // Track page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);

      // Track Time to First Contentful Paint if available
      if ('performance' in window && 'getEntriesByType' in performance) {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry) => {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        });
      }
    });
  };

  // Track user interactions
  const trackInteractions = () => {
    // Track navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = e.target.getAttribute('href');
        console.log(`Navigation to: ${target}`);
      });
    });

    // Track external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = e.target.href;
        console.log(`External link clicked: ${target}`);
      });
    });

    // Track theme toggle
    document.querySelectorAll('#theme-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        console.log(`Theme toggled to: ${currentTheme}`);
      });
    });
  };

  // Initialize analytics
  const init = () => {
    trackErrors();
    trackPerformance();
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackInteractions);
    } else {
      trackInteractions();
    }
  };

  init();
};

export default analytics;
