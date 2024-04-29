import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/en",
  },
  integrations: [
    starlight({
      title: "Penkle Analytics Docs",
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://penkle.com/scripts/penkle.min.js",
            "data-domain": "docs.penkle.com",
            defer: true,
            async: true,
          },
        },
      ],
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en-US",
        },
        fr: {
          label: "Français",
          lang: "fr-FR",
        },
      },
      social: {
        github: "https://github.com/penkle-analytics",
        twitter: "https://twitter.com/herbievine",
      },
      components: {},
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Welcome", link: "/" },
            { label: "Benefits of Penkle Analytics", link: "/benefits" },
            { label: "Creating your account", link: "/create-account" },
            { label: "Installing the snippet", link: "/install-snippet" },
            {
              label: "How to know if it's working",
              link: "/how-to-know-if-its-working",
            },
          ],
        },
      ],
    }),
  ],
});
