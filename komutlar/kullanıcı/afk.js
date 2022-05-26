module.exports = {
  name: "afk",
  code: `
  $setGlobalUserVar[afk;$message]
 $color[1;RANDOM]
 $author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> artık biri seni etiketlediğinde \`$message\` diyeceğim.**]
  $argsCheck[>1;**$customEmoji[emoji_999] <@$authorID> Bir sebep belirtmelisin.**]
`
}
