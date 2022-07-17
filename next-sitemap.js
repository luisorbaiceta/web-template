/** @type {import('next-sitemap').IConfig} */
module.exports = {
  /**
   * The VERCEL_URL is automatically set by vercel if "Automatically expose System Environment Variables"
   * is enabled.
   *
   * See: https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
   */
  siteUrl: process.env.VERCEL_URL || 'http://localhost:3000',
  sitemapSize: 7000,
  generateRobotsTxt: true,
};
