module.exports = {
name: "şanslı-sayı oyunu",
code: `
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID>, şanslı sayın  \`$random[1;100]\` olduğu için \`$random[1;100]\` miktar para kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[1;100]];$authorID]  
$cooldown[5m;**$customEmoji[emoji_999] <@$authorID>,bu komutu kullanmak için \`5 Dakika\` beklemelisin.**] 
`
}  
