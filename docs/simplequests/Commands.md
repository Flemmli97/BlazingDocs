List of commands in form `/simplequests <command>`.  
Each command has the permission node `simplequests.command.<command>`

|Command | Description
|----|:----|
quests | Shows the quest menu
accept \<id\> \| (select \<id\> \<subquest_id\>) | Accepts the quest with the given id <br/> select: Selects the sub quest from the given selection quest
submit | Submits things like items to the current active quests.
current | Shows the current quests
reset \<id\> | Resets the given quest

## Admincommands

|Command | Description
|----|:----|
quest [category] | Shows the quests with the given category
submit \<type\> | Submit to the current quests with the given trigger
resetAll \<player\> | Resets all data for the given player
resetCooldown \<player\> | Resets quest cooldowns for the given player
admin | Switch to admin mode. Currently only allows viewing subquests in the menu
reload | Reloads the config
unlock \<player\> \<id\> | Unlocks the quest for the given player