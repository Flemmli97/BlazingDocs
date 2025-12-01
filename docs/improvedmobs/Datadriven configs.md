## Attributes

Attribute configs have now been moved from the original config file to a more data-driven way.
This allows it to be configured more extensively and allows you do add additional attributes.

The config file should be under `data/improvedmobs/improvedmobs/config/attributes.json` 

The configs accept math expression providing you with the ability to fine tune the value to your liking.
Available variables for the expressions are:
* `difficulty`: The current difficulty value
* `distance_spawn`: The distance to the world spawn at the current location (i.e. the mobs position)
* `distance_origin`: The distance to 0,0
* `distance_center`: The distance to center position as defined in the config file

The basic syntax is
```json
{
  "additional": {
    "id": <expression> // where id is one of EXPLOSION_DAMAGE_MULTIPLIER, MAGIC_RESISTANCE, PROJECTILE_DAMAGE_MULTIPLIER
    ...
  },
  "attributes": {
    "attribute": { // The id of the attribute
      "operation": <string>, // Operations include add_value, add_multiplied_base, add_multiplied_total
      "value": <expression>
    },
    ...
  }
}
```

A downloadable example datapack using default values is provided:
<a href="/data/improvedmobs/Example%20Datapack.zip" download>Example Datapack</a>

## Mob specific overrides

You can also customize the mod for individual mobs. For example you can configure it so zombies have more health compared to other mobs.

For that create a json file under `data/<namespace>/improvedmobs/entity_configs` 

Using that you can define following:
* What features an entity type should have. Will overwrite the definitions from the config file
* Optional: List of breakable blocks
* Optional: Attributes based on difficulty

If you are using code (and thus have access to datagen) you can use the generator `EntityOverridesProvider` to create those jsons instead.

Otherwise the schema is as follows:

```json
{
  "type": <string>, // The entity type
  "attributes": {
    "replace_config": true, // If true will use the values defined below ONLY. Otherwise combines with it. Attributes defined here take precedence
    "value": {
      "additional": {
        "name": <expression> // Valid names are: MAGIC_RESISTANCE, PROJECTILE_DAMAGE_MULTIPLIER, EXPLOSION_DAMAGE_MULTIPLIER.
        ...
      },
      "attributes": {
        "attribute": {
          "operation": <string>, // Operations include add_value, add_multiplied_base, add_multiplied_total
          "value": <expression>
        }
        ...
      }
    }
  },
  "breakable_blocks": {
    "replace_config": true, // If true replaces the config values. Otherwise combines them
    "value": [] // Either a tag or list of blocks
  },
  "features": [] // List of enabled features. Optional. If not present defaults to the config. An empty list disables all features!
}
```

`type`: This can either be a tag, the id of an entity type, or a mod id. If there are some overlap (e.g. one has an id, another has a tag that includes the id) between other config data then following precedence takes place:
1. Id
2. Tag
3. Mod id

So a config using tags can NEVER override an id one.

Example applying to vanilla zombies:

```json
{
  "type": "minecraft:zombie",
  "attributes": {
    "replace_config": true,
    "value": {
      "additional": {},
      "attributes": {
        "minecraft:generic.max_health": {
          "operation": "add_value",
          "value": "100" // Zombies always have 100 health instead of the vanilla 20
        }
      }
    }
  },
  "breakable_blocks": {
    "replace_config": false,
    "value": []
  },
  "features": [
    "ATTRIBUTES" // Only have attribute feature enabled and nothing else
  ]
}
```