/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  output: {
    path: 'out',
  },
  
};

module.exports = nextConfig;
