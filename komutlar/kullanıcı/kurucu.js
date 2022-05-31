module.exports = {
  name: "kurucu",
  code: `
$color[1;FF0000]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**\`$serverName\` adlı sunucunun sahibi  \`$userTag[$ownerID]\` adlı kullanıcıdır**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
`,
};
