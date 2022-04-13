module.exports = {
  name: "oy-ver",
  code: `$setServerVar[oy;$sum[$getServerVar[oy;$guildID];1];$guildID]
> **Başarıyla bu sunucuya oy verdiniz!** Sunucu toplamda **$sum[$getServerVar[oy;$guildID];1]** oya ulaştı. Bu sunucuya bugüne kadar **$sum[$getUserVar[oy;$authorID];1]** oy vermiş oldunuz. :tada:
$cooldown[1h;**$customEmoji[emoji_71]・Bu Komutu Tekrar Kullanmak İçin 1 Saat Beklemelisin**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
