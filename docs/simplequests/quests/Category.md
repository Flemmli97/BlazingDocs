Categories allow you to group quests together.  
If you define a new category the quest menu will display categories first instead of showing the quests directly.

To define a quest create a json with the following content in a datapack under `/data/<namespace>/simplequests_category`:

The id of a quest category will be `<namespace>/filename`.

## Schema

A quest category follows following schema:
```json
{
  "name": <string>, // Name of the category
  "description": <optional>, // A list of description for this category. optional
  "icon": <ItemStack>, // Icon used in the gui. See Main wiki page for icon syntax
  "only_same_category": true | false, // Default: false. If true only counts quests in the same category towards the max concurrent quest limit
  "max_concurrent_quests": <integer>, // Default -1. Max amount of quests the player can have at once for this category. If only_same_category is true only counts quests for this category. Else counts all active quests. -1 = the config value. 0 = no limit
  "sorting_id": <integer>, // Default 0. Lower value = Displayed first in the gui
  "max_daily": <integer>, // Default -1. Maximum amount of quests acceptable per day in this category
  "required_context": [], // Optional. List of string context. This only concerns devs. Blocks access to quests if not providing correct context
  "is_visible": true | false, // Default true. If false quests in this category will not be visible
  "is_silent": true | false // Default false. If true quests in this category will not have send chat notifications
}
```

### ItemStack

The schema for an ItemStack can be either `a string representing an item`
or the following format:
```json
{
  "item": <item>, // The id of the item
  "Count": <count>, // Default 1. 1.20 and below.
  "count": <count>, // Default 1. 1.21 and above
  "tag": <tag>, // 1.20 and below. NBT tag
  "components": <components>, // 1.21 and above. The items components
}
```

#### Examples

Using a simple string
```json
{
  "foo": "minecraft:dirt"
}
```

For a more customized item
```json
{ 
  "foo":{
    "item": "minecraft:dirt",
    "count": 2,
  }
}
```
