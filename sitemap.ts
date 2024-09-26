import { NextApiRequest, NextApiResponse } from "next";

const Sitemap = (req: NextApiRequest, res: NextApiResponse) => {
  const formatDate = (date: Date) => {
    return date.toISOString();
  };

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.drmoto.com.tr/</loc>
        <lastmod>${formatDate(new Date())}</lastmod>
        <priority>0.2</priority>
      </url>
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
};

export default Sitemap;
