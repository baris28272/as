module.exports = {
name:"abone",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$mentioned[1]> Kişisine Başarıyla Abone Rolü Verildi.**]
$channelSendMessage[$getServerVar[abonelog];{newEmbed:{author:$userTag[$mentioned[1]]:$authorAvatar}{description:**$customEmoji[emoji99] $userTag[$mentioned[1]] Kişişine Abone Rolü Verildi Veren Yetkili İse $userTag Kişisidir**}{color:RADNOM}}]
$giveRole[$guildID;$mentioned[1];$getServerVar[abonerol]]
$onlyForRoles[$getServerVar[aboneyetkilisi];{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji99] <@$authorID> Bu Komutu Kullanmak İçin \`$roleName[$getServerVar[aboneyetkilisi]]\` Rolün Olmalı**}{color:RANDOM}}]

`
  }