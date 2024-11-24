/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.NEXT_PUBLIC_API_KEY,
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
        domains: ['image.tmdb.org'], // Дозволити завантаження зображень з домену TMDB
    },
};

module.exports = nextConfig;
