module.exports = {
name:"test",
code:`
$color[1;RANDOM]
$author[1;$userTag[$clientID] Botun İstatistikleri;$userAvatar[$clientID]]

$addField[1;**・Sürümler**;
**<:emoji_75:963445326067425370> Node.js Sürüm : \`v16.12.0\`
<:emoji_75:963445326067425370> Aoi.js Sürüm : \`v$packageVersion\`**
]

$addField[1;**・Hosting Detayları**;
**<:emoji_75:963445326067425370> CPU Kullanımı : \`%$cpu\`
<:emoji_75:963445326067425370> RAM Kullanımı : \`$ram\`
<:emoji_75:963445326067425370> Depolama Kullanımı : \`25.93359375 MB\`**
]

$addField[1;**・Değeleri**;
**<:emoji_77:963445382933807216> Toplam Komutlar : \`$commandsCount\`
<:emoji_77:963445382933807216> Toplam Sunucu : \`$serverCount\`
<:emoji_77:963445382933807216> Toplam Kullanıcı : \`$allMembersCount\`
<:emoji_77:963445382933807216> Toplam Kanal Sayım : \`$allChannelsCount\`**
]

$addField[1;**・Geliştiricilerim**;
 **<:emoji_76:963445354626416650> $userTag[728155399655784488] - 728155399655784488**
]
$footer[1;Komut $userTag Tarafından Kullanıldı;$userAvatar[$authorID]]
$addButton[1;Davet Et;link;https://discord.com/api/oauth2/authorize?client_id=933330103180623892&scope=bot+applications.commands&permissions=8;no;<:emoji_75:963445326067425370>] 
$addButton[1;Destek;link;https://discord.gg/J8SkJwhYBs;no;<:emoji_75:963445326067425370>]  

`
  }