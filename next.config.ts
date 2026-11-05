import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID || process.env.FB_APP_ID || "3601005156741406",
    NEXT_PUBLIC_FB_CONFIG_ID: process.env.NEXT_PUBLIC_FB_CONFIG_ID || "1095689973246592",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3443",
    NEXT_PUBLIC_ENABLE_AUTO_SCANNER: process.env.NEXT_PUBLIC_ENABLE_AUTO_SCANNER || "true",
    NEXT_PUBLIC_BOT_AUTOMATION_ENABLED: process.env.NEXT_PUBLIC_BOT_AUTOMATION_ENABLED || "true",
  },
};

export default nextConfig;
