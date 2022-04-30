module.exports = {
  name: "hgbb-sıfırla",
  aliases: "hgbb-sıfırla",
  code: `
$color[1;RANDOM]
$description[1;**
$customEmoji[emoji99] <@$authorID> Gelen Giden Sistemi Başarıyla Sıfırlandı.**]
$onlyPerms[managechannels;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID>, bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın.**}{color:RANDOM}}]
$resetServerVar[hgbb]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
