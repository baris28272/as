module.exports = {
  name: "yatır",
  code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_999] | \`$userTag[$authorID]\` Başarıyla Bankanıza $message 💵 Para Yatırdınız**]
$cooldown[5s;**$customEmoji[emoji_999] <@$authorID> Bu Komutu Kullanmak İçin \`5 Saniye\` Beklemelisin.**] 
$onlyIf[$message>0;**$customEmoji[emoji_999] | $username Girdiğin Miktar 1 ve üstü olmalıdır.**]
$onlyIf[$noMentionMessage>=0;**$customEmoji[emoji_999] | Sayıyı düzgün yaz.**]
$suppressErrors[1;**$customEmoji[emoji_999] | $username Yatıracağın Miktarı Yazarmısın**]
$onlyIf[$message<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_999] | Cüzdanında Para Yok**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`

};

