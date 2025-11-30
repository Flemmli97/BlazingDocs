Due to complexity of entities adding servant is not possible in a data-driven way.
You would need to write an addon for that. This requires you to be familiar with java.

## Servants

To create a servant simply create your entity as usual and implement [ServantLike](https://github.com/Flemmli97/FateUBW/blob/HEAD/common/src/main/java/io/github/flemmli97/fateubw/api/entity/ServantLike.java) on it. Override the required method and you are pretty much done.

```java
public class MyServantEntity extends LivingEntity implements ServantLike<MyServantEntity>
```

Additionally you should call `ServantLike#trackingTick` in your entities `tick` method.
The mod assumes all active servants in a grailwar to always be present and accessible. 
If you dont call it and your servant gets unloaded the mod will treat your entity as being defeated instead.
```java
@Override
protected void tick() {
    this.trackingTick();
}
```

When implementing you might've noticed you need to provide an `ServantProperties`. 
While it is possible to hardcode a property it is better to use the mods builtin datapack system to allow configuring the properties.
To fetch an instance based on your entity you can use [DataAccess#get](https://github.com/Flemmli97/FateUBW/blob/HEAD/common/src/main/java/io/github/flemmli97/fateubw/api/datapack/DataAccess.java#L8). This instance should ideally be catched.

## Datagen

While you can manually write out the json for `ServantProperties` it is a good idea to datagen these instead.
The mod provides a builtin datagen provider for that.

Using it is fairly straight forward but just extending [ServantPropertiesProvider](https://github.com/Flemmli97/FateUBW/blob/HEAD/common/src/main/java/io/github/flemmli97/fateubw/api/datapack/provider/ServantPropertiesProvider.java)

```java
public class Generator extends ServantPropertiesProvider
```