A lot of entries use minecrafts builtin predicates like item, block ... predicates.  
The MC Wiki lists their structure in more detail https://minecraft.fandom.com/wiki/Predicate#Predicate_JSON_format.  

You can use this site to generate them: https://misode.github.io/predicate/  

For `item predicates` select `Match tool` and copy the `predicate` field  
For `entity predicates` select `Entity properties` and copy the `predicate` field  
For `location predicates` select `Location Check` and copy the `predicate` field  
For `block predicates` select `Location Check`, define the block and copy the `block` field inside of `predicate`  

Each entry type has also a multi-variant which allows a quest to have multiple entries that will be resolved when the player accepts the quest.
You can e.g. have an multi item entry with multiple tasks defined (`coal, iron ingot, gold ingot...`) and when the player accepts the quest those tasks will be resolved randomly to a single one (-> `iron ingot`) allowing more variety in quests.  
For `NumberProviders` used in those entries see https://minecraft.fandom.com/wiki/Loot_table#Number_Providers (though misodes also is able to generate them: Select `Value Check` copy the `value` field).  
Additionally you can define a **custom** `NumberProvider` that will take into account the amount of completed quests to adjust the final amount.
Example:
```json
"amount": {
        "type": "simplequests:context_multiplier",
        "multiplier": 1,
        "max": 10
        "value": {
            "type": "minecraft:uniform",
            "min": 10,
            "max": 15
        }
      }
```  

Lastly `descriptive predicates` are a map of a predicate to its description and will be used in a few multi-types and all follow the same layout of:
```json
{
  "description": "emerald",
  "value": {
    //the predicate
  }
}
```
Optional descriptive predicates accept both the predicate alone and the above structure.

The following entry-types are supported:

# **Item Type**:
Detects items in players inventory upon submitting the quest
```json
{
  "predicate": <>, //An item predicate
  "description": <>, //Optional. Useful for tag ingredient if the tag has a lot of items to shorten the default description.
  "amount": <>, //Amount of items to hand in.
  "consumeItem": true | false, //optional. default true. If false items will not be consumed when submitting
  "id": "simplequests:item"
}

## **Multi Type**:
```json
{
  "predicates": [], //List of item predicates
  "description": <>, //required
  "amount": <range>, //A NumberProvider that specifies the amount of items to hand in.
  "consumeItem": true | false, //optional. default true. If false items will not be consumed when submitting
  "id": "simplequests:multi_item"
}

