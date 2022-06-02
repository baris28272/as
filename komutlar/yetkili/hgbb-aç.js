module.exports = {
name:"hgbb",
$if:"v4",
code:`
$if[$message[1]==aç]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Gelen giden sistemi başarıyla açıldı log kanalı <#$mentionedChannels[1]> olarak ayarlandı.**]
$setServerVar[gç;$mentionedChannels[1]]
$onlyPerms[admin;**$customEmoji[emoji_999] <@$authorID>, bu komutu sadece \`Yönetici\` iznine sahip olan kullanıcılar kullanabilir.**]
$onlyIf[$mentionedChannels[1]!=;**$customEmoji[emoji_999] <@$authorID>, bir kanal etiketlemelisin.**]
$endif
$if[$message[1]==kapat]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Gelen giden sistemi başarıyla kapatıldı.**]
$resetServerVar[gç]
$onlyPerms[admin;**$customEmoji[emoji_999] <@$authorID>, bu komutu sadece \`Yönetici\` iznine sahip olan kullanıcılar kullanabilir.**]
$endif
$onlyIf[$checkContains[$toLowercase[$message];aç;kapat]==true;**$customEmoji[emoji_999] <@$authorID>, lütfen sadece \`aç\` veya \`kapat\` argümanlarını kullan.**]`
}   
