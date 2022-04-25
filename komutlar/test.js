module.exports = {
  name:"test",
  code:`
  $author[1;$userTag;$userAvatar[$authorID]]
  $color[1;RANDOM]
  $description[1;Selamlar, ben **$userTag[$clientID]**. Sunucunuz için ayarlanan prefixim : ?
  
Aşağıdaki menü ile komutlarımı görebilirsin.
]
$addSelectMenu[1;test;Kategori Seç!;1;1;false;Genel:Genel menüsünü açmak için tıkla.:0:false:<:emoji_62:933485235126034504>;Moderasyon:Moderasyon menüsünü açmak için tıkla.:1:false:<:darkmod:945701153797177354>;Ekonomi:Ekonomi menüsünü açmak için tıkla:2:false:<a:parack:927001644971995166>;Eğlence:Eğlence menüsünü açmak için tıkla:3:false:<:emoji_66:951850637006635058>]

  `}