import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

To add the mod to your dev environment add the following snippet to your `build.gradle`

<Tabs>
  <TabItem value="common" label="Multiloader Common">

```groovy
repositories {
    maven {
        name = "Flemmli97"
        url "https://maven.blazing-coop.net/releases"
        content {
            includeGroup 'io.github.flemmli97'
        }
    }
}

dependencies {    
    compileOnly("io.github.flemmli97:fateubw:${minecraft_version}-${mod_version}-common")
}
```

  </TabItem>
  <TabItem value="neoforge" label="NeoForge">

```groovy
repositories {
    maven {
        name = "Flemmli97"
        url "https://maven.blazing-coop.net/releases"
        content {
            includeGroup 'io.github.flemmli97'
        }
    }
}

dependencies {    
    compileOnly("io.github.flemmli97:fateubw:${minecraft_version}-${mod_version}-${mod_loader}")
}
```

  </TabItem>
  <TabItem value="fabric" label="Fabric">

```groovy
repositories {
    maven {
        name = "Flemmli97"
        url "https://maven.blazing-coop.net/releases"
        content {
            includeGroup 'io.github.flemmli97'
        }
    }
}

dependencies {
    modCompileOnly("io.github.flemmli97:fateubw:${minecraft_version}-${mod_version}-fabric")
}
```

  </TabItem>
</Tabs>

The maven repository above is browsable allowing you to check which versions are available.