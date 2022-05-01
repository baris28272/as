module.exports = {
  name:"erkek-rol",
  code:`
  $author[1;$userTag;$userAvatar[$authorID]]
  $color[1;RANDOM]
  $description[1;**$customEmoji[emoji99] <@$authorID> Erkek Rolü Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı**]
  $onlyPerms[admin;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Kullanmak İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
  $argsCheck[1;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bir Rol Etiketlemelisin**}{color:RANDOM}}]
  $setServerVar[erkekrol;$mentionedRoles[1]]
  
  `
  }