const BASE_DOMAIN = import.meta.env.MODE === 'production'
  ? 'https://cagdas.photos'  // or whatever your custom domain is
  : 'http://localhost:5173';      // dev domain

export const BASE_URL = BASE_DOMAIN + '/'; // or adjust depending on subfolder use