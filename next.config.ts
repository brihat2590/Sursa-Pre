import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:['s3.sursatech.com'],
    
  },
  eslint:{
    ignoreDuringBuilds: true
  }
  /* config options here */
};

export default nextConfig;
