All commands are in the form `/flan <command>`


|Command | Description
|----|:----|
help \<page\> \| (cmd \<command\>) | Shows all available commands or info for the given command
add \<x y z\> \<x y z\> | Creates a claim with the given positions. same as using the claim tool
add all \| (rect \<size\>) | all: Creates a claim of the max possible size given your claimblocks or a rectangle of given size
expand \<distance\> | Expands the claim you are standing in in the direction you are looking
menu | When standing in a claim you have permissions for opens the claim menu
setHome | Standing in a claim with sufficient permission sets that claims home to the players position
trapped | If in a claim not owned by the player attempts to teleport the player out of it after 5 seconds
name \<name\> | Sets the current claims name
unlockDrops | Unlocks dropped items from death so other players can pick them up too
personalGroups | Opens the gui to edit personal groups
info [ALL \| SIMPLE \| GLOBAL \| GROUP] | Prints infos about the claim you're standing in
transferClaim \<player\> | Gives ownership of the claim to the specified player. only works if you're the claim owner
delete | Deletes the current claim
deleteAll | Deletes all your claims (you need to double type to confirm it so no accidents)
deleteSubClaim | Deletes the current subclaim
deleteAllSubClaims | Deletes all subclaim of the current claim
list | Lists all claims you have
switchMode \<DEFAULT \| SUBCLAIM \| DEFAULT_3D \| SUBCLAIM_3D\> | Switch between different claiming modes
buy \<amount\> | Buys \<amount\> claimblocks 
sell \<amount\> | Sells \<amount\> claimblocks 
claimMessage \<enter \| leave\> \<title \| subtitle\> (text \<component\> \| string \<string\>) | Sets the enter/leave messages for claims 
group (add \<name\>) | (remove \<name\>) | (players \<add \| remove\> \<name\> \<players\>) | Edits the permission groups for a claim
fakePlayer | Listen to events of fakeplayer allowing you to more easily identify them
fakePlayer \<add \| remove\> \<uuid\> | Add/remove fakeplayers to the claim. They will bypass permission checks
teleport (\<self | global\> \<name or uuid\>) | (other \<player\> \<name or uuid\>) | Teleports to the specific claim
permission \{global \| (group \<name\>) \| (personal \<name\>)\} \<permission\> \<true \| false \| default\> | Sets global/group/personal permissions. Also editable via the claim menu (for group perm right click on the group in the menu)
ignoreList \<add \| remove\> \<type\> \<entry\> | Adds the entry to a claims ignorelist