module.exports = {
  name: "abone-yetkili ayarla",
  code: `$setServerVar[aboneyetkilisi;$mentionedRoles[1]]
  $author[1;$userTag;$authorAvatar]
  $description[1;**$customEmoji[emoji_70]・Abone Yetkilisi Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı**]
  $footer[1;$username Kullandı;$userAvatar[$authorID]]
  $color[1;RANDOM]
  $onlyIf[$message!=;**$customEmoji[emoji_71]・Bir Rol Etiketlemelisin.**]`
}
