module.exports = {
      name:"abone",
      aliases:"a",
      code:`$giveRole[$guildID;$mentioned[1];$getServerVar[abonerol]]
      $setGlobalUserVar[abonesayisi;$sum[$getGlobalUserVar[abonesayisi];1]]
    $author[1;$userTag;$authorAvatar]
    $description[1;**$customEmoji[emoji_70]・<@$mentioned[1]> Adlı Kullanıcıya Başarıyla <@&$getServerVar[abonerol]> Adlı Rol Verildi.** $customEmoji[afypikacu]]
    $footer[1;$username Kullandı;$userAvatar[$authorID]]
    $color[1;RANDOM]
    $onlyForRoles[$getServerVar[aboneyetkilisi];Yetkin Yok]
    $onlyIf[$getServerVar[abonerol]!=0;**$customEmoji[emoji_71]・Bu Sunucuda Abone Rolü Ayarlı Değil**]
 $onlyIf[$getServerVar[aboneyetkilisi]!=0;**$customEmoji[emoji_71]・Bu Sunucuda Abone Yetkilisi Ayarlı Değil**]
    `}
