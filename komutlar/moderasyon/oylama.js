module.exports = {
  name: "oylama",
  code: `
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;
$noMentionMessage]
$addReactions[✅;❌]
$footer[1;Yetkili - $username#$discriminator[$authorID]]
$onlyPerms[manageroles;]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}