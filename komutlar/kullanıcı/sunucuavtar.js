module.exports = {
name:"sunucu-avatar",
code:`
$author[1;$serverName Sunucunun Avatarı;$serverIcon]
$color[1;RANDOM]
$description[1;$image[1;$serverIcon]]
$footer[1;Komut,$userTag Tarafından Kullanıldı;$authorAvatar]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
  }