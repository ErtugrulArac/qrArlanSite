// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.arlanqrmenu.com', // Kendi sitenizin URL'si
    generateRobotsTxt: true, // robots.txt dosyasını oluşturun
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*', // Tüm botlar için geçerli
          allow: '/', // Tüm sayfalara izin ver
        },
        {
          userAgent: '*',
          disallow: '/dashboardUsers', // Sadece /dashboard sayfasını engelle
        },
      ],
    },
  }
  