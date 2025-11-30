Admin claims are claims only admins can modify. They also don't abide by the locked permissions set in the configs and override those
values. 

Use `/flan setAdminClaim true` to change a claim into an admin claim. Using false will change it back and give that claim to the
person who executed that command.

Since admin claims are not assigned to any players they will not use up any claimblocks.

## Potion Effects

Allows to give a claim potion effects. These will be then applied to players inside the claim.

Add potion effects through the claim menu.

Syntax for valid effects are \<potion id\>;\<amplifier\>

e.g. `minecraft:regeneration;1`

The ability to add potion effects is a claim permission so its possible to enable it for all players. 
Keep in mind though that the potions are not restricted so this shouldn't be done in most of the cases.

