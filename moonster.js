const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: process.env.prefix,
  intents: "all",
  fetchInvites: true,
});
bot.onGuildJoin()
bot.onGuildLeave()
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();
bot.onMessage(); //enables bot to see messages (required for executing Commands)

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

bot.variables({
  bahis: "0",
  maaş: "0",
  meslekp: "Bulunmuyor",
  bughunter: "Bulunmuyor",
  not: "",
  guildban: "",
  botsohbet: "boş",
  asaat: "Bulunmuyor",
  param: "0",
  para: "0",
  banka: "0",
  bilgisiyar: "Bulunmuyor",
  telefon: "Bulunmuyor",
  tablet: "0",
  cban: "",
  çıkışban: "0",
  status: "",
  oy: "0",
  sayıkanal: "",
  sayısayma: "0",
  popurlerlik: "0",
  tlog: "",
  asebep: "",
  asebeb: "",
  kengel: "kapalı0",
  populerlik: "0",
  hgbb: "",
  color: "",
  karaliste: "hayır",
  klsebep: "Kara Listede Değilsin",
  ksebep: "",
  karaliste: "$authorID",
  afk: "",
  afkl: "",
  afkl: "",
  prefix: "?",
  mrol: "",
  modlog: "",
  arol: "",
  ayetkili: "",
  prefix: "?",
  otorol: "",
  kl: "",
  cekilis: "undefined",
  aboner: "",
  saas: "kapalı",
  log: "",
  sahip: "",
  rsayı: "0",
  osayı: "0",
  bprefix: "",
  btarih: "",
  bekleyen: "0",
  log: "",
  kategori: "",
  rol: "",
  sy: "0",
  sayı: "0",
  sil: "",
  hayvan: "0/0/0/0/0/0/0/0/0/0",
  ticketcategory: "",
  ticketsorumlusu: "",
  ticket: "kapalı",
  küfürengell:"Kapalı",
  kayıtyetkilisi:"0",
  kayıtyetkili:"0",
  kadınrol:"0",
  erkekrol:"0",
  kayıtsızrol:"0",
  kayıtkanal:"0",
  
});

bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$color[1;RANDOM]
$author[1;$serverName;$serverIcon]
$thumbnail[1;$userAvatar[$authorID]]
$description[1;
<a:emoji_9221:938413467092811826> ・ [$userTag[$authorID]](https://discord.com/users/$authorID) Sunucuya Hoşgeldin Kuralları Okumayı Unutma]
$footer[1;$userTag;$userAvatar[$authorID]]
`,
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: `
  $color[1;RANDOM]
  $author[1;$serverName;$serverIcon]
  $thumbnail[1;$userAvatar[$authorID]]
  $description[1;
  <a:emoji_93:938414065468964875> ・ [$userTag[$authorID]](https://discord.com/users/$authorID) Sunucudan Ayrıldı Umarım İyi Zaman Geçirmişsindir]
  $footer[1;$userTag;$userAvatar[$authorID]]
  `,
});


bot.variables({
  aboneyt: "",
  abonerol: "",
  abonelog: "",
  otorol: "",
  otorolr: "",
});
bot.variables({
  aboneyt: "",
  abonerol: "",
  abonelog: "",
});

bot.status({
  text: "?yardım | ?destek | 7/24 Aktif", //buraya durum yazısı
  type: "STREAMING", //buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
  status: "online", //buraya status kısmı dnd idle online şeklinde yapabilirsiniz
  time: 12, //buraya ellemeyin
});

bot.variables({
  developer: "Bulunmuyor",
  staf: "Bulunmuyor",
  meslek: "Bulunmuyor",
});

bot.command({
  name: "<@$clientID>",
  code: `
$color[1;RED]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
・ **Geliştiricim** : **$userTag[855747867074494544]**
・ **Sunucu Sayım** : **$serverCount**
・ **Kullanıcı Sayım** : **$allMembersCount**
・ **Prefix'im** : **$getServerVar[prefix]**
・ **Destek Sunucum** : [Tıkla](https://discord.gg/Bqyqj4Ezwe)
・ **Bot'u Davet Et** : [Tıkla]($getBotInvite[admin])
]
$deleteIn[10s]
$footer[1;$serverName[$guildID];$serverIcon]
$onlyIf[$checkContains[$message;<@$clientID>]==true;]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
  nonPrefixed: true,
});


bot.variables({
  devpara: "Yok",
  pray: "0",
  altın: "0",
  elmas: "0",
  oy: "1",
  sliste: "1",
  abonerol: "",
  aboneyetkilisi: "",
  abonesayisi: "",
});


bot.variables({
  premium: "Bulunmuyor",
});

bot.variables({
  hex: "66FFFF",
  prefix: "?",
  oy: "",
});



bot.variables({
  modlog: "",
  premiumx: "Bulunmuyor",
});


bot.variables({
  inviteenabled: "kapalı",
  adminperm:
    "**$customEmoji[emoji_71] | Log kanalı ayarlayabilmek için `Yönetici` Yetkisine sahip olun.**",
  botaperm:
    "**$customEmoji[emoji_71] | Lütfen `Yönetici` Yetkisi verdiğinizden emin olun**",
  logkanal: "",
  odulrolenabled: "kapalı",
  odulsayi: "",
  bakımsistemi:"Kapalı",
  odulrol: "",
});

bot.command({
  name: "timeout",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Yetkili \`$userTag[$mentioned[1]\` İsimli Kullanıcıya \`$noMentionMessage\` Süresine Kadar Mute Attım.**]
$timeOutMember[$guildID;$mentioned[1];$noMentionMessage]
$onlyPerms[ban;**$customEmoji[emoji_71] | Bunun \`İçin Üyeleri Banla\` İznin Olmalı**]
$suppressErrors
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
});

bot.readyCommand({
  channel: "972234414828429372",
  code: `
  $log[-------------Bot Açık---------]
  $wait[5s]
$log[Bot \`$serverCount\` Sunucu \`$allMembersCount\` Kullanıcı \`$commandsCount\` Komutla Hizmet Vermye Hazır.]
$color[1;RANDOM]
$author[1;$serverName;$serverIcon]
$description[1;**Bot \`$serverCount\` Sunucu \`$allMembersCount\` Kullanıcı \`$commandsCount\` Komutla İle Tekrar Hizmet Vermeye Hazır.**]
 `,
});

bot.variables({
  level: "0",
  hız: "1",
  rq: "100",
  xp: "0",
  custombg: "boş",
  belirteç: "",
  log: "Ayarlanmamış",
  sistem: "kapal",
});

bot.variables({
  cross: "<:emoji_71:917309220687314966> ",
  snipe1: "",
  snipe2: "",
  snipe3: "",
  butonrol: "",
});

bot.deletedCommand({
  channel: "moonster",
  code: ` $setServerVar[snipe3;$message] 
  $setServerVar[snipe2;$channelID] 
  $setServerVar[snipe1;$authorID] 
  $onlyIf[$isBot[$authorID]==false;] `,
});
bot.onMessageDelete();




bot.command({
  name:"sa",
  code:`
  $onlyIf[$message!=sa;**$customEmoji[tatlimisir] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]
  $onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
  nonPrefixed: true
}) 


bot.command({
  name:"selam",
  code:`
  $onlyIf[$message!=selam;**$customEmoji[tatlimisir] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]
  $onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
  nonPrefixed: true
}) 

bot.command({
  name:"selamun aleyküm",
  code:`
  $onlyIf[$message!=selamun aleyküm;**$customEmoji[tatlimisir] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]
  $onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
  nonPrefixed: true
}) 



const voice = new aoijs.Voice(bot, {
  soundcloud: {
    //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
  },
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
}, false); //true or false for pruneMusic


//----------------  EKLENDİM - ATILDM LOG ----------------//

bot.guildLeaveCommand({
channel: "972234414828429372",
code: `
$title[1;:outbox_tray: **$serverName - Çıkış Yaptım** :outbox_tray:]
$description[1;
:white_small_square: Sunucu ID | **$guildID**
:white_small_square: Sahibi | **$username[$ownerID]#$discriminator[$ownerID]**
:white_small_square: Sahip ID | **$ownerID**
:white_small_square: Üye Sayısı | **$membersCount**
:white_small_square: Bot Sayısı | **$botCount**]
$thumbnail[1;$serverIcon[$guildID]]
$color[1;010101]
$log[$serverName - Sunucusundan Çıkış Yaptım.]
`
})

bot.guildJoinCommand({
  channel: "972234414828429372",
  code: `
  $title[1;:inbox_tray: **$serverName[$guildID] - Giriş Yaptım** :inbox_tray:]
  $description[1;
    :white_small_square: Sunucu ID | **$guildID**
  :white_small_square: Sahibi | **$username[$ownerID]#$discriminator[$ownerID]**
  :white_small_square: Sahip ID | **$ownerID**
  :white_small_square: Üye Sayısı | **$membersCount**
  :white_small_square: Bot Sayısı | **$botCount**
  :white_small_square: Davet Linki | [Tıkla]($createServerInvite[$guildID])
  ]
  $thumbnail[1;$serverIcon[$guildID]]
  $color[1;5f6eff]

 $log[$serverName[$guildID] - Sunucusuna Giriş Yaptım.]
  `
  })


bot.joinCommand({
channel: "$getServerVar[kayıtkanal;$guildID]", 
code: `
<@&$getServerVar[kayıtyetkili;$guildID]>
$color[1;RANDOM]
$title[1;Yeni birisi katıldı;$getBotInvite]
$thumbnail[1;$authorAvatar]
$description[1;**<@$authorID> kişisi sunucuya kaydıraktan kayarak geldi
Merhaba \`$userTag\` biraz bekle, \`$roleName[$getServerVar[kayıtyetkili;$guildID]]\` rolündeki kişiler
sizinle en yakın zamanda ilgilenecektir.
Bu zaman içerisinde müzik dinleyin 🎶**]
Discord'a kayıt tarihin: \`$creationDate[$authorID]\`
$giveRoles[$guildID;$authorID;$getServerVar[kayıtsızrol;$guildID]]
$onlyIf[$getServerVar[erkekrol;$guildID]!=0;]
$onlyIf[$getServerVar[kadınrol;$guildID]!=0;]
$onlyIf[$getServerVar[kayıtyetkili;$guildID]!=0;]

` 

})


bot.command({
  name:"moonster",
  code:`
$reply
$jsonRequest[https://api.popcat.xyz/translate?to=tr&text=$replaceText[$get[a]; ;+;-1];translated;Bir hata oldu.]
$wait[1s]
$textSplit[$messageURL;/]
$let[a;$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[encode;$message]&owner=$uri[encode;$username[910837428862984213] and $username[922523714204106822]]&botname=$uri[encode;$username[$clientID]]&user=$uri[encode;$username];response;> **Some Error Occurred in my chat-bot:/**]]
`,
  nonPrefixed:true
})




