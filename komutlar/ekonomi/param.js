module.exports = {
  name: "param",
  aliases: [`param`, `cash`],
  code: `
$color[1;RANDOM]
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$addField[1;**・Rozetler**;
> ・**Developer** : **$getGlobalUserVar[developer;$mentioned[1;yes]]**
> ・**Moderatör** : **$getGlobalUserVar[staf;$mentioned[1;yes]]**
> ・**Bug Hunter** : **$getGlobalUserVar[bughunter;$mentioned[1;yes]]**
]
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
$onlyIf[$getGlobalUserVar[kl;$mentioned[1;yes]]!=true;\`$getGlobalUserVar[ksebep;$mentioned[1;yes]]\` sebebinden karalistedesiniz  
$footer[1;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1]]]
`,
}