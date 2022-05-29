module.exports = {
name:"para-gönder",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> tarafında <@$mentioned[1]> kişisine \`$noMentionMessage\` miktarında para yolladı.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]
$onlyIf[$mentioned[1]!=$authorID;**$customEmoji[emoji_999] <@$authorID>, kendine para gönderemezsin.**]
$onlyIf[$noMentionMessage<$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_999] <@$authorID>, o kadar paran yok.**]
$onlyIf[$noMentionMessage<200001;**$customEmoji[emoji_999] <@$authorID>,  200.000 üstü sayı giremezsin.**]  
`}