module.exports = {
name:"test",
code:`
$color[1;RANDOM]
$author[1;$userTag[$clientID] Botun İstatistikleri;$userAvatar[$clientID]]

$addField[1;**Sürümler**;
**<:emoji_75:963445326067425370> Node.js Sürüm : \`v16.12.0\`
<:emoji_75:963445326067425370> Aoi.js Sürüm : \`v$packageVersion\`**
]

$addField[1;**Hosting Detayları**;
**<:emoji_75:963445326067425370> CPU Kullanımı : \`%$cpu\`
<:emoji_75:963445326067425370> RAM Kullanımı : \`$ram\`
<:emoji_75:963445326067425370> Uptime Süresi : \`$uptime\`**
]

$addField[1;**Değeleri**;
**<:emoji_77:963445382933807216> Toplam Komutlar : \`$commandsCount\`
<:emoji_77:963445382933807216> Toplam Sunucu : \`$serverCount\`
<:emoji_77:963445382933807216> Toplam Kullanıcı : \`$allMembersCount\`
<:emoji_77:963445382933807216> Toplam Kanal Sayım : \`$allChannelCount\`**
]

$addField[1;**Geliştiricilerim**;
**<:emoji_76:963445354626416650> $userTag[728155399655784488] - 728155399655784488**]

`
  }