module.exports = {
name:"para-çek",
code:`
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarılı cüzdanına $numberSeparator[$message[1];,] 💵 çektin.**]
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$message];$authorID]  
$onlyIf[$message!=;**$customEmoji[emoji_999] <@$authorID>, bir miktar girebilirmisin.**]
$onlyIf[$isNumber[$message]!=false;]
$onlyIf[$message>0;**$customEmoji[emoji_999] <@$authorID>, girdiğin miktar 1 ve üstü olmalıdır.**]
$onlyIf[$message<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_999] <@$authorID>, cüzdanın da o kadar para yok.**]
`
  }