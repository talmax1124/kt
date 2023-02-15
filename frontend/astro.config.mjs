import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";



// https://astro.build/config
export default defineConfig({
  site: "https://knighttimesnews.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    sanity(
      {
        projectId: "9uj5y2w4",
        dataset: "production",
        apiVersion: "2021-03-25",
        useCdn: true,
      },
      {
        pages: [
          {
            name: "article",
            path: "/article/:slug",
            template: "./src/pages/article.astro",
          },
        ],
      }
    ),
  ],
});
