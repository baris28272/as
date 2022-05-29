module.exports = {
name:"öneri",
code:`
$author[1;$userTag;$authorAvatar]
$color[1:RANDOM]
$dm[$botOwnerID]
$description[1;**$customEmoji[tatlimisir] $userTag Kişisi \`$message[1]\` önerisinde bulundu.**]
$channelSendMessage[$chanelID;**$customEmoji[emoji99] <@$authorID> Başarıyla önerinizi verdiniz.**]
$argsCheck[>1;**$customEmoji[emoji_999] <@$authorID> Bir öneri mesajı belirtmelisin.**]
$cooldown[15s;**$customEmoji[emoji_999] <@$authorID> Bu komutu \`15 Saniye\` sonra kullanabilirsin**]
`
  }