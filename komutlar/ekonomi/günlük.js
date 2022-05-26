module.exports = {
name: "günlük",
code: `
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Günlük ödülün $random[100;500] 💵**]
$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 
$cooldown[24h;**$customEmoji[emoji_999] <@$authorID>, bu komutu kullanmak için \`1 Gün\` beklemelisin.**]

`
  }
