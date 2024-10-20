/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
});

const nextConfig = {};

export default pwaConfig(nextConfig);
