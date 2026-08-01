/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repositoryName = "MyPortfolio";
const repositoryPath = `/${repositoryName}`;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? repositoryPath : "",
  assetPrefix: isProduction ? repositoryPath : "",
};

export default nextConfig;
