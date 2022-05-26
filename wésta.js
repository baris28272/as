const aoijs = require("aoi.js");
const Discord = require("discord.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix:"$getServerVar[prefix]",
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
para:"0",
banka:"0",
prefix:"?",
kasa:"0",
pasif:"kapalı",
gç:"",
afk:"",
afks:"",
})    

bot.joinCommand({
channel: "$getServerVar[gç]",
code: `
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$author[1;Hoş geldin;$authorAvatar]
$description[1;**$customEmoji[tatlimisir] \`$username#$discriminator[$authorID]\` adlı kullanıcı sunucuya katıldı.**]  `
} )   

bot.leaveCommand({
channel: "$getServerVar[gç]",
code: `
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$author[1;Görüşürüz;$authorAvatar]
$description[1;**$customEmoji[tatlimisir] \`$username#$discriminator[$authorID]\` adlı kullanıcı sunucudan ayrıldı.**]`
} )   
