const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "styles"); // Adjust the path as needed
    return config;
  },
};
