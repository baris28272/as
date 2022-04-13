module.exports = {
  name: "abone-rol ayarla",
  code: `$setServerVar[abonerol;$mentionedRoles[1]]
  $author[1;$userTag;$authorAvatar]
  $description[1;**$customEmoji[emoji_70]・Abone Rolü Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı** $customEmoji[afyevet]]
  $footer[1;$username Kullandı;$userAvatar[$authorID]]
  $color[1;RANDOM]
 $argsCheck[1;{newEmbed:{title:Abone Rol Sistemi}{description:**<@$authorID> Bir Rol Etiketlemelisin $customEmoji[afyhayir]**}{color:$random[0;999999]}}}]
 $onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
 `
}