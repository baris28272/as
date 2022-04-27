module.exports = {
  name: "küfür-engel",
  $if:"v4",
  code: `
$if[$message[1]==aç] 
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Küfür Engel Sistemi Açıldı.**]
$setServerVar[küfürengell;Açık]
$endif
$if[$message[1]==kapat] 
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Küfür Engel Sistemi Kapatıldı.**]
$setServerVar[küfürengell;Kapalı]
$endif
$onlyPerms[admin;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71 ] <@$authorID> Bunu Kullanmak İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71] <@$authorID> aç veya kapat Yazmalısın**}{color:RANDOM}}]
`
}