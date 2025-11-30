List of frequently asked questions.

### How to change/disable the difficulty meter?
> You can configure the meter in the client config. Note that the client config is NOT present on the server!

### How to configure the rate the difficulty increases?
> To change the rate of difficulty increase or the maximum difficulty configure the `Difficulty Increase` in config.

### How do I disable a certain feature?
> To disable a feature add that feature to the `Flag Blacklist` in the config.  
> E.g. `["GUARDIAN"]` will disable the guardian feature

### How do I disable a certain feature for a certain mob?
> Configure the mob via the `Entity Configs` in the config.  
> By default this config is treated as a blacklist meaning any mob in here will be EXCLUDED from the given flags  
> E.g. `minecraft:sheep|ATTRIBUTES` will EXCLUDE sheep from attribute modifications but INCLUDE it in everything else  
> For ease of use the value `minecraft:sheep` is equal to `minecraft:sheep|ALL`  
> The mod will ONLY affect hostile mobs by default.

### How do I reset the difficulty?
> As a player there is no way to reset the difficulty.  
> As an op you can use the command `/improvedmobs difficulty set/add` if using a global difficulty type or
> `/improvedmobs difficulty player <players> set/add` if using player based difficulty 