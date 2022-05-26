module.exports = {
name:"para-yatır",
code:`
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Başarılı banka hesabına $numberSeparator[$message[1];,] 💵 yatırdın.**]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$message];$authorID]  
$onlyIf[$message!=;**$customEmoji[emoji_999] <@$authorID>, bir miktar girebilirmisin.**]
$onlyIf[$isNumber[$message]!=false;]
$onlyIf[$message>0;**$customEmoji[emoji_999] <@$authorID>, girdiğin miktar 1 ve üstü olmalıdır.**]
$onlyIf[$message<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_999] <@$authorID>, cüzdanın da o kadar para yok.**]
`
  }