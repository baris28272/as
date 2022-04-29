module.exports = {
name:"bakım-sistemi-aç",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tick99] Bakım Sistemi Başaryıla Açıldı**]
$setGlobalUserVar[bakımsistemi;Açık]
$onlyIf[$getGlobalUserVar[bakımsistemi;$auhorID]!=Açık;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bakım Sistemi Zaten Açık Kapatmak İçin \`?bakım-kapat\` Yazmalısın**}{color:RANDOM}}]
`
}
  