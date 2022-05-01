module.exports = {
name:"ses",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarıyla Ses Miktarı \`$message[1]\` Olarak Ayarlandı**]
$volume[$message[1]]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Benim olduğum ses kanalında yoksan kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$suppressErrors

`
}