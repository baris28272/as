module.exports = {
name:"öp",
code:`
$author[$userTag:$userAvatar[$authorID]]
$color[RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> ,<@$mentioned[1]> adlı üyeyi öptü uwu]
$image[1;$randomText[https://cdn.discordapp.com/attachments/775719943978352700/815610676390658108/tenor_5.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611302332465202/tenor_6.gif;https://cdn.discordapp.com/attachments/775719943978352700/815611792846749746/tenor_7.gif]]
$onlyIf[$isBot[$mentioned[1]]!=true;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Botu Öpemezsin ^^**}{color:RANDOM}}]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Kendini Öpemezsin ^^**}{color:RANDOM}}]
$onlyIf[$mentioned[1]!=;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <$authorID> Birini Etiketlemelisin**}{color:RANDOM}}] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`

} 

