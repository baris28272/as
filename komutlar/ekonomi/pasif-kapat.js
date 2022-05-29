module.exports = {
name:"pasif-kapat",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarıyla pasif modunu kapattım**]
$setGlobalUserVar[pasif;kapalı;$authorID]
$onlyIf[$getGlobalUserVar[pasif]!=kapalı;**$customEmoji[emoji_999] <@$authorID> Pasif sistemi zaten kapalı**]
`
  }