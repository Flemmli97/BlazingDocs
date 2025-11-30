import { themes as prismThemes } from "prism-react-renderer";
import type { Config, PluginConfig, PluginOptions } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type {
  PluginOptions as DocPluginOption,
  VersionOptions,
} from "@docusaurus/plugin-content-docs";
import type { NavbarItem } from "@docusaurus/theme-common";
import type { PluginOptions as SearchOptions } from "@easyops-cn/docusaurus-search-local";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

type Project = {
  id: string;
  label: string;
  versions?: { [versionName: string]: VersionOptions };
};

const projects: Project[] = [
  { id: "flan", label: "Flan" },
  { id: "improvedmobs", label: "Improved Mobs" },
  { id: "fateubw", label: "Fate/Unlimited Block Works" },
  {
    id: "simplequests",
    label: "Simple Quests",
    versions: {
      current: {
        label: "2.0.0+",
      },
      "pre-2.0.0": {
        label: "< 2.0.0",
      },
    },
  },
];

type ProjectData = {
  plugin: PluginConfig;
  navBar: NavbarItem;
  versionDrop: NavbarItem;
  home: string;
};

const projectsData: { [id: string]: ProjectData } = projects.reduce<
  Record<string, ProjectData>
>((acc, project) => {
  acc[project.id] = {
    plugin: [
      "@docusaurus/plugin-content-docs",
      {
        id: `${project.id}`,
        path: `docs/${project.id}`,
        routeBasePath: `${project.id}`,
        sidebarPath: `./sidebars/${project.id}.ts`,
        editUrl: "https://github.com/Flemmli97/BlazingDocs",
        lastVersion: project.versions ? "current" : undefined,
        versions: project.versions,
      } as DocPluginOption,
    ],
    navBar: {
      type: "docSidebar",
      sidebarId: `${project.id}Sidebar`,
      label: `${project.label}`,
      docsPluginId: `${project.id}`,
    },
    versionDrop: {
      type: "docsVersionDropdown",
      position: "right",
      docsPluginId: `${project.id}`,
    },
    // Uses the first entry of the sidebar
    home: `${project.id}/${
      require(`./sidebars/${project.id}.ts`)[`${project.id}Sidebar`][0]
    }`,
  } as ProjectData;
  return acc;
}, {});

const config: Config = {
  title: "Blazing Docs",
  tagline: `Welcome! This site serves as a wiki and documentation for all of Flemmli97's mods.
    You can check out all projects on curseforge or modrinth below`,
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  url: "https://wiki.blazing-coop.net",
  baseUrl: "/",
  organizationName: "io.github.flemmli97",
  projectName: "blazing_docs",
  trailingSlash: false,

  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/theme.css"],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [...Object.values(projectsData).map((d) => d.plugin)],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        docsRouteBasePath: [...projects.map((p) => p.id)],
        docsDir: [...projects.map((p) => p.id)],
        docsPluginIdForPreferredVersion: "flan",
        searchContextByPaths: [
          ...projects.map((p) => {
            return { label: p.label, path: p.id };
          }),
        ],
        hideSearchBarWithNoSearchContext: true,
      } satisfies PluginOptions & SearchOptions,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "Blazing Docs",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "dropdown",
          sidebarId: "navMods",
          position: "left",
          label: "Mods",
          items: [...Object.values(projectsData).map((d) => d.navBar)],
        },
        ...Object.values(projectsData).map((d) => d.versionDrop),
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [],
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "custom-linkedIcon",
          href: "https://www.curseforge.com/members/flemmli97/projects",
          icon: "simple-icons:curseforge",
          label: "CurseForge",
          position: "right",
          size: 28,
        },
        {
          type: "custom-linkedIcon",
          href: "https://modrinth.com/user/flemmli97",
          icon: "simple-icons:modrinth",
          label: "Modrinth",
          position: "right",
          size: 28,
        },
        {
          type: "custom-linkedIcon",
          href: "https://discord.gg/8Cx26tfWNs",
          icon: "simple-icons:discord",
          label: "Discord",
          position: "right",
          size: 30,
        },
        {
          type: "custom-linkedIcon",
          href: "https://github.com/Flemmli97",
          icon: "mdi:github",
          label: "GitHub repository",
          position: "right",
          size: 30,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Mods",
          items: [
            ...projects.map((p) => {
              return {
                label: p.label,
                to: projectsData[p.id].home,
              };
            }),
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/8Cx26tfWNs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "CurseForge",
              href: "https://www.curseforge.com/members/flemmli97/projects",
            },
            {
              label: "Modrinth",
              href: "https://modrinth.com/user/flemmli97",
            },
            {
              label: "GitHub",
              href: "https://github.com/Flemmli97",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flemmli97. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["groovy", "java", "kotlin", "json", "json5"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
