Categories allow you to group quests together.  
If you define a new category the quest menu will display categories first instead of showing the quests directly.

To define a quest create a json with the following content in a datapack under `/data/<namespace>/simplequests_category`:

The id of a quest category will be `<namespace>/filename`.

You can use this generator to ease the creation of it: [Misode Generator](https://flemmli97.github.io/misode.github.io/simplequests/quest-category/)

A quest category follows following schema:
```json
{
  "name": <>, // Name of the category
  "description": <optional>, // A list of description for this category. optional
  "icon": <>, // Icon used in the gui. See Main wiki page for icon syntax
  "only_same_category": true | false, // Default: false. If true only counts quests in the same category towards the max concurrent quest limit
  "max_concurrent_quests": <>, // Default -1. Max amount of quests the player can have at once for this category. If only_same_category is true only counts quests for this category. Else counts all active quests. -1 = the config value. 0 = no limit
  "sorting_id": <>, // Default 0. Lower value = Displayed first in the gui
  "max_daily": <>, // Default -1. Maximum amount of quests acceptable per day in this category
  "required_context": <>, // Optional. List of string context. This only concerns devs. Blocks access to quests if not providing correct context
  "is_visible": true | false, // Default true. If false quests in this category will not be visible
  "is_silent": true | false // Default false. If true quests in this category will not have send chat notifications
}
```