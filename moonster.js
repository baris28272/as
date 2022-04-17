var fs = require("fs");
const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "?",
  intents: "all",
  fetchInvites: true,
});
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();
bot.onMessage(); //enables bot to see messages (required for executing Commands)
var reader = fs
  .readdirSync("./komutlar")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed,
  });
}

bot.variables({
  bahis: "0",
  maaşş: "0",
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
  prefix: "+",
  saas: "kapalı",
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
  text: "?yardım | ?destek | ?davet | 7/24 Aktif", //buraya durum yazısı
  type: "STREAMING", //buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
  status: "online", //buraya status kısmı dnd idle online şeklinde yapabilirsiniz
  time: 12, //buraya ellemeyin
});

bot.command({
  name: "oylama",
  code: `
$color[1;$random[0;99999]]
$thumbnail[1;$authorAvatar]
$title[1;Oylama Başladı]
$description[1;
$noMentionMessage]
$addReactions[✅;❌]
$footer[1;Yetkili - $username#$discriminator[$authorID]]

$onlyPerms[manageroles;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 

`,
});

bot.command({
  name: "param",
  aliases: [`param`, `cash`],
  code: `
$color[1;RANDOM]
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]

$addField[1;**・Rozetler**;
> ・**Developer** : **$getGlobalUserVar[developer;$mentioned[1;yes]]**
> ・**Moderatör** : **$getGlobalUserVar[staf;$mentioned[1;yes]]**
> ・**Bug Hunter** : **$getGlobalUserVar[bughunter;$mentioned[1;yes]]**
]

$addField[1;**・Bakiye Bilgileri**;

> ・**Üzerindeki Para Miktarı** : [$abbreviate[$getGlobalUserVar[para;$mentioned[1;yes]]]]($getBotInvite[admin])
> ・**Bankadaki Para Miktarı** : [$abbreviate[$getGlobalUserVar[banka;$mentioned[1;yes]]]]($getBotInvite[admin]) 
> ・**Üzerindeki Altın Miktarı** : [$abbreviate[$getGlobalUserVar[altın;$mentioned[1;yes]]]]($getBotInvite[admin])
> ・**Üzerindeki Elmas Miktarı** : [$abbreviate[$getGlobalUserVar[elmas;$mentioned[1;yes]]]]($getBotInvite[admin])
]
$addField[1;・Hesap Bilgileri;

> ・**Hesap İsmi** : \`$userTag[$mentioned[1;yes]]\`
> ・**Hesabın Yaşı** : \`$creationDate[$mentioned[1;yes]]\`
> ・**Hesabın ID'si** : \`$mentioned[1;yes]\`]
$onlyIf[$getGlobalUserVar[kl;$mentioned[1;yes]]!=true;\`$getGlobalUserVar[ksebep;$mentioned[1;yes]]\` sebebinden karalistedesiniz  
$footer[1;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1]]]



`,
});

bot.variables({
  developer: "Bulunmuyor",
  staf: "Bulunmuyor",
  meslek: "Yok",
  maaş: "0",
});

bot.command({
  name: "<@$clientID>",
  code: `
$color[1;RED]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
・ **Geliştiricim** : **$userTag[728155399655784488]**
・ **Sunucu Sayım** : **$serverCount**
・ **Kullanıcı Sayım** : **$allMembersCount**
・ **Prefix'im** : **$getServerVar[prefix]**
・ **Destek Sunucum** : [Tıkla](https://discord.gg/gzDnMcG4ym)
・ **Bot'u Davet Et** : [Tıkla]($getBotInvite[admin])
]
$deleteIn[10s]
$footer[1;$serverName[$guildID];$serverIcon]
$onlyIf[$checkContains[$message;<@$clientID>]==true;]

`,
  nonPrefixed: true,
});

bot.variables({
  kklog: "",
});

bot.command({
  name: "yaş-hesapla",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]] 
$title[1;Yaş Hesaplama İşlemi]
$description[1;<@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]
$footer[1;$username[$authorID]]
$suppressErrors[1;{description:<@$authorID>, doğum yılını yaz.}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premiumx;$authorID]==Var;**$customEmoji[emoji_71] | Bu komutu kullanmak için premium avantajlarına sahip olman gerekiyor.**] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 


`,
});

bot.command({
  name: "lisans",
  code: `
  Bu Komut \`$serverName\` Sunucusuna Aittir Çalınması Ve Paylaşılması Kesinlikle Yasaktır.
 $onlyForIDs[$botOwnerID;728155399655784488;]
 $deletecommand
 `,
});

bot.variables({
  category: "", //Kategori ID
  ticket: "", //Elleme
  number: "0", //Elleme
  staff: "", //Yetkili rolü ID
  user: "", //Elleme
});

bot.variables({
  spam: "kapalı",
  spammessage: "",
  spamsayı: "0",
});
bot.variables({
  rklog: "",
});
bot.variables({
  kengel: "kapalı",
});

bot.variables({
  küfür: "kapalı",
  küfürayarlayan: "",
  küfürs: "1",
  link: "kapalı",
  linkayarlayan: "",
  rick_tick: "", /// tik emoji id
  rick_carpi: "", //carpi emiji id
  footer: "",
  renk: "",
  admin: "",
});

