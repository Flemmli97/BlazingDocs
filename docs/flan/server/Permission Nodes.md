List of permission nodes to be used with a permission system.  
Supports 
* Fabric Permission API (used by Luckperms)
* FTBRanks

Following permission nodes are added (Most are for the commands):

|Node | Description |
|-----|:------|
flan.command.reload | Reload command
flan.command.read.griefprevention | Griefprevention reading command
flan.claim.create | Permission to create claims (tool + command)
flan.claim.admin.create | Permission to create admin claims
flan.command.menu | Menu command
flan.command.trapped | Trapped command
flan.command.flan.command.personal | Personal Groups GUI command
flan.command.info | Info command
flan.command.transfer | Transfer command
flan.command.delete | Claim delete command
flan.command.delete.all | Delete all command
flan.command.delete.sub | Delete subclaims command
flan.command.delete.sub.all | Delete all subclaims command
flan.command.list | List claims command
flan.command.list.all | List all claims command
flan.command.claim.mode | Switch mode command
flan.command.bypass.claim | Switch admin mode command
flan.command.admin.claim | Toggle admin claim command
flan.command.admin.list |  List claims command (Admins)
flan.command.admin.delete | Admin delete command
flan.command.admin.give | Give claimblocks command
flan.bypass.admin.mode | Bypasses claim permissions
flan.command.group | Edit groups command
flan.command.fakeplayer | FakePlayer command
flan.command.permission | Edit permissions command
flan.command.claim.ignore | IgnoreList command
flan.command.buy | Buy claimblocks command
flan.command.sell | Sell claimblocks command
flan.command.unlock.all | Unlock other player death drops command
flan.command.name | Name command
flan.command.home | Permission to set a claims home
flan.command.teleport | Permission to teleport to a claims home
flan.claim.blocks.max | Numbered permission. Defines the max claimblocks for a player. The new passive maximum claimblocks for a player is the maximum between this value and the config value
flan.claims.amount | Numbered permission. Defines max claims for a player
flan.claim.blocks.cap.amount | Numbered permission. Temporary limit on claimblocks. Claimblocks will still increase but are not usable till limit is lifted
flan.claim.blocks.bonus | Numbered permission. Bonus claimblocks