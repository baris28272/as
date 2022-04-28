module.exports = {
  name: "türk-ölçer",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;🇹🇷・<@$authorID>  **__%$random[0;100]__** Türk]
$footer[1;$username Tarafından Kullanıldı;$userAvatar[$authorID]]
$addReactions[🇹🇷]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
`,
};
