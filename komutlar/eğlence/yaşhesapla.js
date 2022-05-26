module.exports = {
  name: "yaş-hesapla",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]] 
$description[1;**$customEmoji[tatlimisir] <@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]
$suppressErrors[1;{newEmbed:{author:$userTag:$authorAvatar}{description:<@$authorID>, doğum yılını yaz.}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}