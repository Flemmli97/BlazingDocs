## Overview

Starting with version 1.10.0 all permissions are moved to a datapack system. This makes it very easy to define custom permissions should
the default provided ones not be enough.

:::info
If you are on mc versions 1.21.1 below the directory has NO `flan` prefix!  
So `/data/<namespace>/claim_permissions` instead of `/data/<namespace>/flan/claim_permission`. Old one also uses plural form!
And `data/<namespace>/claim_interactions_override` instead of `data/<namespace>/flan/claim_interactions_override`
If you are using the datagenerator make sure to select the correct version!
Mods using datagen can simply rerun that
:::

You can view all builtin permissions provided by flan under [BuiltinPermission](https://github.com/Flemmli97/Flan/blob/HEAD/common/src/main/java/io/github/flemmli97/flan/api/permission/BuiltinPermission.java) with their respective permission json under [JSONS](https://github.com/Flemmli97/Flan/tree/HEAD/common/src/generated/resources/data/flan/flan/claim_permission).

To make generating the permission easier you can
> Use the online generator under [here](https://flemmli97.github.io/misode.github.io/flan/permission/)  
> If using code, use datagen by extending `ClaimPermissionProvider`

## Setup & Syntax

To create a custom permission simply create a datapack with a permission `.json` located under `/data/<namespace>/flan/claim_permission`. 
The id of the permission will be `<namespace>/file_name` so a file under `/data/foo/flan/claim_permission/my_permission.json` has the id 
`foo:my_permission`. This is important if you want to refer to the permission.

Permissions have the following syntax:
```json
{
  "gui_item": <ItemStack>, // The item used in the gui
  "default_value": true | false, // Default value this permission should have
  "global": true | false, // Whether this permission is global or not. Global permissions are actions without a player or that should not be changeable through player groups (e.g. Wither block breaking permission)
  "global_default_value": true | false, // Default: true. the global value this permission should have by default
  "require_explicit": true | false, // Default: false. Normally owners and admin mode bypass all permissions. If this is true the permission needs to be explicitly set in the claim to also be bypassed
  "order": <integer>, // An ordering for the gui. Permissions are sorted in ascending order there. If equal ordering they will be sorted according to their id
  "required_mod": <string> // Optional. Only useful if you ship your thing in some larger context where the mod MIGHT not be present
}
```
Fields with default values or optional fields can be ommitted.

## Using custom permissions

Simply creating a permission is not enough though as that permission will just sit there doing nothing. 

If you are writing permissions in the context of a mod/addon you can call 
```java
ClaimHandler#canInteract(ServerPlayer player, BlockPos pos, ResourceLocation permission)
```
with your permission id if you want to check if a player can do some action at the given position. 

For non modders your options will be limited to interaction overrides. See [Interaction Overrides](Interaction%20Overrides.md)
