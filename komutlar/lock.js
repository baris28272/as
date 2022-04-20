module.exports = {
name:"lock",
$if:"v4",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] Başarıyla <#$mentionedChannels[1;yes]> İsimli Kanal Kilitlendi.**]
$footer[1;Komut $userTag Tarafından Kullanıldı;$user

  `
  }