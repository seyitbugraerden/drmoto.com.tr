import { NextApiRequest, NextApiResponse } from "next";

const Robots = (req: NextApiRequest, res: NextApiResponse) => {
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: https://www.drmoto.com.tr/sitemap
  `;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robotsTxt);
};

export default Robots;
