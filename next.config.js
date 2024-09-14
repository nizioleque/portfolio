/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/projects/:path*",
    },
  ],
  redirects: async () => [
    {
      source: "/cv",
      destination: "/CV Norbert Niziołek.pdf",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
