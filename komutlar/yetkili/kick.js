module.exports = {
  name: "kick",
  code: `
$kick[$mentioned[1];$guildID;7;$noMentionMessage]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] \`$username[$mentioned[1]]#$discriminator[$mentioned[1]\` adlı kullanıcı başarıyla sunucudan atıldı.**]
$onlyPerms[kick;**$customEmoji[emoji_999] <@$authorID> Bu komutu sadece \`Üyeleri At iznine\` sahip olan kullanıcılar kullanabilir.**]
$argsCheck[1;**$customEmoji[emoji_999] <@$authorID> Sunucudan atılacak kişiyi etiketlemelisin.**]
$suppressErrors`
}  
