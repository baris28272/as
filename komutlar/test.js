module.exports = {
  name:"test",
  code:`
  $author[1;$userTag;$userAvatar[$authorID]]
  $color[1;RANDOM]
  $description[1;Selamlar, ben **$userTag[$clientID]**. Sunucunuz için ayarlanan prefixim : ?
  
Aşağıdaki menü ile komutlarımı görebilirsin.
$addSelectMenu[1;help;Kategori Seç!;1;1;false;Moderasyon:Moderasyon menüsünü açmak için tıkla.:0:false:<:darkmod:945701153797177354>;A:Ayarlamalı menüsünü açmak için tıkla.:1:false:🙃;Genel:Genel menüsünü açmak için tıkla.:2:false:🙃]

  `}