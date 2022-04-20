module.exports = {
  name: "yardım",
  code: `
$color[1;00F124]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$addField[1;**<a:tac:945816748828028938>・Bot Owner**;
\`$getServerVar[prefix]eval | $getServerVar[prefix]karaliste al | $getServerVar[prefix]para-ekle | $getServerVar[prefix]para-sil | $getServerVar[prefix]dev-ver | $getServerVar[prefix]dev-çıkar | $getServerVar[prefix]elmas-sil | $getServerVar[prefix]altın-sil | $getServerVar[prefix]elmas-ekle | $getServerVar[prefix]altın-ekle | $getServerVar[prefix]reboot
\`
]

$addField[1;**<a:parack:927001644971995166>・Ekonomi**;
\`$getServerVar[prefix]param | $getServerVar[prefix]yatır | $getServerVar[prefix]çek | $getServerVar[prefix]para-gönder | $getServerVar[prefix]çalış | $getServerVar[prefix]dilen | $getServerVar[prefix]balık-tut | $getServerVar[prefix]odun-kes | $getServerVar[prefix]kazı-kazan | $getServerVar[prefix]günlük | $getServerVar[prefix]haftalık | $getServerVar[prefix]maden-kaz | $getServerVar[prefix]elmas-sat | $getServerVar[prefix]altın-sat | $getServerVar[prefix]elmas-gönder | $getServerVar[prefix]altın-gönder | $getServerVar[prefix]rozet-al
\`
] 

$addField[1;**<:emoji_66:951850637006635058>・Eğlence**;
\`$getServerVar[prefix]aşk-ölçer | $getServerVar[prefix]türk | $getServerVar[prefix]kaçcm | $getServerVar[prefix]öp | $getServerVar[prefix]seviyor-sevmiyor | $getServerVar[prefix]gay | $getServerVar[prefix]şifre
\`

$addField[1;**<:certificatemod:945700629278498847>・Moderasyon**;
\`$getServerVar[prefix]nuke | $getServerVar[prefix]hgbb-ayarla | $getServerVar[prefix]sil | $getServerVar[prefix]ban | $getServerVar[prefix]unban | $getServerVar[prefix]banlist | $getServerVar[prefix]oylama | $getServerVar[prefix]kick | $getServerVar[prefix]rol-ver | $getServerVar[prefix]rol-al | $getServerVar[prefix]timeout | $getServerVar[prefix]snipe | $getServerVar[prefix]saas-aç | $getServerVar[prefix]saas-kapat
\`
]

$addField[1;**<:emoji_62:933485235126034504>・Kullanıcı**;
\`$getServerVar[prefix]avatar | $getServerVar[prefix]kurucu | $getServerVar[prefix]sunucu-bilgi | $getServerVar[prefix]hatırlatıcı-oluştur | ?destek | $getServerVar[prefix]sunucu-avatar | $getServerVar[prefix]oy-ver
\`
  ]
$image[1;https://media.discordapp.net/attachments/938892356424441987/958810493735297024/standard.gif]
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
