To get started the first thing you need is the claiming tool.
By default the tool to create claims is a golden hoe.
Holding the tool will display your current claim blocks and the amount you used.

<img src={require('../img/create_claim_1.png').default} width="512" />

To create a claim now right click on one block to select a corner and on another block to set the other corner.
If it was successful you will get a message that a claim was created, else it will tell you why the creation failed.
Alternatively you can also use the command /flan addClaim to do that if by some reason you prefer that method.

<img src={require('../img/create_claim_2.png').default} width="512" />

Resizing claim is done by right clicking on one corner of a claim and then on another block to set the new corner.
To check if a block is claimed you can use the inspect tool.
By default this is a stick.

<img src={require('../img/create_claim_3.png').default} width="512" />


## Subclaim

Claims can support subclaims. As the name suggest a subclaim is a claim inside a claim. Subclaims have their own permission and group sets that override the parent claim they are in (no you cannot create a subclaim inside a subclaim).  

Subclaim permissions have an additional value "default" instead of just true and false which simply redirects that permission back to the parent claim.
To create a subclaim switch to subclaim mode via /flan switchMode SUBCLAIM. 

<img src={require('../img/create_subclaim_1.png').default} width="512" />

Then use your claiming tool the same way you create a normal claim. Note that the positions need to be inside the claim.

<img src={require('../img/create_subclaim_3.png').default} width="512" />

Opening the subclaim menu and editing subclaim permissions requires you to be in subclaim mode too.