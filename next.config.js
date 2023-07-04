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
      NEXT_KEY: process.env.NEXT_KEY,
    }
}
module.exports = nextConfig

