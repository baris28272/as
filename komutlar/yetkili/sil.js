module.exports = {
name: "sil",
code: `
$clear[$message[1]]
**$message[1]** adet mesaj silindi.
$argsCheck[1;**$customEmoji[emoji_999] <@$authorID>, bir sayı yazmalısın.**]
$onlyPerms[managemessages;**$customEmoji[emoji_999] <@$authorID>, bu komutu kullanmak için \`Mesajları Yönet\` yetkisine sahip olmalısın.]]
$deletecommand
$onlyIf[$isNumber[$message[1]]!=false;]
$suppressErrors  
`
}   
