module.exports = {
name:"prefix ayarla",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Sunucu prefixi \`$message\` olarak ayarlandı.**]
$setServerVar[prefix;$message]
$onlyPerms[admin;**$customEmoji[emoji_999] <@$authorID> Bu komutu sadece \`Yönetici İzni\` olan kişiler kullanabilir.**]
`
  }