module.exports = {
name: "nuke",
code: `
$deleteChannels[$channelID]
$cloneChannel
$onlyPerms[managemessages;**$customEmoji[emoji_999] <@$authorID>, bu komutu kullanmak için \`Mesajları Yönet\` iznine sahip olmalısın.**]
`
}    
