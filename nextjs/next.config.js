/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  env: {
    // firebase env vars are redefined here to avoid adding NEXT_PUBLIC to these values (should not be explosed to the browser)
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STOAGE_BUCKET: process.env.FIREBASE_STOAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    // firebase emulator vars
    FIREBASE_AUTH_EMULATOR_URL: 'http://127.0.0.1:9099',
    FIREBASE_FIRESTORE_EMULATOR_HOST: 'http://127.0.0.1:9099',
    FIREBASE_FIRESTORE_EMULATOR_PORT: 8080
  },
  rewrites: async () => [
    {
      source: '/terms-of-service',
      destination: '/api/terms-of-service'
    },
    {
      source: '/privacy-policy',
      destination: '/api/privacy-policy'
    }
  ]
};

module.exports = nextConfig;
