module.exports = {
  name: "yatır",
  code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$onlyIf[$message>0;**<:emoji_71:917309220687314966> | $username Girdiğin Miktar 1 ve üstü olmalıdır.**]
$onlyIf[$isNumber[$message]!=false;<:emoji_71:917309220687314966> | Lütfen Sayı Gir.]
$suppressErrors[1;**<:emoji_71:917309220687314966> | $username Yatıracağın Miktarı Yazarmısın**]
$onlyIf[$message<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_71] | Cüzdanında Para Yok**]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<:emoji_70:917309183341236244> | \`$userTag[$authorID]\`Başarıyla Bankanıza $message 💵 Para Yatırdınız**]
$onlyIf[$noMentionMessage>=0;**<:emoji_71:917309220687314966> | $username Sayıyı düzgün yaz.**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
$cooldown[5s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`5 Saniye\` Beklemelisin.**] 
`

};

