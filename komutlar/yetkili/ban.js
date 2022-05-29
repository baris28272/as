module.exports = {
  name: "ban",
  code: `
$ban[$mentioned[1];$guildID;0;$noMentionMessage]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] \`$username[$mentioned[1]]\` adlı kullanıcı \`$noMentionMessage\` sebebiyle başarıyla sunucudan yasaklandı.**]
$argsCheck[>1;**$customEmoji[emoji_999] <@$authorID> Bir kişiyi etiketlemelisin ve sebep girmelisin**]
$onlyPerms[ban;**$customEmoji[emoji_999] <@$authorID> Bu komutu sadece Üyeleri \`Yasakla iznine sahip\` olan kullanıcılar kullanabilir.**]
$suppressErrors
`
}  