```

# **Kill Entity Type**:
Detects if players kill the matching entity
```json
{
  "predicate": <>, //An entity predicate
  "amount": <>, //Amount of entities to kill
  "description": <>, //Optional
  "id": "simplequests:entity"
}
```

## **Multi Type**:
```json
{
  "predicates": <>, //A list of optional descriptive entity predicates
  "amount": <>, //A NumberProvider that specifies the amount
  "description": <>, //required
  "id": "simplequests:multi_kill"
}
```

# **XP Type**:
Player needs to hand in x amount of xp levels
```json
{
  "amount": <>, //Xp levels
  "id": "simplequests:xp"
}
```

## **Multi Type**:
```json
{
  "amount": <>, //A NumberProvider that specifies the amount
  "description": <>, //required
  "id": "simplequests:multi_xp"
}
```

# **Advancement Type**:
Player needs to have the advancement when submitting the quest
```json
{
  "advancement": <>, //Id of the advancement
  "reset": true | false //Optional. default false. If true will revoke the advancement for the player upon completion
  "id": "simplequests:advancement"
}
```

## **Multi Type**:
```json
{
  "advancements": [], //A list of advancement ids
  "description": <>, //required
  "reset": true | false //Optional. default false. If true will revoke the advancement for the player upon completion
  "id": "simplequests:multi_advancements"
}
```

# **Position Type**:
Player needs to go to the position
```json
{
  "pos": {
    "x": <int>, 
    "y": <int>, 
    "z": <int>, 
  },
  "minDist": <int>, //Min distance to the given position
  "description": <>, //Optional
  "id": "simplequests:position"
}
```

## **Multi Type**:
```json
{
  "positions": [] //List of possible positions in above format. Also accepts it in descriptive format
  "minDist": <int>, //Min distance to the given position
  "description": <>, //required
  "id": "simplequests:multi_position"
}
```

# **Location Type**:
More specifig than the position type. Allows for checks of dimensions, structures etc.
```json
{
  "predicate": <>, //A location predicate
  "description": <>, //A description of what the player must do
  "id": "simplequests:location"
}
```

## **Multi Type**:
```json
{
  "locations": <>, //A list of descriptive location predicates
  "description": <>, //A description of what the player must do
  "id": "simplequests:multi_location"
}
```

# **Entity Interaction Type**:
Triggered when the player interacts (right click) with the given entity while holding a matching item
```json
{
  "item": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "predicate": <>, //An entity predicate
  "amount": <int>, //Amount of times this has to be done. Doing it on the same entity will not work
  "consume": true | false, //Optional. default false. If true item will be consumed. Note that if an item normally gets consumed already (e.g. name tags) this should be false or else it will consume 2 items
  "description": <>, //A description of what the player must do
  "id": "simplequests:entity_interact"
}
```

## **Multi Type**:
```json
{
  "itemPredicates": <>, //A list of descriptive item predicates
  "entityPredicates": <>, //A list of descriptive entity predicates
  "amount": <amount>, //A NumberProvider for the amount needed
  "consume": true | false, //Optional. default false. If true item will be consumed. Note that if an item normally gets consumed already (e.g. name tags) this should be false or else it will consume 2 items
  "description": <>, //A description of what the player must do
  "taskDescription": //Description of the actual task with the item predicate, entity description and amount provided as args. So for "%1$s %2$s %3$s" %1$s is the item description, %2$s the entity and %3$s the amount
  "id": "simplequests:entity_interact"
}
```

# **Block Interaction Type**:
Triggered when the player interacts (right click) with the given block while holding a matching item
```json
{
  "item": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "predicate": <>, //Optional. A block predicate. At least item or predicate has to be specified
  "amount": <int>, //Amount of times this has to be done. Doing it on the same entity will not work
  "use": true | false, //Set to true for using on a block (right click). Set to false for break the block
  "consume": true | false, //Optional. default false. If true item will be consumed. Note that if an item normally gets consumed already (e.g. name tags) this should be false or else it will consume 2 items. Also if you e.g. have it as "mine a block" the item used to mine it will get consumed
  "description": <>, //A description of what the player must do
  "id": "simplequests:block_interact"
}
```

## **Multi Type**:
```json
{
  "itemPredicates": <>, //Optional. A list of descriptive item predicate
  "blockPredicates": <>, //Optional An entity predicate. At least itemPredicates or blockPredicates has to be not empty
  "amount": <>, //A NumberProvider for the amount needed
  "use": true | false, //Set to true for using on a block (right click). Set to false for break the block
  "consume": true | false, //Optional. default false. If true item will be consumed. Note that if an item normally gets consumed already (e.g. name tags) this should be false or else it will consume 2 items. Also if you e.g. have it as "mine a block" the item used to mine it will get consumed
  "description": <>, //A description of what the player must do
  "taskDescription": <>, //Description of the actual task with args item predicate, block predicate and amount
  "id": "simplequests:multi_block_interaction"
}
```

# **Crafting Type**:
Triggered when the player crafts an item
```json
{
  "item": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "playerPredicate": <>, //An entity predicate. Note if you specify an entity type that's anything but a player this will always fail
  "amount": <int>, //Amount of items needed to be crafted
  "description": <>, //A description of what the player must do
  "id": "simplequests:crafting"
}
```

## **Multi Type**:
```json
{
  "itemPredicates": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "entityPredicates": <>, //An entity predicate. Note if you specify an entity type that's anything but a player this will always fail
  "amount": <>, //A NumberProvider for the amount needed
  "description": <>, //A description of what the player must do
  "taskDescription": <>, //Description of the actual task with args item predicate, player predicate and amount
  "id": "simplequests:multi_crafting"
}
```

# **Fishing Type**:
Triggered when the player fishes an item
```json
{
  "item": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "playerPredicate": <>, //An entity predicate. Note if you specify an entity type that's anything but a player this will always fail
  "amount": <int>, //Amount of items needed to be fished
  "description": <>, //A description of what the player must do
  "id": "simplequests:fishing"
}
```

## **Multi Type**:
```json
{
  "itemPredicates": <>, //Optional. An item predicate. If not specified matches every item (empty hand too)
  "entityPredicates": <>, //An entity predicate. Note if you specify an entity type that's anything but a player this will always fail
  "amount": <>, //A NumberProvider for the amount needed
  "description": <>, //A description of what the player must do
  "taskDescription": <>, //Description of the actual task with args item predicate, player predicate and amount
  "id": "simplequests:multi_fishing"
}
```

# Example: 

```json
{
  "loot_table": "minecraft:chests/jungle_temple",
  "repeat_delay": 36000,
  "task": "Slay mobs",
  "entries": {
    "zombies": {
      "entity": "minecraft:zombie",
      "amount": 12,
      "id": "simplequests:entity"
    },
    "skeleton": {
      "entity": "minecraft:skeleton",
      "amount": 10,
      "id": "simplequests:entity"
    },
    "rottenflesh": {
      "ingredient": {
          "item": "minecraft:rotten_flesh"
      },
      "amount": 8,
      "id": "simplequests:ingredient"
    },
    "xp": {
      "amount": 5,
      "id": "simplequests:xp"
    }
  }
}
```
Player need to kill 12 zombies, 10 skeletons and provide 8 rotten flesh and 8 xp levels to complete the quest.  
As completion reward the player gets the content of a jungle temple chest.    
This quest is redoable every 30 min (36000 ticks)  

