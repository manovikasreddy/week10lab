// Configuration file with environment-based settings
const getConfig = () => {
  return {
    appName: import.meta.env.VITE_APP_TITLE || 'SPA Deployment App',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
    debug: import.meta.env.VITE_DEBUG === 'true',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
};

export const config = getConfig();
