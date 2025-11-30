A builtin data generator is provided allowing you to generate quest jsons instead of writing them by hand.

Simply extend [QuestProvider](https://github.com/Flemmli97/SimpleQuests/blob/HEAD/common-api/src/main/java/io/github/flemmli97/simplequests_api/datapack/provider/QuestProvider.java) to get access to it.

Example

<details>

```java
public class ExampleQuestPackGenerator extends QuestProvider {

    [...]

    @Override
    protected void add(HolderLookup.Provider provider) {
        //Advancement example
        this.addQuest(new Quest.Builder(ResourceLocation.fromNamespaceAndPath("example", "advancement_example"),
                "Example for an advancement quest",
                ResourceLocation.parse("chests/abandoned_mineshaft"))
                .setRepeatDelay(36000)
                .withIcon(new ItemStack(Items.EMERALD, 5))
                .addTaskEntry("trade", new AdvancementTask(DescriptiveValue.list(ResourceLocation.parse("minecraft:adventure/trade")).build(), true, "", null)));
    }
}
```

</details>
