module.exports = {
  name: "gay",
  code: `
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;
**$userTag[$authorID] Sen \`%$random[1;100]\` Gay'sin**
]
$addReactions[🌝]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
