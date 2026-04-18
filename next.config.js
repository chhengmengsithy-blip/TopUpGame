/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // pdfkit reads its built-in AFM font files from disk via fs.readFileSync.
  // Next.js/Vercel must leave it as an external CommonJS module so that those
  // font assets are resolvable at runtime in the serverless lambda.
  experimental: {
    serverComponentsExternalPackages: ["pdfkit"],
  },
};

module.exports = nextConfig;
