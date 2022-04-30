module.exports = {
  name: "seviyor-sevmiyor",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[tatlimisir] <@$authorID>,<@$mentioned[1]> Kişisi Seni $randomText[Seviyor ❤;Sevmiyor 💔]**]
$suppressErrors[1;{author:$userTag[$authorID]:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71] | Dostum Birisini Etiketlemelisin**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}