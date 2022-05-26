module.exports = {
name:"saas-kapat",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarıyla Sa As Sistemini Kapadın**]
$setServerVar[saas;kapalı]
$onlyIf[$getServerVar[saas]!=kapalı;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID>,Selam Sistemi Zaten Kapalı Açmak İçin \`?saas-aç\`**}{color:RANDOM}}]
$onlyPerms[managemessages;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkin Olmalı**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$suppressErrors
`
}