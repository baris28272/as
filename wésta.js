const aoijs = require("aoi.js");
const Discord = require("discord.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  intents: "all",
  fetchInvites: true,
});
bot.onGuildJoin();
bot.onGuildLeave();
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();
bot.onMessage(); //enables bot to see messages (required for executing Commands)
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/");

const aoidash = require('aoi.js-panel');
const dash = new aoidash.Dash(bot, {
  port: 8080,
  command: './komutlar',
  username: process.env.kullaniciadi,
  password: process.env.sifre
});
dash.start(); 


bot.variables({
  para: "0",
  banka: "0",
  prefix: "?",
  kasa: "0",
  pasif: "kapalı",
  gç: "",
  afk: "",
  afks: "",
  otorol: "",
  otokanal: "",
  afk: "no",
  afkmsj: "",
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
  name: "çekiliş",
  code: `
<@&970349515074842739>
$deletecommand
$onlyForRoles[975126345841520690;]
`,
});


bot.status({
  text: "$getServerVar[prefix]yardım / $getServerVar[prefix]destek / $getServerVar[prefix]öneri",
  type: "WATCHING",
  status: "STREAMER",
  time: 12
})
