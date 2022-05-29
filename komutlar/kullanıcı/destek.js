module.exports = {
name:"destek",
code:`
$author[1;$userTag;$authorAvatar]
$color[1:RANDOM]
$dm[$botOwnerID]
$description[1;**$customEmoji[tatlimisir] $userTag Kişisi \`$message[1]\` sebebi ile destek talebinde bulundu.**]
$channelSendMessage[$chanelID;**$customEmoji[emoji99] <@$authorID> Başarıyla destek  mesajınız iletildi en yakın zamanda geri dönüş yapılacaktır.**]
$argsCheck[>1;**$customEmoji[emoji_999] <@$authorID> Bir destek mesajı belirtmelisin.**]
$cooldown[15s;**$customEmoji[emoji_999] <@$authorID> Bu komutu \`15 Saniye\` sonra kullanabilirsin**]
`}