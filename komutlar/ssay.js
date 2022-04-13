module.exports = {
  name: "say",
  code: `
  $author[1;$serverName[$guildID];$serverIcon]
$description[1;
\`•\` Sunucumuzda toplam **$membersCount** üye bulunmakta
\`•\` Sunucumuzda toplam **$math[$membersCount-$membersCount[$guildID;offline]]** aktif üye bulunmakta
\`•\` Sunucumuza toplam **$serverBoostCount** boost basılmış]
$color[1;BLACK] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
};
