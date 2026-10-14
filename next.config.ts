import type { NextConfig } from "next";
import routes from "./docs/routes.json";
const config: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/all-resources/:slug",
        permanent: true,
      },
      {
        source: "/the-ai-powered-yard",
        destination: "/the-agentic-ai-yard",
        permanent: true,
      },
      {
        source: "/global/forms/contact-us",
        destination: "/contact",
        permanent: true,
      },
      ...routes
        .filter((r) => r.route.startsWith("/markets/"))
        .map((r) => ({
          source: r.route.replace("/markets", ""),
          destination: r.route,
          permanent: true,
        })),
      {
        source: "/all-resources/ryder-and-terminal-digitize-yard",
        destination:
          "https://newsroom.ryder.com/news/news-details/2024/Ryder-and-Terminal-Digitize-Yard-Achieve-99-Accuracy-with-AI-Computer-Vision/default.aspx",
        permanent: false,
      },
      {
        source: "/all-resources/erp-today-with-terminal-cro-chris-brumett",
        destination:
          "https://erp.today/mid-market-manufacturers-should-avoid-treating-automation-and-erp-as-separate-initiatives-chris-brumett/",
        permanent: false,
      },
      {
        source:
          "/all-resources/ecom-logistics-podcast-why-yard-management-is-the-last-broken-node-in-the-supply-chain",
        destination:
          "https://ecomlogisticspodcast.simplecast.com/episodes/why-yard-management-is-the-last-broken-node-in-supply-chain",
        permanent: false,
      },
      {
        source: "/all-resources/missions-pr",
        destination:
          "https://www.globenewswire.com/news-release/2026/04/09/3271010/0/en/Terminal-Industries-Launches-Missions-as-Structured-Workflows-for-All-Yard-Operations.html",
        permanent: false,
      },
    ];
  },
};
export default config;
