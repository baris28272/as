module.exports = {
  name: "hgbb-ayarla",
  code: `
$author[1:$userTag;$userAvatar[$authorID]]]
$color[1;RANDOM]
$description[1;**
$customEmoji[emoji99] <$authorID> Gelen Giden kanalı <#$mentionedChannels[1]> Olarak Başarıyla Ayarlandı.**]
$onlyPerms[admin;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID>, bu komutu kullanmak için \`Yönetici\` yetkisine sahip olmalısın.**}{color:RANDOM}}]
$setServerVar[hgbb;$mentionedChannels[1]]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
