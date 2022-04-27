module.exports = {
  name: "küfür-engel aç",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Küfür Engel Sistemi Açıldı.**]
$setServerVar[küfürengell;Açık]
$onlyPerms[admin;{newEmbed:{description:**<@$authorID> Bunu Kullanmak İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
$argsCheck[1;{newEmbed:{author:$userTag:$user{description:**<@$authorID> Bir Prefix Belirtmelisin}{color:RANDOM}}]

`
}