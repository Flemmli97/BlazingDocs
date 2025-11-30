import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  flanSidebar: [
    "Flan",
    "FAQ",
    {
      "User Guides": [
        "user_guides/Getting-Started",
        "user_guides/Claim Permissions",
        "user_guides/Allowed-Entries",
        "user_guides/Commands",
      ],
    },
    {
      "Server stuff": [
        "server/Admin Claims",
        "server/Admin-Commands",
        "server/Config",
        "server/Integration",
        "server/Permission Nodes",
      ],
    },
    { "Datapack/Mod Developer": ["dev/Custom Permission", "dev/Interaction Overrides"] },
  ],
};

export default sidebars;
