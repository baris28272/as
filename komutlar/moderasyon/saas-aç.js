module.exports = {
name:"saas-aç",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70]・Başarıyla Sa As Sistemini Aktif Ettin**]
$setServerVar[saas;açık]
$onlyIf[$getServerVar[saas]!=açık;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID>,Selam Sistemi Zaten Aktif Kapatmak İçin \`?saas-kapat\`**}{color:RANDOM}}]
$onlyPerms[managemessages;{newEmbed:{description:**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkin Olmalı**}{color:RANDOM}}]
$suppressErrors
`
}