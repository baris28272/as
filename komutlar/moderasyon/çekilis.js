module.exports = [{
  name: "çekiliş",
  code: `
$setTimeout[cekilis;$message[1];{
"odul": "$messageSlice[1]", 
"baslatan": "$authorID",
"msg": "$get[msg]",
"kanal": "$channelID",
"guild": "$guildID"
}]
$let[msg;$sendMessage[{"content": "🎉 **ÇEKİLİŞ** 🎉", "embeds": "{newEmbed:{title:$messageSlice[1]}
{description:Çekilişe katılmak için 🎉 tepkisine tıklayın!
Süre: ****
Başlatan: <@$authorID>}
{footer:🎉}{timestamp}{color:GREEN}}", "options": "{reactions:🎉}"};yes]]
$suppressErrors[]
$onlyIf[$messageSlice[1]!=;Bir ödül girmelisiniz!]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;];w;]]==true;Zaman Belirtmelisiniz \`?çekiliş 10h nitro\`]
$onlyIf[$checkContains[$message[1];s;m;h;d;w]==true;Doğru zaman girin!]
`,
},{
  name: "cekilis",
  type: "timeout",
  code: `
    $editmessage[$timeoutData[msg];🎉 **ÇEKİLİŞ SONA ERDİ** 🎉 {newEmbed:{title:$timeoutData[odul]}
{description:Çekilişe katılmak için 🎉 tepkisine tıklayın!
Süre: **Bitti**
Başlatan: <@$timeoutData[baslatan]>}
{footer:Bitiş}{timestamp}{color:RED}};$timeoutData[kanal]]
    $channelsendmessage[$timeoutData[kanal];<@$randomText[$joinSplitText[#SEMI#]]>, **$timeoutData[odul]** Çekilişini Kazandı! 🎉 \nhttps://discord.com/channels/$timeoutData[guild]/$timeoutData[kanal]/$timeoutData[msg]]
 $textSplit[$replaceText[$getReactions[$timeoutData[kanal];$timeoutData[msg];🎉;,;id];$clientID,;];,]
`,
}] 
