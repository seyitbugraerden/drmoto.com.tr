import { GetServerSidePropsContext } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const baseUrl = "https://www.drmoto.com.tr";
  const urls = [
    { loc: "/", lastmod: "2024-09-26T14:34:51+01:00", priority: 0.2 },
    {
      loc: "/yag-ve-genel-bakim",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
    {
      loc: "/motor-revizyon",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
    {
      loc: "/elektrik-tesisat",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
    {
      loc: "/ariza-tespit",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
    {
      loc: "/fren-ve-suspansiyon",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
    {
      loc: "/yakit-ve-egzoz",
      lastmod: "2024-09-26T14:34:51+01:00",
      priority: 0.1,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
          <url>
            <loc>${baseUrl}${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
            <priority>${url.priority}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
