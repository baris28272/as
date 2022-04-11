module.exports = {
  name: "sunucu-bilgi",
  code: `
$color[1;RANDOM]
$author[1;$serverName[$guildID];$serverIcon]
$addField[1;**Boost Bilgi**;
> **・ Boost Sayısı : $serverBoostCount**
> **・ Boost Seviyesi : $serverBoostLevel**
]

$addField[1;**Sunucu Bilgi**;
> **・ Toplam Üye Sayısı : $membersCount**
> **・ Bot Sayısı : $botCount**
> **・ Toplam Aktif Üye Sayısı : $math[$membersCount-$membersCount[$guildID;offline]]** 
> **・ Toplam Aktif Olmayan Üye Sayısı : $math[$membersCount-$membersCount[$guildID;online]]**
> **・ Sunucudaki Toplam Rol : $roleCount**
]

$addField[1;**Genel Bilgi**;
> **・ Sunucu İsmi : $serverName[$guildID]**
> **・ Sunucu Sahibi : <@$ownerID> | $userTag[$ownerID]**
> **・ Sunucu Oluşturma Tarihi : $creationDate[$guildID]**
]
`,
};
