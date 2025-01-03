import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });
    return config;
  },
};

export default nextConfig;
