module.exports = {
name:"nuke",
code:`
$deleteChannels[$channelID]
$cloneChannel[$channelID]
$onlyPerms[admin;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] $userTag Bunu Kullanmak İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`
  }