
Quests are defined by putting a json file in the datapack directory under `/data/<namespace>/simplequests`.

The id of a quest will be `<namespace>/filename`.

As of 1.4.0 there are two types of quests: 
- Normal quests: A basic quest
- Selection quests: A quest containing multiple quests inside which the player has to choose one from
- Sequential quests: A quest containing multiple quests inside which the player has to complete in order

## Base

Both quest types have the following structure

```json 
{
  "category": <category_id>, //optional
  "task": <name>, //required
  "description": <description>, //optional
  "parent_id": <id>, //optional
  "redo_parent": true | false, //default false
  "need_unlock": true | false, //default false
  "unlock_condition": <entity_predicate>, //optional
  "icon": <>, //optional
  "repeat_delay": <int>, //optional
  "repeat_daily": <int>, //optional
  "sorting_id": <int>, //optional
  "daily_quest": true | false, //default false
  "visibility": "DEFAULT" | "ALWAYS" | "NEVER"
}
```

`category`: ID of the associated category. See https://github.com/Flemmli97/SimpleQuests/wiki/Quest-Category  
`task`: A description/name/overview of the quest  
`description`: A more detailed description for the quest. Accepts an array of strings for multiple lines.  
`parent_id`: Ids of parent quests. Parent quests need to be completed first before this one. You can either use a string for single parent or an array for multiple parents.  
e.g. `"parent_id": "quest_id"` or `"parent_id": ["quest_id","other_id"]` are both valid  
`redo_parent`: If true the player needs to redo the parent quest to do this quest again  
`need_unlock`: If true needs a command to be unlocked  
`unlock_condition`: An entity predicate (see https://github.com/Flemmli97/SimpleQuests/wiki/Entries-Types) to test the player against and if false the player cannot accept the quest. See the Entries Type page for entity predicates  
`icon`: Specify an icon for the quest. If not specified defaults to paper. Either via a simple string or using following syntax. 
```json
{
  "item": <item>
  "count": <count> //default 1
  "tag: <tag> //nbt tag in string form. optional
}
```
`repeat_delay`: Cooldown in ticks before the player can do this quest again. 0 = no cooldown, -1 = only completable once. default 0.  
You can also use the following time format: `"<time><indicator>:<time><indicator>..."` where `<indicator>` is one of `[w,d,h,m,s]`
representing week/day/hours/minutes/seconds and `<time>` a max 2 digit number. But the "bigger" indicator needs to be first.  
<u>Following examples are **valid** times:</u>  
"5w" -> 5 weeks  
"5d:3h" -> 5 days, 3 hours  
"5w:10m:1s" -> 5 weeks, 10 minutes, 1 seconds  
<u>Following are **invalid**:</u>  
"100m" -> max 2 digits  
"10m:5h" -> minutes needs to be after hours  
`repeat_daily`: Max amount of quest of this type a player can do each real life day, 0 = infinite repeatable. default 0  
`sorting_id`: Quest will be sorted according to this. Quests with same sorting_id will be sorted according to their id. default 0  
`daily_quest`: If the quest is a daily quest. Daily quests will automatically be accepted and will reset again with a new real life day. 
They can not be accepted via other means. default false  

## Normal quests

Additionally for normal quests there are the following possible fields:

```json 
{
  "type": "simplequests:quest", //required. Tells the parse that this is a normal quest
  "loot_table": <id>, //required
  "command": "", //optional
  "submission_trigger": "", //optional
  "entries": { 
    <unique_name>: {
      //entry
    },
    ...
  }
}
```

`loot_table`: Id of a loot table to give the player upon completion  
`command`: A command to execute upon completing this quest  
`submission_trigger`: If specified quest can only be completed via the command /simplequests submit \<submission_trigger\> which requires op. 
Useful for e.g. having a sign running this command so the player needs to go there to complete the quest  
`entries`: Things the player needs to do to complete the quest. Each entry should be given a unique name. For possible entries see https://github.com/Flemmli97/SimpleQuests/wiki/Entries-Types  

## Selection quests

For selection quests there are these additional fields:

```json 
{
  "type": "simplequests:composite_quest", //required. Tells the parse that this is a selection quest
  "quests": [], //required
}
```

`quests`: A list of quest ids this selection quest contains

## Sequential quests

For sequential quests there are these additional fields:

```json 
{
  "type": "simplequests_api:sequential_quest", // Required. Tells the parse that this is a selection quest
  "quests": [], // List of quests needed to be completed
  "loot_table": <id>, // The id of the loottable to give on completion
  "command": "", // Optional. A command to run on completion. Command is run as the player but with full permission
}
```

`quests`: A list of quest ids this selection quest contains