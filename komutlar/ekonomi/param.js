module.exports = {
  name: "param",
  aliases: [`param`, `cash`],
  code: `
$color[1;RANDOM]
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$addField[1;**・Bakiye Bilgileri**;
> ・**Üzerindeki Para Miktarı** : [$abbreviate[$getGlobalUserVar[para;$mentioned[1;yes]]]]($getBotInvite[admin]) 
> ・**Bankadaki Para Miktarı** : [$abbreviate[$getGlobalUserVar[banka;$mentioned[1;yes]]]]($getBotInvite[admin]) 
> ・**Üzerindeki Kasa Miktarı** : [$abbreviate[$getGlobalUserVar[kasa;$mentioned[1;yes]]]]($getBotInvite[admin])
]
$addField[1;・Hesap Bilgileri;
> ・**Hesap İsmi** : \`$userTag[$mentioned[1;yes]]\`
> ・**Hesabın Yaşı** : \`$creationDate[$mentioned[1;yes]]\`
> ・**Hesabın ID'si** : \`$mentioned[1;yes]\`]
$footer[1;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1]]]
`
  }