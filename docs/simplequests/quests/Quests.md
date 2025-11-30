Quests are defined by putting a json file in the datapack directory under `/data/<namespace>/simplequests`.

The id of a quest will be `<namespace>/filename`.

3 different quest types are provided by default:
- Normal quests: A basic quest containing a list of tasks
- Selection quests: A quest containing multiple quests inside which the player has to choose one from
- Sequential quests: A list of quests that need to be finished in order

Translatables can accept a translation key and allow for translation via a lang file. Or you can hardcode the value.

## Advanced structures

Some values which might not be very clear are listed here

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

### EntityPredicate

EntityPredicates are predicates checking for various properties of an entity.
See the section about `entity_properties` in https://minecraft.wiki/w/Predicate for more info as to how to construct one.

You can also generate it using https://misode.github.io/predicate/ by selecting `Entity Properties`

### Time

This can be either 
> An integer representing the amount of ticks i.e. 20 for one second

> Or the following time format: `"<time><indicator>:<time><indicator>..."` where `<indicator>` is one of `[w,d,h,m,s]`
representing week/day/hours/minutes/seconds and `<time>` a max 2 digit number. The "bigger" indicator needs to be defined first!   

#### Examples 

> Following examples are **valid** times:
```
"5w" -> 5 weeks  
"5d:3h" -> 5 days, 3 hours  
"5w:10m:1s" -> 5 weeks, 10 minutes, 1 seconds
```
> Following are **invalid**:
```
"100m" -> max 2 digits  
"10m:5h" -> minutes needs to be after hours 
```

# Base

All quests types inherit the following schema

```json 
{
  "category": <category_id>, // Optional. ID of the associated category
  "name": <name>, // The name of the quest. Translatable
  "description": [], // Optional. List of additional description
  "parent_id": <id>, // Optional. List of ids of parent quests required for this quest
  "redo_parent": true | false, // Default false. If true the player needs to redo the parent quest again upon completion
  "need_unlock": true | false, // Default false. If true needs a command to be unlocked 
  "unlock_condition": <EntityPredicate>, // Optional. Predicate required to accept this quest
  "icon": <ItemStack>, // Default is paper. The icon for the quest
  "repeat_delay": <Time>, // Default 0. Delay before this quest can be repeated again. 0 = no cooldown, -1 = only completable once. 
  "repeat_daily": <int>, // Default 0. Max amount of quest of this type a player can do each real life day, 0 = infinite repeatable.
  "max_repeat": <int>, // Default 0. Allows to limit the amount of times a quest can be repeated.
  "sorting_id": <int>, // Default 0. Quests are sorted in ascending order according to this in the gui. 
  "daily_quest": true | false, // Default false. Daily quests will automatically be accepted and will reset again with a new real life day. Cannot be accepted otherwise
}
```

## Quest

Normal quest contain the actual tasks that the player needs to do.

```json 
{
  ...Base,
  "type": "simplequests_api:quest", // Required. Tells the parse that this is a normal quest
  "loot_table": <id>, // The id of the loottable to give on completion
  "command": "", // Optional. A command to run on completion. Command is run as the player but with full permission
  "submission_trigger": "", // Optional. If specified quest can only be completed via the command /simplequests submit <submission_trigger> which requires op. 
  "tasks": { // The tasks of the quest. See the tasks section
    "<unique_name>": {
      //entry
    },
    ...
  }
}
``` 

## Sequential quests

Sequential quests require completion of all their subquests

```json 
{
  ...Base,
  "type": "simplequests_api:sequential_quest", // Required. Tells the parse that this is a selection quest
  "quests": [], // List of quests needed to be completed
  "loot_table": <id>, // The id of the loottable to give on completion
  "command": "", // Optional. A command to run on completion. Command is run as the player but with full permission
}
```

## Selection quests

Selection quests allow the player to select ONE of the quest to complete

```json 
{
  ...Base,
  "type": "simplequests_api:composite_quest", // Required. Tells the parse that this is a selection quest
  "quests": [], // List of quests the player can select
}
```