module.exports = {
name:"kayıt-sistemi sıfırla",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1:RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Kayıt Sistemi Başarıyla Sıfırlandı**]
$resetServerVar[kayıtsızrol]
$resetServerVar[erkekrol]
$resetServerVar[kadınrol]
$resetServerVar[kayıtyetkili]
$onlyPerms[admin;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bunu Sadece \`Yönetici\ İzni Olanlar Kullanabilir**}{color:RANDOM}}]
`
  }