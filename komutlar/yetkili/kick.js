module.exports = {
  name: "kick",
  code: `
$kick[$mentioned[1];$guildID;0;$noMentionMessage]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] \`$username[$mentioned[1]]\` adlı kullanıcı \`$noMentionMessage\` sebebiyle başarıyla sunucudan atıldı.**]
$onlyPerms[kick;**$customEmoji[emoji_999] <@$authorID> Bu komutu sadece \`Üyeleri At iznine\` sahip olan kullanıcılar kullanabilir.**]

}  
