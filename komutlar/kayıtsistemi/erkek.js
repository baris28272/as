module.exports = {
name:"erkek",
aliases:"e",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1:RANDOM]
$description[1;**$customEmoji[emoji99] <@$mentioned[1]> İsimli Kullanıcıya <@&$getServerVar[erkekrol]> Rolünü Verdim Ve İsmini \`$noMentionMessage\` Olarak Değiştirdim**]
$takeRoles[$mentioned[1];$getServerVar[kayıtsızrol]]
$giveRoles[$mentioned[1];$getServerVar[erkekrol]]
$changeNickname[$mentioned[1];$noMentionMessage]
$onlyForRoles[$getServerVar;{newEmbed:{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu 
`
  }