module.exports = {
name:"öp",
code:`
$suppressErrors[1;**Birini Etiketle**]
$description[1;**<@$authorID> ,<@$mentioned[1]> adlı üyeyi öptü uwu]
$color[1;3aff00]
$image[1;$randomText[https://cdn.discordapp.com/attachments/775719943978352700/815610676390658108/tenor_5.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611302332465202/tenor_6.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611792846749746/tenor_7.gif]]
$onlyIf[$isBot[$mentioned[1]]!=true; Botu Öpemezsin.]
$onlyIf[$mentioned[1]!=$authorID; Kendini Öpemezsin]
$onlyIf[$mentioned[1]!=;Birini Etiketle Knk] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`

} 

