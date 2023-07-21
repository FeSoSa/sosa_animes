/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        unoptimized:true,
        domains: [
          "api.themoviedb.org",
          "image.tmdb.org",
        ]
    },

    env: {
      TMDB_KEY: process.env.TMDB_KEY,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGE_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      databaseURL: process.env.DATABASE_URL,
    },
    
    async redirects() {
      return [
        {
          source: '/',
          destination: '/pt-br', // Redireciona o acesso à raiz para '/pt-br'
          permanent: true,
        },
      ];
    },

}
module.exports = nextConfig