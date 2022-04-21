module.exports = {
  name: "dilen",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<@$authorID>,Dilenerek $random[100;500] 💵 Kazandın**]
$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]
$cooldown[1m;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`1 Dakika\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
};
