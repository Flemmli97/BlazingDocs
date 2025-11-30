By default claims prevent all destructive actions by other players. 
To change this behavior you can edit the permissions in a claim.

First stand inside the claim you want to edit and type `/flan menu`. This will bring
up the settings of the claim.

<img src={require('../img/claim_perm_1.png').default} width="512" />

Claim permissions apply to all players. Some permissions cannot be edited unless changed in the config. See [].

<img src={require('../img/claim_perm_2.png').default} width="512" />

## Group permissions

If you want to allow certain players to be able to do (or don't do) things you need to edit the group permissions.

<img src={require('../img/group_perm_1.png').default} width="512" />

Groups are set of players with customized permissions. By default FLAN adds the two groups
* Co-Owner which allows nearly all permissions.
* Visitor which allows more non destructive permissions.

You can add more groups if needed.

<img src={require('../img/group_perm_2.png').default} width="512" />

Left-Clicking on a group will bring up the menu listing all players in that group. You can add/remove players here.

<img src={require('../img/group_perm_3.png').default} width="512" />

Right-Clicking on a group will instead allow you to edit the permission of the group. Unlike claim permissions group permission also has a `default` value.
`default` will default back to the claims permission.

<img src={require('../img/group_perm_4.png').default} width="512" />