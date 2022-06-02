module.exports = {
name:"otorol aç",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Otorol sistemi başarıyla açıldı**]
$setServerVar[otorol;$mentionedRoles[1]]
$setServerVar[otokanal;$mentionedChannels[1]]
$argsCheck[>1;**$customEmoji[emoji_999] <@$authorID>, ilk önce bir kanal etiketlemelisin ve bir rol etiketlemelisin.**]
$onlyIf[$mentionedRoles[1]!=;]
$onlyIf[$mentionedChannels[1]!=;]
$onlyPerms[admin;**$customEmoji[emoji_999] <@$authorID> Bu komutu kullanmak için \`Yönetici İznin\` olmalı**]
`
}