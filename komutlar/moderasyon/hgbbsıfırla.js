module.exports = {
  name: "hgbb-sıfırla",
  aliases: "hgbb-sıfırla",
  code: `
$color[1;$random[0;99999]]
$description[1;
$customEmoji[emoji_70] ・ Gelen Giden Sistemi Başarıyla Sıfırlandı.]
$onlyPerms[managechannels; <@$authorID>, bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın.]
$resetServerVar[hgbb]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
