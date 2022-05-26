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
})    