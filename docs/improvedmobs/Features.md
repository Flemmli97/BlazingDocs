This mod has a wide range of features all which can be disabled via the config. These feature include

## Attributes
Modifies the attributes of spawning mobs based on difficulty. By default following attributes increase depending on the difficulty:
* Health
* Attack damage
* Movement speed

While not directly attribute (as its not possible to add attributes while being server side) following stats are also modified:
* Explosion damage
* Projectile damage
* Magic damage protection

Lastly each mobs **size** also gets randomized

## Armor 
Gives mobs a chance to spawn with armor. The higher the difficulty the higher the chance for mobs to spawn with stronger armor.
To edit the list of equipment and armor edit the `equipment.json` config file.

## Held Items
Gives mobs a chance to spawn with items in their main and offhand. Like armor the strength of the items are dependent on the current difficulty.

## Block Breaking 
Make mobs have a chance to spawn with the ability to break blocks. Block breaking mobs ignore line of sight to their target and pathfinding is modified to take breakable blocks into consideration.
For example if a wall is in the way of a mob and the mob can break the blocks it will actively break the wall to get to its target.

## Item use 
Gives mobs the ability to use various items akin to the player. Some examples include:
* Throwing tridents
* Throwing TNT
* Able to use bows

## Ladder climbing 
While in vanilla mobs can already climb ladders this only happens if the mob is pushed against it. Now mobs can actively climb them in trying to reach their target

## Chest looting 
If the mob does not have an active target it will search for nearby inventories to loot the items so protect your chest now! However they will not loot inventories which have not been opened by a player (So dungeon loots etc. are safe)

## Water mounts 
If mobs are in water and targeting something they are able to summon a guardian to ride it. This guardian by itself doesn't attack, has low health and despawns if the mob dismounts it.

## Flying mounts 
Mobs are able to summon a flying mount (parrot/phantom in some versions) to ride if they deem the target being unreachable by normal means.

## Villager targeting 
Villagers are now targeted not only by zombies. RIP villagers

## Neutral aggressive mobs 
Neutral mobs such as endermen can now attack the player unprovoked. The chance this happens can be changed in the config.

## Pet Protection
The mod comes with a builtin friendly fire prevention for all tamed mobs. Now you can go swing away without worry even with your dog in the way.