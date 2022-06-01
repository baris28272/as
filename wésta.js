const aoi = require('aoi.js')
const bot = new aoi.Bot({
   token: process.env.token, ////token enve
   prefix:"?",
   intents: 'all',
database: {
         type:'default',
        db:require('quick.db'),//herhangi bir data base modülüde olur
        path:"./database/",//dosya adı
        tables:["westa"],
        promisify:true
    } .
  bot.readyCommand({
  channel:"LOG KANAL İD",
  code:`
  $log[Aktifim]
  `
})
})
 
////HANDLER//////
bot.onInteractionCreate()
bot.onLeave()
bot.onMessage()
bot.onMessageDelete()
const loader = new aoi.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
require('./dashbord.js')(bot,8080,'./commands','aoi.js','v5')


bot.variables({
  para: "0",
  banka: "0",
  prefix: "?",
  kasa: "0",
  pasif: "kapalı",
  gç: "",
  afk: "",
  afks: "",
  otorol:"",
  otokanal:"",
});
bot.joinCommand({
  channel: "$getServerVar[gç]",
  code: `
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$author[1;Hoş geldin;$authorAvatar]
$description[1;**$customEmoji[tatlimisir] \`$username#$discriminator[$authorID]\` adlı kullanıcı sunucuya katıldı.**]  `,
});
bot.leaveCommand({
  channel: "$getServerVar[gç]",
  code: `
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$author[1;Görüşürüz;$authorAvatar]
$description[1;**$customEmoji[tatlimisir] \`$username#$discriminator[$authorID]\` adlı kullanıcı sunucudan ayrıldı.**]`,
});

bot.joinCommand({
  channel: "$getServerVar[otokanal]",
  code: `
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$author[1;Hoş geldin;$authorAvatar]
$description[1;**$customEmoji[tatlimisir] \`$username#$discriminator[$authorID]\` adlı kullanıcı sunucuya katıldı ve <@&$getServerVar[otorol]> rolü verildi.**]  `,
});

bot.command({
name:"çekiliş",
code:`
<@&970349515074842739>
$deletecommand
$onlyForRoles[975126345841520690;]
$onlyIf[$message==;]
`
  })