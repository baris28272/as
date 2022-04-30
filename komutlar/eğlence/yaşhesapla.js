module.exports = {
  name: "yaş-hesapla",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]] 
$title[1;Yaş Hesaplama İşlemi]
$description[1;<@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]
$footer[1;$username[$authorID]]
$suppressErrors[1;{description:<@$authorID>, doğum yılını yaz.}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}