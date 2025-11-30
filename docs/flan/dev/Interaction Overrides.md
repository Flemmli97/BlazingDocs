While flan makes it best guess as to what action should be assigned to what permission sometimes you might feel like a different permission is more fitting.

Various interactions allow you to change their assigned permission for that.
This is done by defining an `.json` under `data/<namespace>/flan/claim_interactions_override`.  

Flan contains various overrides itself which you can view under [Overrides](https://github.com/Flemmli97/Flan/tree/HEAD/common/src/generated/resources/data/flan/flan/claim_interactions_override).

Additionally to make generating them easier you can
> Use the online generator under [here](https://flemmli97.github.io/misode.github.io/flan/override/)  
> If using code, use datagen by extending `InteractionOverrideProvider`

## Syntax

The file has following syntax:
```json
{
  "type": <type_id>, // Type of interaction
  "values": [
    {
      "entry": <Value>, // The value this represents
      "permission": <Permission> // The id of the newly assigned permission
    },
    ...
  ]
}
```

### Types

As of now following interactions can be affected

|Type id | Type | Description
|----|:----|:----|
`flan:block_left_click` | Block | Left clicking (not breaking) a block
`flan:block_interact` | Block | Right clicking a block
`flan:item_use` | Item | Right clicking with an item
`flan:entity_attack` | Entity | Attacking an entity
`flan:entity_interact` | Entity | Interacting (right click) an entity
`flan:projectile_block_interact` | Block | When a projectile hits the given block
`flan:projectile_entity_interact` | Entity | When a projectile hits a block but checks the entity. Used when the block given `flan:projectile_block_interact` is not defined

### Value 

Value can be either a tag, a string, or a list of strings representing the content
The content of value is derived from the type id.  

E.g. you want to edit a left click on a block permission (`flan:block_left_click`) so your contents are blocks.

### Example

```json
{
  "type": "flan:entity_interact",
  "values": [
    {
      "entry": "minecraft:pig", // Assign pigs to custom_permission_1
      "permission": "flan:custom_permission_1"
    },
    {
      "entry": "#minecraft:zombies", // Assign all mobs from the #minecraft:zombies tag to custom_permission_2
      "permission": "flan:custom_permission_2"
    },
    {
      "entry": ["minecraft:vindicator", "minecraft:pillager"], // Assign vindicators and pillagers to custom_permission_3
      "permission": "flan:custom_permission_3"
    }
  ]
}
```