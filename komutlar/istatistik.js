module.exports = {
name:"e",
code:`
$color[1;RANDOM]
$author[1;$username[$clientID] Botun İstatistikleri;$userAvatar[$clientID]]

$addField[1;**<:aoijs:965279373005566052>・Sürümler**;
> **<:6149_discord:965276693604466758> Node.js Sürüm : \`v16.12.0\`**
> **<:6149_discord:965276693604466758> Aoi.js Sürüm : \`v$packageVersion\`**
]

$addField[1;**<:hosting1:965280253205422131>・Hosting Detayları**;
> **<:6149_discord:965276693604466758> CPU Kullanımı : \`%$cpu\`**
> **<:6149_discord:965276693604466758> RAM Kullanımı : \`$ram\`**
> **<:6149_discord:965276693604466758> Depolama Kullanımı : \`25.93359375 MB\`**
]

$addField[1;**・Değerleri**;
> **<:website:965278176383238215> Toplam Komutlar : \`$commandsCount\`**
> **<:website:965278176383238215> Toplam Sunucu : \`$serverCount\`**
> **<:website:965278176383238215> Toplam Kullanıcı : \`$allMembersCount\`**
> **<:website:965278176383238215> Toplam Kanal Sayım : \`$allChannelsCount\`**
]

$addField[1;**<a:tac:945816748828028938>・Geliştiricim**;
> **<:developerr:910821172877344778> $userTag[728155399655784488] - 728155399655784488**
]
$footer[1;Komut $userTag Tarafından Kullanıldı;$userAvatar[$authorID]]
$addButton[1;Davet Et;link;https://discord.com/api/oauth2/authorize?client_id=933330103180623892&scope=bot+applications.commands&permissions=8;no;<:emoji_75:963445326067425370>] 
$addButton[1;Destek;link;https://discord.gg/J8SkJwhYBs;no;<:emoji_75:963445326067425370>]  
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
  }