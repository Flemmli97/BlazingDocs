Most config values should be self explanatory but here is still an overview what they do (ver 1.6.6)

| Name        | Description          
|------------- |:-------------:|
startingBlocks | Amount of claim blocks every player starts with. default 500
maxClaimBlocks | Max claim blocks players can have with time. default 5000. Set to -1 to disable the need for claim blocks
ticksForNextBlock | Time in ticks it take to get one claim block. default 1200. Resets if player relogs
minClaimsize | Minimum blocks for a claim to be created. default 100
defaultClaimDepth | Initial depth of a claim. Auto extends down if player builds below. default 10
maxClaims | Max amount of claims a player can have. default -1
defaultClaimName | Default name for claims. Will get passed in the players name. use "%s" to reference it
defaultEnterMessage | Default enter message. Will get passed in the players ("%1$s") name and the current claims ("%2$s") of the player
defaultLeaveMessage | Default leave message
noSpawnClaim | If true cannot claim over vanilla spawn protected area
claimingCooldown | Cooldown before the player can create a new claim
blacklistedWorlds | List of worlds to disable claiming. default []
worldWhitelist | Change blacklist to whitelist. default false
claimingItem | Specify the claiming item. default minecraft:golden_hoe
claimingNBT | Specify the nbt the claiming item has to contain to count as one. See below for format
inspectionItem | Item to inspect a block. default minecraft:stick
inspectionNBT | Specify the nbt the inspection item has to contain to count as one. See below for format
main3dClaims | Allows players to create 3d claims
minHeight3d | Min height for 3d claims
nearbyClaimsToolDisplay | The range for nearby claims to display when holding the claiming tool/stick
claimDisplayTime | Time in ticks to display any claims triggered by any means. default 1000
particleDisplay | Change to the old version of using particles to show claim borders
claimDisplayActionBar | If true displays enter/leave messages in the action bar instead of as a title
permissionLevel | Permission level to execute admin commands. default 2
autoClaimStructures | Automatically claims structures in the world
ftbChunksCheck | Check for ftb chunks claims |
gomlReservedCheck | Check for goml claims |
mineColoniesCheck | Check for minecolonies colony claims |
buySellHandler | Define how claim blocks are bought/sold. See below for more info
maxBuyBlocks | Max amount of claim blocks players are able to buy. -1 = No Limit
lenientBlockEntityCheck | If false any block entity will be considered. If true only block entities with inventory will
breakBlockBlacklist | Add block registry names here that should be ignored when breaking blocks (for e.g. grave stones). Also accepts modid so e.g. "minecraft" will ignore all blocks from minecraft
interactBlockBlacklist | Add block registry names here that should be ignored when doing interacting with it (for e.g. grave stones). Also accepts modid so e.g. "minecraft" will ignore all blocks from minecraft
breakBlockEntityTagBlacklist | Add keys here that when a blockentity contains that key it will be ignored during breaking permission check. Only the base will be considered: If A,B are NBT and A=\{Foo=1\} and B=\{Nested:\{Foo=2\}} and the config contains "Foo" then only A will be detected
interactBlockEntityTagBlacklist | Like above but for interaction
ignoredEntities | Add entitiy registry names here that should be ignored when doing permission checks. Also accepts modid so e.g. "minecraft" will ignore all entities from minecraft
entityTagIgnore | Add keys here that when an entities scoreboard tags contains that key it will be ignored for permission check
customItemPermission (outdated) | Assign or override an item permission map so you could e.g. make it so enderpearls are assigned a different permission than currently. Syntax is \<item/tag\>-\<permission\>
customBlockPermission (outdated) | Assign or override a block permission map. Syntax is \<block/tag\>-\<permission\>
dropTicks | Time in ticks drops will remain unlocked when a player uses the /flan unlockDrops command
inactivityTimeDays | Time in days a player has to be inactive for his claims to be deleted. -1 = disabled
inactivityBlocksMax | Maximum claimblocks a player can have for his claims to be deleted. If a player has more their claims will NEVER be deleted (unless banned)
deletePlayerFile | If the player data will also be deleted due to inactivity
bannedDeletionTime | After how many days since the ban the player and claim data will be deleted.
offlineProtectActivation | How long claim protections are active if a player logs off. -1 = disabled
defaultGroups | Set default permission groups each claim will have. The default value should be pretty self explanatory
globalDefaultPerms | Define per world permission that apply globally here. See below for more information
enableLogs | Enable various logging messages. default false |

