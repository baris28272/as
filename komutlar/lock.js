module.exports = {
name:"lock",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] Başarıyla <#$mentionedChannels[1;yes]> İsimli Kanal Kilitlendi.**]
$footer[1;Komut $userTag Tarafından Kullanıldı;$userAvatar[$authorID]]
$modifyChannelPerms[$roleID[@everyone];$mentionedChannels[1;yes];-sendmessage]
$onlyPerms[admin;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> Bunu Kullanman İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]

  `
  }