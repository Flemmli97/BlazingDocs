Following commands are added to allow you to manage the mods

The base command `/improvedmobs` returns the current difficulty of the player running the command.
This can be run by everyone.

## `/improvedmobs difficulty (set | add)`

Provides ways to manipulate the global difficulty.
Requires `Difficulty type` in the config to be set to `GLOBAL`

### Syntax
> /improvedmobs difficulty (set | add) \<difficulty\>

### Example
> /improvedmobs difficulty set 10
Sets the global difficulty to 10

## `/improvedmobs difficulty player`

Provides ways to manipulate player based difficulty
Requires `Difficulty type` in the config to be set to a player based one

### Syntax
> /improvedmobs difficulty player \<players\> (set | add) \<difficulty\>

### Example
> /improvedmobs difficulty player @p set 10

Sets your player difficulty to 10

## `/improvedmobs difficulty (pause | unpause)`

Pauses or unpauses the difficulty increase

### Syntax
> /improvedmobs difficulty (pause | unpause)
(Un)pauses the global difficulty increase
> /improvedmobs difficulty (pause | unpause) player \<players\>
(Un)pauses the difficulty increase of the given players

### Example
> /improvedmobs difficulty pause
Pauses the global difficulty increase
> /improvedmobs difficulty pause player @p
Pauses your difficulty increase

## `/improvedmobs difficulty simulate`

Simulates difficulty increases for x steps. Useful to test your difficulty increase config.
One difficulty step is done each 2400 ticks with one minecraft day being 24000 ticks.

### Syntax
> /improvedmobs difficulty simulate \<steps\>
Simulates \<steps\> steps of increases for the global difficulty
> /improvedmobs difficulty simulate \<steps\> player \<players\>
Simulates \<steps\> steps of increases for the given players difficulty

### Example
> /improvedmobs difficulty simulate 10
This will increase the global difficulty by one minecraft day