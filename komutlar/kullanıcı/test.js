const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.roles.has('MODERATE_MEMBERS')) return message.channel.send(`Bu komudu kullanabilmek için "Moderasyon" yetkisine sahip olman gerek.`)
        const fetch = require('node-fetch');
        const ms = require('ms');
        const time = args.slice(1).join(' ');
        if(!time) return message.channel.send('lütfen saati belirtin!');
        const user = message.mentions.users.first();
        const milliseconds = ms(time);
        if(!user) return message.channel.send('kullanıcı belirtilmedi');
        if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
            return message.channel.send('geçersiz zaman veya değil 10s-28d');
        }
        const isoTime = new Date(Date.now() + milliseconds).toISOString();
        await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ communication_disabled_until: isoTime }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bot ${client.token}`,
            },
        });
        message.channel.send(`${user.username} \`${time}\` süresince zaman aşımına uğradı!`);
};
exports.conf = {
  aliases: []
};
exports.help = {
  name: 'test'
};  
