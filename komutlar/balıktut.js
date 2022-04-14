module.exports = {
  name: "balık-tut",
  aliases: "balık-tut",
  code: `
$color[1;RANDOM]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[120;210]];$authorID]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70] | \`$username\` 🐬 Balık tuttun ve $random[120;210] 💵 kazandın.**]
$footer[1;$username Adlı Kullanıcı Kullandı;$userAvatar[$authorID]]
$cooldown[10s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`,
};
