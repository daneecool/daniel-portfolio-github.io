import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {}, // Add MDX-specific options if needed
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/portfolio", // Replace with your repository name if deploying to a project page
  assetPrefix: "/portfolio", // Replace with your repository name if deploying to a project page
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

export default withMDX(nextConfig);


