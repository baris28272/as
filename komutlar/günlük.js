module.exports = {
  name: "günlük",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<@$authorID>,Günlük ödülün $random[500;1500] 💵**]
$setGlobalUserVar[para;$sum[$random[500;1500];$getGlobalUserVar[para;$authorID]];$authorID] 
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]
$cooldown[24h;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
