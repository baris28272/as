module.exports = {
name:"kayıt-kanal",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Kayıt Kanalı Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı**]
$setServerVar[kayıtkanal;$mentionedChannels[1]]
$onlyPerms[admin;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Sadece \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
`
  }