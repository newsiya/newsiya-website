// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap([
    {
      loc: "https://newsiya.com",
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]);
}
