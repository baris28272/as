module.exports = {
name:"kasa-aç",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Kasa açıldı ve $random[100;800] 💵 kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[100;800]];$authorID]
$setGlobalUserVar[kasa;$sub[$getGlobalUserVar[kasa;$authorID];1];$authorID]  
$onlyIf[$getGlobalUserVar[kasa]<0;**$customEmoji[emoji_999] <@$authorID>, Kasan yok almak için \`?kasa-al\` yazmalısın.**]
  `
  }