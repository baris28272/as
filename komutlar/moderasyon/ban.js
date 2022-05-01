module.exports = {
  name: "ban",
  code: `
$ban[$mentioned[1];$guildID;0;$noMentionMessage]
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[1;**$customEmoji[emoji99] \`$userTag[$mentioned[1]]\` İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı ^^**]
$color[1;RANDOM]
$argsCheck[1;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Birisini Etiketlemelisin**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`
};
