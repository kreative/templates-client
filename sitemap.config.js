/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://kreativetemplates.co",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml", "/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://kreativetemplates.co/server-sitemap.xml",
    ],
  },
};
