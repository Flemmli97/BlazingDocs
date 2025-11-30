Tasks are the heart of a quest and define what the player needs to do. A quest will be completed if all its tasks are finished. This page lists all usable task types.

## Advanced structures

Some values which might not be very clear are listed here

### Predicates

Various predicates are used frequently. They define property conditions for the things they represent.
See https://minecraft.wiki/w/Predicate for information about predicates

You can also generate them using https://misode.github.io/predicate/
and selecting
> ItemPredicate -> `Match tool`  
> BlockPredicate -> `Block state property`  
> EntityPredicate -> `Entity property`  

### NumberProvider

NumberProviders allow you to generate random numbers with advanced generation methods.
See https://minecraft.wiki/w/Loot_table#Number_provider 

Simplequests also adds an additional `NumberProvider` that will take into account the amount of completed quests to adjust the final amount.
Format:
```json
{
  "type": "simplequests_api:context_multiplier", // Required
  "multiplier": <float>,
  "max":  <float>,
  "value": <NumberProvider> // Underlying NumberProvider used to generate the random number
}
```  

### Descriptive Value

A DescriptiveValue is a structure of following format
```json
{
  "value": <value>,
  "description": <> // A description of what this element represents
}
```
If your value is very simple the mod can generate a default one for you.
Simple ones include all advancements, single item/block/entity predicates (or tags too).  
Anything else REQUIRE a description (the game will yell at you in that case too)
E.g. an ItemPredicate with nbt check will fail so a description is REQUIRED.

## Task types

For simplicity sake from now on `value(Desc)` will indicate a [DescriptiveValue](Tasks.md#descriptive-value) of type `value`. 

When choosing a quest the defined tasks will be resolved.  
Resolving a task usually selects a random value from the defined task. E.g. you define multiple advancements and ONE will be chosen. 

The description of the selected value serves as the new description of the RESOLVED task and has access to some arguments. This will be indicated in the tasks below. Lets call this new description the `resolved description`.

E.g. for advancement tasks the selected advancement gets passed in as an argument to the description. So `Obtain the following advancement %1$s` -> `%1$s` is the resolved advancement

### Advancement

Player needs to have the advancement when submitting the quest.  
A random advancement will be selected when this task gets resolved.

```json
{
  "id": "simplequests_api:advancement",
  "advancements": [], // List of advancements(Desc). One random will be selected
  "reset": true | false, // A description of what this element represents
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen advancement. Args: the chosen advancement

### Block Interact Task

Triggered when the player interacts (right click) with the given block while holding a matching item 

```json
{
  "id": "simplequests_api:advancement",
  "block_predicates": [], // List of BlockPredicate(Desc). One random will be selected
  "item_predicates": [], // Optional. List of ItemPredicate(Desc). One random will be selected
  "amount" <NumberProvider>,
  "consume": true | false, // If true the item gets used up
  "use": true | false, // If true requires right click instead of breaking the block
  "allow_dupes": true | false, // If true can interact with the same block multiple times
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen block predicate. Args: the chosen item predicate if present, amount

### Crafting / Fishing Task

Format for both are the same.
Triggered when the player crafts or fishes the given item respectively

```json
{
  "id": "simplequests_api:crafting", // If crafting
  "id": "simplequests_api:fishing", // If fishing
  "item_predicates": [], // List of ItemPredicate(Desc). One random will be selected
  "amount" <NumberProvider>,
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen item predicate. Args: amount

### Entity Interact Task

Triggered when the player interacts (right click) with the given entity while holding a matching item 

```json
{
  "id": "simplequests_api:entity_interact",
  "entity_predicates": [], // List of EntityPredicate(Desc). One random will be selected
  "item_predicates": [], // Optional. List of ItemPredicate(Desc). One random will be selected
  "amount" <NumberProvider>,
  "consume": true | false, // If true the item gets used up
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen entity predicate. Args: the chosen item predicate if present, amount

### Item Task

Player needs to submit the items via the submit command. 

```json
{
  "id": "simplequests_api:item",
  "predicates": [], // List of ItemPredicate(Desc). One random will be selected
  "amount" <NumberProvider>,
  "consume_items": true | false, // If true the items get used up
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen item predicate. Args: amount

### Kill Task

Player needs to kill the given mobs

```json
{
  "id": "simplequests_api:kill",
  "predicates": [], // List of EntityPredicate(Desc). One random will be selected
  "amount" <NumberProvider>,
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```
`resolved description`: description of the chosen entity predicate. Args: amount

### Predicate Task

A ticking task. Will be completed if the player matches the provided predicate.
This replaces the old Location and Position Entries.

```json
{
  "id": "simplequests_api:predicates",
  "predicates": [], // List of EntityPredicate(Desc). One random will be selected. Predicate NEED to apply to the player
  "description": <>,
  "submit": true | false // If true this task is not ticking and requires the submit command
}
```
`resolved description`: description of the chosen predicate

### XP Task

Player needs to submit the given amount of xp.

```json
{
  "id": "simplequests_api:xp",
  "amount" <NumberProvider>, // XP to submit
  "description": <>,
  "player_predicate": <EntityPredicate> // Optional. Required player condition for this task
}
```