module.exports = {
name:"otorol aç",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] <@$authorID> Otorol sistemi başarıyla açıldı verilecek rol ise <@&$mentionedRoles[1]> olarak ayarlandı log kanalı ise <#$mentionedChannels[1]> olarak ayarlandı.**]
$$setServerVar[otorolk;$mentionedChannels[1]] 
`
}