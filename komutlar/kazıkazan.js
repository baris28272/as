module.exports = {
  name: "kazı-kazan",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**💸・ \`$username\` Kazı Kazan oynayarak $randomText[100;200;300;400;500] 💵 kazandın.**]
$cooldown[10s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin.**] 
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$randomText[100;200;300;400;500]];$authorID]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
};
