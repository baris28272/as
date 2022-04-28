module.exports = {
  name: "maden-kaz",
  code: `
$color[1;RANDOM]
$author[1;$userTag;$userAvatar[$authorID]]
$description[1;
**<@$authorID>, madenden \`$random[20;50]\` elmas ve \`$random[15;45]\` altın buldun.**]
$setGlobalUserVar[elmas;$sum[$getGlobalUserVar[elmas;$authorID];$random[20;50]];$authorID]
$setGlobalUserVar[altın;$sum[$getGlobalUserVar[altın;$authorID];$random[15;45]];$authorID]
$cooldown[40s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`40 Saniye\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`,
};
