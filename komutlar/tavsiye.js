module.exports = {
  name: "tavsiye",
  code: `
$author[1;Yeni Bir Tavsiye İletildi;$authorAvatar]
$color[1;94F500]
$useChannel[962474039081840690]
$addField[1;**・Verdiği Tavsiye**;
**$message[1]**
]
$addField[1;**・Tavsiye Veren**;
<@$authorID> - \`($authorID)\`
]
$footer[1;Komut,$userTag Tarafından Kullanıldı;$authorAvatar]
$thumbnail[1;$authorAvatar]
$onlyForServers[875458725115224175;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
