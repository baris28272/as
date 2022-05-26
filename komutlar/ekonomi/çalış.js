module.exports = {
name: "çalış",
code: `
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Bir işte çalıştın ve $random[80;200] 💵 kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[80;200]];$authorID]
$globalCooldown[30m;**$customEmoji[emoji_999] <@$authorID>  sadece \`30 dakika da bir çalışabilirsin.**]
`
}    
