## Quests

The mod provides 3 types of quests by default but if you think you have some more specific needs it is possible to define your own quest type too.

For that simply extend [QuestBase](https://github.com/Flemmli97/SimpleQuests/blob/HEAD/common-api/src/main/java/io/github/flemmli97/simplequests_api/quest/QuestBase.java)

```java
public class MyCustomQuestType extends QuestBase
```

and register it via `QuestBaseRegistry#registerSerializer` in your mod constructor

```java
public static void init() {
    QuestBaseRegistry.registerSerializer(MyCustomQuestType.ID, MyCustomQuestType.CODEC);
}
```

## Tasks

Compared to quest types wanting to have additinoal tasks should be more common.

All tasks should implement [QuestTask](https://github.com/Flemmli97/SimpleQuests/blob/HEAD/common-api/src/main/java/io/github/flemmli97/simplequests_api/quest/entry/QuestTask.java).

```java
public class MyCustomTask implements QuestTask<MyCustomResolvedTask>
```

You might've noticed that it requires a resolved tasks.
To allow more variations SimpleQuests has a `QuestTask` and a `ResolvedQuestTask`.
A `QuestTask` is basically a template defining potential tasks the player should do in the end while a `ResolvedQuestTask` is the actual task to be completed.
E.g. you might want to have a list of potential items defined the player needs to obtain and when the player chooses the quest all tasks get resolved and one item of the potential items will be picked.

Thus your `QuestTask#resolve` should return a `ResolvedQuestTask` instance of your custom task.

To register them call `QuestEntryRegistry#registerSerializer` from your mod constructor

```java
public static void init() {
    QuestEntryRegistry.registerSerializer(MyCustomTask.ID, MyCustomTask.CODEC, MyCustomResolvedTask.CODEC);
}
```

## ProgressionTracker

Some tasks require tracking additional data. E.g. a block interact task needs to track the amount of interacted blocks. If you do not want to track that yourself SimpleQuests provides a builtin way.

Implement [ProgressionTracker](https://github.com/Flemmli97/SimpleQuests/blob/HEAD/common-api/src/main/java/io/github/flemmli97/simplequests_api/player/ProgressionTracker.java) and register it under `ProgressionTrackerRegistry#registerSerializer`
```java
public class MyCustomTracker implements ProgressionTracker<Integer, MyCustomResolvedTask>
```

```java
public static void init() {
    ProgressionTrackerRegistry.registerSerializer(MyCustomTracker.KEY, MyCustomTracker::new);
}
```

You can progress tasks by using `PlayerQuestDataRegistry.applyAll(player, d -> d.trigger(<key>, <value>, <trigger>));`

