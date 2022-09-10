/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  env: {
    // Env vars are redefined here to avoid adding NEXT_PUBLIC to these values (should not be explosed to the browser)

    // Firebase creds
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STOAGE_BUCKET: process.env.FIREBASE_STOAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    // firebase emulator
    FIREBASE_EMULATOR_HOST: process.env.FIREBASE_EMULATOR_HOST,
    AUTH_EMULATOR_URL: process.env.AUTH_EMULATOR_URL,
    FIRESTORE_EMULATOR_PORT: process.env.FIRESTORE_EMULATOR_PORT,
    STORAGE_EMULATOR_PORT: process.env.STORAGE_EMULATOR_PORT,
    // misc.
    CONNECT_PRODUCTION: process.env.CONNECT_PRODUCTION
  },
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com']
  },
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/terms-of-service',
      destination: '/api/terms-of-service'
    },
    {
      source: '/privacy-policy',
      destination: '/api/privacy-policy'
    }
  ],
  swcMinify: true
};

module.exports = nextConfig;
