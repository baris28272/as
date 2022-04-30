module.exports = {
name:"banlist",
code:`
$author[1;$serverName;$serverIcon]
$color[1;RANDOM]
$description[1;**🤝・Sunucuda Toplam \`$banCount\` Kişi Banlı**]
$footer[1;Komut,$userTag Tarafından Kullanıldı;$userAvatar[$authorID]]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$suppressErrors
`
  }