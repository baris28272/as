module.exports = {
name:"bakım-kapat",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tick99] <@$authorID> Bakım Sistemi Başaryıla Kapatıldı**]
$setGlobalUserVar[bakımsistemi;Kapalı]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Kapalı;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bakım Sistemi Zaten Kapalı Açmak İçin \`?bakım-aç\` Yazmalısın**}{color:RANDOM}}]
$onlyForIDs[855747867074494544;
`
}
  