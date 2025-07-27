import createNextIntlPlugin from "next-intl/plugin";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
