import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Inject GoatCounter script only once
    const script = document.createElement('script');
    script.setAttribute('data-goatcounter', 'https://cagdas.goatcounter.com/count');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // On every route change, manually trigger pageview
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({
        path: location.pathname + location.search,
        title: document.title,
      });
    }
  }, [location]);

  return null;
}