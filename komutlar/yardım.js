module.exports = {
  name: "yardım",
  code: `
$color[1;00F124]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$addField[1;**<a:tac:945816748828028938>・Bot Owner**;
\`$getServerVar[prefix]eval | $getServerVar[prefix]karaliste al | $getServerVar[prefix]para-ekle | $getServerVar[prefix]para-sil | $getServerVar[prefix]dev-ver | $getServerVar[prefix]dev-çıkar | $getServerVar[prefix]elmas-sil | $getServerVar[prefix]altın-sil | ?elmas-ekle | ?altın-ekle | ?reboot
\`
]

$addField[1;**<:emoji_66:951850637006635058>・Eğlence**;
\`?aşk-ölçer | ?türk | ?kaçcm | ?öp | ?seviyor-sevmiyor | ?gay | ?şifre
\`

$addField[1;**<a:parack:927001644971995166>・Ekonomi**;
\`?param | ?yatır | ?çek | ?para-gönder | ?çalış | ?dilen | ?balık-tut | ?odun-kes | ?kazı-kazan | ?günlük | ?haftalık | ?maden-kaz | ?elmas-sat | ?altın-sat | ?elmas-gönder | ?altın-gönder | ?rozet-al
\`
] 

$addField[1;**<:certificatemod:945700629278498847>・Moderasyon**;
\`?nuke | ?hgbb-ayarla | ?sil | ?ban | ?unban | ?bancount | ?oylama | ?kick | ?rol-ver | ?rol-al | ?timeout | ?snipe
\`
]
$addField[1;**<:emoji_62:933485235126034504>・Kullanıcı**;
\`?avatar | ?kurucu | ?sunucu-bilgi | ?roller | ?hatırlatıcı-oluştur | ?destek | ?sunucu-avatar | ?oy-ver
\`
  ]
$image[1;https://media.discordapp.net/attachments/938892356424441987/958810493735297024/standard.gif]
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
