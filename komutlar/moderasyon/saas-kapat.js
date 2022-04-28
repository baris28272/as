module.exports = {
name:"saas-kapat",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70]・Başarıyla Sa As Sistemini Kapadın**]
$setServerVar[saas;kapalı]
$onlyIf[$getServerVar[saas]!=kapalı;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID>,Selam Sistemi Zaten Kapalı Açmak İçin \`?saas-aç\`**}{color:RANDOM}}]
$onlyPerms[managemessages;{newEmbed:{description:**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkin Olmalı**}{color:RANDOM}}]
$suppressErrors
`
}