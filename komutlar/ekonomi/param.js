module.exports = {
  name: "param",
  aliases: [`param`, `cash`],
  code: `
$color[1;RANDOM]
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$addField[1;**・Bakiye Bilgileri**;
> ・**Üzerindeki Para Miktarı** : [$abbreviate[$getGlobalUserVar[para;$mentioned[1;yes]]]]($getBotInvite[admin]) 
> ・**Bankadaki Para Miktarı** : [$abbreviate[$getGlobalUserVar[banka;$mentioned[1;yes]]]]($getBotInvite[admin]) 
> ・**Üzerindeki Altın Miktarı** : [$abbreviate[$getGlobalUserVar[altın;$mentioned[1;yes]]]]($getBotInvite[admin])
> ・**Üzerindeki Elmas Miktarı** : [$abbreviate[$getGlobalUserVar[elmas;$mentioned[1;yes]]]]($getBotInvite[admin])
]
$addField[1;・Hesap Bilgileri;
> ・**Hesap İsmi** : \`$userTag[$mentioned[1;yes]]\`
> ・**Hesabın Yaşı** : \`$creationDate[$mentioned[1;yes]]\`
> ・**Hesabın ID'si** : \`$mentioned[1;yes]\`]
$footer[1;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1]]]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`
}