## Global Permission
Version 1.1.0+ offer the option to define permissions per world that will be applied globally regardless of claims with only exception of admin claims.

If a permission is defined here that permission will be checked before individual claim permission and claim permission will be ignored. This makes it e.g. possible to disable PvP on the server and allow it only in admin defined areas.\
For the MOBSPAWN permission to work allowMobSpawnToggle needs to be true (only for version 1.4.0 below).\
To specify every dimension use `*` instead of `<dimension key>`.

For version \<= 1.4.0 only false and true are accepted.  
ALLTRUE and ALLFALSE override claim permission (except admin claims) so claims are UNABLE to change the permission for that. 
If you want to have permissions that apply to the whole world but ARE able to be changed in claims use TRUE or FALSE.  
Admins using /flan adminMode are excempted from this.

To define global permission edit your the globalDefaulPerms in your config to something like this:

```json
"globalDefaultPerms": {
    "<dimension key>": {
      "<permission name>": <ALLFALSE|ALLTRUE|FALSE|TRUE>
      ...
    }
    ...
  }
```

Example value here.
Players will never be able to open containers and hurt each other in the overworld and explosions are disabled unless a claim allows it. 
In the nether they will not be able to open doors and will always are able to use anvils:
```json
"globalDefaultPerms": {
    "minecraft:overworld": {
      "OPENCONTAINER": "ALLFALSE",
      "HURTPLAYER": "ALLFALSE",
      "EXPLOSIONS": "FALSE"
    },
    "minecraft:the_nether": {
      "DOOR": "ALLFALSE",
      "ANVIL": "ALLTRUE"
    }
  }
```

## Buy/Sell Handler:

For `buyType/sellType` there are 3 types you can specify:  
`MONEY`: This needs a compatible currency mod installed. See [Integration](./Integration)  
`ITEM`: Use items to buy/sell claimblocks.  
`XP`: Uses xp points (not levels) to buy/sell claimblocks.  

To configure items to buy/sell with edit the `buyItems` or `sellItems` section
`buyItems` contains a list of entries in following format:
```json
{
  "amount": <float>, // The price of this entry
  "predicate": <ItemPredicate> // An item predicate
}
``` 

A simple `ItemPredicate` example is
```json
{
  "items": [
    "minecraft:apple"
  ]
}
```

`sellItems`contains a list of entries in following format:

Example for single item:
```json
{
  "amount": <float>, // The price of this entry
  "item": <ItemStack>
}
```

where `ItemStack` is
```json
{
  "id": <item>, // Id of the item,
  "tag": <Tags>, // 1.20 and below. Tag of the item   
  "components" <Components> // 1.21 and above. Components of the item
}
```

`buyValue/sellValue`: If using `MONEY` or `XP` type. How much "currency" a claimblock is worth. The final payment will be multiplied by `this * <amount of claimblocks>`  
For buying the final amount to pay is rounded up if its not money.  
So if you have a buyValue of 0.5 and you are buying 5 claimblocks which would result in a payment of 2.5 you would need to pay e.g. 3 diamonds for it.  
For selling the final amount is rounded down if its not money.  
So if you have a sellValue of 0.5 and you are selling 5 claimblocks you would only get 5 * 0.5 = 2.5 -> 2 diamonds back  

### Item Example

Example for a Buy/Sell Handler using items where one claimblock = 1 apple:

```json
  "buySellHandler": {
    "buyType": "ITEM",
    "buyValue": -1.0, // This is ignored
    "buyItems": [
      {
        "amount": 1.0,
        "predicate": {
          "items": "minecraft:apple"
        }
      }
    ],
    "sellType": "ITEM",
    "sellValue": -1.0, // This is ignored
    "sellItems": [
      {
        "amount": 1.0,
        "item": {
          "id": "minecraft:apple"
        }
      }
    ]
  }
``` 

## NBT format:

NBT tags matches the item if the items nbt contain all the key-value pair specified in the config:

E.g. following example checks if the item contains the key "ClaimingTool" and if that key is true

```json
{
  "claimingNBT": {
    "ClaimingTool": true
  }
}
```