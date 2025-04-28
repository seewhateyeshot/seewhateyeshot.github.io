import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-goatcounter', 'https://cagdas.goatcounter.com/count');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}