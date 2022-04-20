module.exports = {
name:"prefix-ayarla",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Prefix \`$message[1]\` Olarak Ayarlandı.**]
$setServerVar[prefix;$message[1]]
$onlyPerms[admin;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> Bunu Kullanmak İçin \`Yönetici\` İznin Olmalı}{color:RANDOM}}]

`
  }