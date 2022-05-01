module.exports = {
name:"kadın",
aliases:"k",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1:RANDOM]
$description[1;**$customEmoji[emoji99] <@$mentioned[1]> İsimli Kullanıcıya <@&$getServerVar[kadınrol]> Rolünü Verdim Ve İsmini \`$noMentionMessage\` Olarak Değiştirdim**]
$takeRoles[$mentioned[1];$getServerVar[kayıtsızrol]]
$giveRoles[$mentioned[1];$getServerVar[kadınrol]]
$changeNickname[$mentioned[1];$noMentionMessage]
$onlyForRoles[$getServerVar[kayıtyetkili;{newEmbed:{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Yalnızca <@&$getServerVar[kayıtyetkili]> Rolü Olan Kişiler Kullanabilir**}{color:RANDOM}}]
$onlyIf[$getServerVar[kadınrol]!=0;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Maalesef Bu Sunucuda Erkek Rolü Ayarlanmamış**}{color:RANDOM}}]
$onlyIf[$getServerVar[kayıtsızrol]!=0;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{descripton:**$customEmoji[emoji_999] <@$authorID> Maalesef Bu Sunucuda Kayıtsız Rolü Ayarlanmamış**}{color:RANDOM}}]
$suppressErrors
`
  }