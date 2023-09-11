/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    images: {
      loader: "imgix",
      path: "http://www.fehmicitiloglu.tech/",
    },
}

module.exports = nextConfig