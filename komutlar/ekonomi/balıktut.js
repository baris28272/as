module.exports = {
name: "balık-tut",
code: `
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Balık tuttun ve $random[120;210] 💵 kazandın.**]  
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[120;210]];$authorID]
$cooldown[1m;**$customEmoji[emoji_999] <@$authorID>,bu komutu kullanmak için \`1 Dakika\` beklemelisin.**]
`
}  
