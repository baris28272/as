module.exports = {
  name: "yardım",
  code: `
$color[1;00F124]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$addField[1;**<a:tac:945816748828028938>・Bot Owner**;
\`?eval | ?karaliste al | ?para-ekle | ?para-sil | ?dev-ver | ?dev-çıkar | ?elmas-sil | ?altın-sil | ?elmas-ekle | ?altın-ekle | ?reboot
\`
]

$addField[1;**<:emoji_66:951850637006635058>・Eğlence**;
\`?aşk-ölçer | ?türk | ?kaçcm | ?öp | ?hackle | ?seviyor-sevmiyor | ?gay | ?fbi | ?şifre
\`

$addField[1;**<a:parack:927001644971995166>・Ekonomi**;
\`?param | ?yatır | ?çek | ?para-gönder | ?çalış | ?dilen | ?balık-tut | ?odun-kes | ?kazı-kazan | ?günlük | ?haftalık | ?maden-kaz | ?elmas-sat | ?altın-sat | ?elmas-gönder | ?altın-gönder | ?rozet-al | ?cf | ?hayvan-topla | ?hayvanlarım | ?hayvan-sat
\`
] 

$addField[1;**<:emoji_83:917308236888170507>・Abone Sistemi**;
\`?abone-rol ayarla | ?abone-yetkili ayarla | ?abone-istatistik | ?abone 
\`
]

$addField[1;**<:certificatemod:945700629278498847>・Moderasyon**;
\`?nuke | ?hgbb-ayarla | ?sil | ?ban | ?unban | ?bancount | ?oylama | ?kick | ?rol-ver | ?rol-al | ?timeout | ?snipe
\`
]
$addField[1;**<:emoji_62:933485235126034504>・Kullanıcı**;
\`?id-sorgu | ?avatar | ?kurucu | ?sunucu-bilgi | ?roller | ?hatırlatıcı-oluştur | ?destek | ?sunucu-avatar | ?oy-ver | ?i
\`
  ]
$image[1;https://media.discordapp.net/attachments/938892356424441987/958810493735297024/standard.gif]
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