bot.command({
  name: "force-ban",
  code: `
  $ban[$message[1];$guildID;1;$noMentionMessage]
  $author[1;$userTag[$authorID];$userAvatar[$authorID]]
  $thumbnail[1;$userAvatar[$message[1]]]
  $description[1;
  <:emoji_70:917309183341236244> | \`$userTag[$message[1]]\` **İsimli Kullanıcı \`$noMentionMessage\` Sebebinden Başarıyla Banlandı ^^**]
  $footer[1;Kullanıcı ID'si : $message[1];$userAvatar[$message[1]]]
  $onlyPerms[ban;{newEmbed:{description:<:emoji_71:917309220687314966> | \`$userTag[$authorID]\` Bunu Kullanmak İçin \`Üyeleri Banla İznin\` Olmalı}{color:RANDOM}}]
   $suppressErrors[1;{newEmbed:{description:<:emoji_71:917309220687314966> | Bir Kullanıcı ID'si Girmelisin Dostum}{color:RANDOM}}]
   $onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
   `,
});

bot.variables({
  sliste: "1",
});

bot.command({
  name: "reboot",
  code: `
$wait[6s]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70]・Bot Yeniden Başlatıldı.**]
$color[1;RANDOM]
$onlyForIDs[$botOwnerID;728155399655784488;]
`,
});

bot.command({
  name: "reboot",
  code: `
$reboot[moonster.js]
$onlyForIDs[$botOwnerID;728155399655784488;]
`,
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

bot.command({
  name: "para-sil",
  code: `
$suppressErrors[1;$customEmoji[emoji_71] | Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın]
$description[1;
$customEmoji[emoji_71] | \`$username[$authorID]\` İsimli Kullanıcı \`$username[$mentioned[1]]\` İsimli Kullanıcıdan \`$numberSeparator[$noMentionMessage;,]\` Miktarda Para Sildi]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Sileceğim Miktar Para Değil! D-Dostum Naptın Sen :D]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 

`,
});

bot.command({
  name: "elmas-sil",
  code: `
$suppressErrors[1;$customEmoji[emoji_71] | Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın]
$description[1;
$customEmoji[emoji_71] | \`$username[$authorID]\` İsimli Kullanıcı \`$username[$mentioned[1]]\` İsimli Kullanıcıdan \`$numberSeparator[$noMentionMessage\` Miktarda Elmas Sildi]
$setGlobalUserVar[elmas;$sub[$getGlobalUserVar[elmas;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Sileceğim Miktar Elmas Değil! D-Dostum Naptın Sen :D]
$onlyForIDs[$botOwnerID;728155399655784488;]
`,
});

bot.command({
  name: "altın-sil",
  code: `
$suppressErrors[1;$customEmoji[emoji_71] | Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın]
$description[1;
$customEmoji[emoji_71] | \`$username[$authorID]\` İsimli Kullanıcı \`$username[$mentioned[1]]\` İsimli Kullanıcıdan \`$numberSeparator[$noMentionMessage;,]\` Miktarda Altın Sildi]
$setGlobalUserVar[altın;$sub[$getGlobalUserVar[altın;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Sileceğim Miktar Altın Değil! D-Dostum Naptın Sen :D]
$onlyForIDs[$botOwnerID;728155399655784488;]

`,
});

bot.variables({
  premium: "Bulunmuyor",
});

bot.variables({
  hex: "66FFFF",
  prefix: "?",
  oy: "",
});

bot.command({
  name: "rol-ver",
  code: `
$giveRole[$guildID;$mentioned[1];$noMentionMessage]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` Başarıyla \`$userTag[$mentioned[1]]\` Kişisine <@&$noMentionMessage> Rolünü Verdim**
]
$onlyPerms[manageroles;**$customEmoji[emoji_71] | Bu Komutu Kullanmak İçin \`Rolleri Yönet\` İznin Olmalı**]
$suppressErrors[1;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 



`,
});

bot.command({
  name: "rol-al",
  code: `
$takeRole[$guildID;mentioned[1];$noMentionMessage]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` Başarıyla \`$userTag[$mentioned[1]]\` Kişisinden <@&$noMentionMessage> Rolü Aldım**
]
$onlyPerms[manageroles;**$customEmoji[emoji_71] | Bu Komutu Kullanmak İçin \`Rolleri Yönet\` İznin Olmalı**]
$suppressErrors[1;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 



`,
});

bot.command({
  name: "yatır-hepsi",
  code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | Başarıyla \`$numberSeparator[$getGlobalUserVar[para;$authorID];,]\` Miktarında Para Bankaya Yatırıldı**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
});

bot.command({
  name: "çek-hepsi",
  code: `
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | Başarıyla \`$numberSeparator[$getGlobalUserVar[banka;$authorID];,]\` Miktarında Para Cüzdana Çekildi**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
});



bot.variables({
  modlog: "",
  premiumx: "Bulunmuyor",
});

bot.command({
  name: "seviyor-sevmiyor",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**<@$authorID>,<@$mentioned[1]> Kişisi Seni $randomText[Seviyor ❤;Sevmiyor 💔]**]
$suppressErrors[1;{author:$userTag[$authorID]:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71] | Dostum Birisini Etiketlemelisin**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
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
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
});

bot.readyCommand({
  channel: "965170082391146556",
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


//----------------  EKLENDİM - ATILDM LOG ----------------//




