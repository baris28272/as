module.exports = {
  name: "hgbb-ayarla",
  aliases: "hgbb-ayarla",
  code: `
$color[1;$random[0;99999]]
$description[1;
$customEmoji[emoji99]・Gelen Giden kanalı <#$mentionedChannels[1]> Olarak Başarıyla Ayarlandı.]
$onlyPerms[admin;<@$authorID>, bu komutu kullanmak için \`Yönetici\` yetkisine sahip olmalısın.]
$setServerVar[hgbb;$mentionedChannels[1]]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
