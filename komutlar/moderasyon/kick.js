module.exports = {
  name: "kick",
  code: `
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]
$kick[$mentioned[1];$guildID;1;$noMentionMessage]
$color[1;RANDOM]
$description[1;**
$customEmoji[emoji99] \`$userTag[$mentioned[1]] \` İsimli Kullanıcı \`$noMentionMessage\` Sebebinden Sunucudan Atıldı**]
$onlyPerms[kick;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Kullanmak İçin \`Üyeleri At\` İznin Olmalı**}{color:RANDOM}}]
$suppressErrors[1;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bir Üye Etiketlemelisin Dostum**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 


`,
};
