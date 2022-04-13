module.exports = {
  name: "haftalık",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<@$authorID>,Haftalık ödülün $random[100;500] 💵**]
$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]
$cooldown[7d;] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`,
};
