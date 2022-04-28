module.exports = {
  name: "oylama",
  code: `
$color[1;$random[0;99999]]
$thumbnail[1;$authorAvatar]
$title[1;Oylama Başladı]
$description[1;
$noMentionMessage]
$addReactions[✅;❌]
$footer[1;Yetkili - $username#$discriminator[$authorID]]
$onlyPerms[manageroles;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
`,
}