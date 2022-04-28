module.exports = {
  name: "odun-kes",
  aliases: "odun-kes",
  code: `
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[100;2500]];$authorID]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**<@$authorID>,\`$random[1;50]\` Tane Odun Kestin Ve Bir Oduncu Sana Şu Parayı Verdi \`$random[100;2500]\` 💰 Kazandın**]
$cooldown[15s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`15 Saniye\` Beklemelisin.**] 
$color[1;RANDOM]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
