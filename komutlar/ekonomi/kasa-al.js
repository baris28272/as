module.exports = {
name:"kasa-al",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarıyla bir tane kasa aldın açmak için \`?kasa-aç\` yazmalısın**]
$onlyIf[$getGlobalUserVar[para;$authorID]>300;**$customEmoji[emoji_999] <@$authorID>, cüzdanında yeterli miktarda paran yok.**]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];300];$authorID]
$setGlobalUserVar[kasa;$sum[$getGlobalUserVar[kasa;$authorID];1];$authorID]  


`
  }