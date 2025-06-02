/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://anshitajain.vercel.app'),
};

module.exports = nextConfig; 