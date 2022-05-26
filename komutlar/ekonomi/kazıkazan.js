module.exports = {
name: "kazı-kazan",
code: `
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Kazı Kazan oynayarak $randomText[100;200;300;400;500] 💵 kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$randomText[100;200;300;400;500]];$authorID]  
$cooldown[5m;**$customEmoji[emoji_999] <@$authorID>,bu komutu kullanmak için \`5 Dakika\` beklemelisin.**]
`
}  

