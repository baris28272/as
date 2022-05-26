module.exports = {
name:"pasif-aç",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarıyla pasif modunu açtım**]
$setGlobalUserVar[pasif;açık;$authorID]
$onlyIf[$getGlobalUserVar[pasif]!=açık;**$customEmoji[emoji_999] <@$authorID> Pasif sistemi zaten açık**]
`
  }