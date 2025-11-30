import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  simplequestsSidebar: [
    "Simple Quests",
    "Config",
    "Commands",
    {
      Quests: ["quests/Category", "quests/Quests", "quests/Tasks"],
    },
    {
      Developers: ["dev/Environment Setup", "dev/Addon", "dev/Data generation"],
    },
  ],
};

export default sidebars;
