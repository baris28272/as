module.exports = {
name:"sunucu-avatar",
code:`
$author[1;$serverName Sunucunun Avatarı;$serverIcon]
$color[1;RANDOM]
$description[1;$image[1;$serverIcon]]
$footer[1;Komut,$userTag Tarafından Kullanıldı;$authorAvatar]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`
  }