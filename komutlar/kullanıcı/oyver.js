module.exports = {
  name: "oy-ver",
  code: `$setServerVar[oy;$sum[$getServerVar[oy;$guildID];1];$guildID]
> **Başarıyla bu sunucuya oy verdiniz!** Sunucu toplamda **$sum[$getServerVar[oy;$guildID];1]** oya ulaştı. Bu sunucuya bugüne kadar **$sum[$getUserVar[oy;$authorID];1]** oy vermiş oldunuz. :tada:
$cooldown[1h;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_71] Bu Komutu Tekrar Kullanmak İçin 1 Saat Beklemelisin**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
