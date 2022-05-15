module.exports = {
name:"premium-ver",
code:`
$sendMessage[**$customEmoji[emoji99] \`$userTag[$get[y]]\` Kişisinin \`$get[s]\` Süreli Premiumun Süresi Bittiği İçin Premium'u Aldım**;no]
$setGlobalUserVar[premium;Bulunmuyor;$get[y]]
$wait[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[s]; ;];saniye;s];dakika;m];saat;h];gün;d]]
$sendMessage[**$customEmoji[emoji99] \`$userTag[$get[y]]\` Kişisine Başarıyla \`$get[s]\` Süresine Kadar Premium Verildi**;no]
$setGlobalUserVar[premium;Bulunuyor;$get[y]]
$let[s;$messageSlice[1]]
$let[k;$authorID]
$let[y;$mentioned[1]]
`
  }