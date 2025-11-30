<p style={{gap:"8px", display:"flex"}}>
    <a href="https://www.curseforge.com/minecraft/mc-mods/simple-quests">
        <img alt="curseforge" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/available/curseforge_vector.svg"/>
    </a>
    <a href="https://modrinth.com/mod/simple-quests">
        <img alt="neoforge" height="56" src="https://raw.githubusercontent.com/intergrav/devins-badges/8494ec1ac495cfb481dc7e458356325510933eb0/assets/cozy-minimal/available/modrinth_vector.svg"/>
    </a>
    <a href="https://github.com/Flemmli97/SimpleQuests">
        <img alt="github" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/available/github_vector.svg"/>
    </a>
</p>

Simple Quests is a minecraft mod that provides the ability to create server side quests. Thus this mod is not needed on the client.
The mod by itself does **NOT** add any quests and instead requires you to define them yourself via datapacks.

You can see an example of a quest datapack under https://github.com/Flemmli97/SimpleQuests/tree/HEAD/Example-Datapack,
or other version branch under `/Example-Datapack` directory.

## Tools

Writing jsons by hand is error prone and cumbersome. 
To help with that there are 2 ways:
* Using the custom datapack generator found under https://flemmli97.github.io/misode.github.io/.  
Afterwards go to `Modded Generators -> Quests or Quest Category`.  
Bugs with custom generators should be reported under https://github.com/Flemmli97/misode.github.io!

* If using code the mod provides datagen providers too which you can use (See [Data generation](dev/Data%20generation.md))

## Devs

If you are a dev and want to add more quests/tasks etc. to the mod head on over to [Setup](dev/Environment%20Setup.md).

## Updating to 2.0.0

2.0.0 introduced various breaking changes. You can use https://flemmli97.github.io/misode.github.io/simplequests_convert/ to convert your old datapacks to the new formats
