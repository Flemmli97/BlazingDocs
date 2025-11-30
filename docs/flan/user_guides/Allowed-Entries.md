While the server can add Item/Blocks/Entities to be ignored in a claim you can also do it for a specific claim. For that edit the list of allowed entries via the claim menu.

<img src={require('../img/allowed_entry.png').default} width="512" />

Following actions can be edited by this:
* Item Use
* Block Break
* Block Use
* Entity Attack
* Entity Use

Any entry that is in those list will be ignored by the permission check.
E.g. pigs to the entity attack list will allow anyone to attack pigs inside the claim even if the animal hurt permission is not enabled.

Entries can also accept a `tags` for ease of usage.