// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import fetchSitemapUrls from "../../lib/fetchSitemapUrls";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = [];
  const API_URLS = [
    "https://api.kreativetemplates.co/v1/templates/sitemap",
    "https://api.kreativetemplates.co/v1/categories/sitemap",
    "https://api.kreativetemplates.co/v1/authors/sitemap",
  ];

  const urls = await Promise.all(API_URLS.map(fetchSitemapUrls));
  const flatUrls = urls.flat();

  flatUrls.forEach((url) => {
    fields.push({
      loc: url,
      lastmod: new Date().toISOString(),
    });
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
