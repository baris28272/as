module.exports = {
  name: "ban",
  code: `
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$color[1;RANDOM] 
$description[1;**$customEmoji[emoji99] \`$userTag[$mentioned[1]]\` İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı ^^**]
$ban[$mentioned[1];$guildID;7;$noMentionMessage]
$suppressErrors[1;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Birisini Etiketlemelisin**}{color:RANDOM}}]
$onlyPerms[ban;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Sadece \`Üyeleri Banla\` İzni Olan Kullanabilir**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`
};
