---
toc_max_heading_level: 4
---

Vanilla loottables were not sufficient the usecases for this mod which is why the mod uses a custom loot system.

If you are confident in using code you should scroll down to [Datagen](Grailwar%20loot%20table#datagen) to checkout the datagen provider as these are more foolproof.

Edit the file in the config folder named grail.json to change possible rewards for winning a grail war.

## Datapack format

This assumes you are familiar with the general structure and setup of datapacks.

Additionally you should familiarize yourself with `LootConditions` and `NumberProviders` which are also used in vanilla loot tables.

All loot tables go under `data/<namespace>/fateubw/grail_loot_tables`.

The general format for a loot table json is as follows:
```json
{
  "name": <string>, // The name of this loot table. Recommended to be a translation key
  "description": [], // Optional. List of strings. The description displayed for this loot table
  "loot_pools": [
    {
      "type": <loot type>, // The type of loot
      ... // Addional data depending on type
    },
  ],
  "conditions": [] // List of loot conditions. Check out vanilla loot conditions
}
```

### Loot Types

Following loot types are available to use in `loot_pools`:

#### Attributes

This gives the player the defined attribute value providing a permanent boost to players stats.

Format:
```json
{
  "id": "fateubw:attribute_entry",
  "attribute": <id>,
  "max": <number>, // The maximum amount of buffs this can give
  "range": <NumberProvider>, // The amount of buffs this entry provides
  "conditions": <LootCondition> // Condition for this entry
}
```

#### Commands

Runs the given command 

Format:
```json
{
  "id": "fateubw:command_entry",
  "command": <string>, // The command to run
  "conditions": <LootCondition> // Condition for this entry
}
```

#### Loot Table

Delegates the content to the given loot tables. One random one will be choosen

Format:
```json
{
  "id": "fateubw:command_entry",
  "loot_tables": [], // The list of loot table ids
  "conditions": <LootCondition> // Condition for this entry
}
```

#### Servant Loot

This entry allows you to achieve two things:
1. If `as_loot` is true the player will obtain the loot of the servant they had in the last grailwar. Servants do not drop their loot otherwise
2. If `as_loot` is false it resummons the players servant but this time independently from the grailwar

Format:
```json
{
  "id": "fateubw:servant_entry",
  "as_loot": true | false
}
```

#### Items

Mimics vanilla loot table syntax to provide items. See `LootPoolEntry` for vanilla loot tables

Format:
```json
{
  "id": "fateubw:vanilla_entry",
  "loot_pool": <LootPoolEntry>
}
```

#### XP

Gives the player xp directly

Format:
```json
{
  "id": "fateubw:xp_entry",
  "range": <NumberProvider>, // The amount of xp to give
  "conditions": <LootCondition> // Condition for this entry
}
```

## Datagen

To ease the creation of loot tables you can use the builtin provider [GrailLootProvider](https://github.com/Flemmli97/FateUBW/blob/1.21.1/common/src/main/java/io/github/flemmli97/fateubw/api/datapack/provider/GrailLootProvider.java).
Simple extend and add it to your normal datagen setup.

Example of datagen usage:
<details>

```java
public class GrailLoottables extends GrailLootProvider {

    public GrailLoottables(PackOutput output, CompletableFuture<HolderLookup.Provider> provider) {
        super(output, Fate.MODID, provider);
    }

    @Override
    protected void add(HolderLookup.Provider provider) {
        this.addLootTable(Fate.modRes("explorers_dream"), GrailLootBuilder.create("fateubw.loot.explorers_dream")
                .addEntry(new XPEntry(UniformGenerator.between(10000, 17000)))
                .addEntry(new VanillaItemEntry(LootItem.lootTableItem(Items.DIAMOND)
                        .apply(SetItemCountFunction.setCount(UniformGenerator.between(2, 4)))
                        .build()))
                .addEntry(new LootTableEntry(List.of(
                        ResourceKey.create(Registries.LOOT_TABLE, ResourceLocation.withDefaultNamespace("chests/end_city_treasure")),
                        ResourceKey.create(Registries.LOOT_TABLE, ResourceLocation.withDefaultNamespace("chests/buried_treasure")),
                        ResourceKey.create(Registries.LOOT_TABLE, ResourceLocation.withDefaultNamespace("chests/shipwreck_treasure"))))));
    }
}
```
</details>