module.exports = {
name:"premium-ver",
code:`
$channelSendMessage[975444593581649981;**$customEmoji[emoji99] \`$userTag[$get[y]]\` Kişisinin \`$get[s]\` Süreli Premiumun Süresi Bittiği İçin Premium'u Aldım**;no]
$setGlobalUserVar[premium;Bulunmuyor;$get[y]]
$wait[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[s]; ;];Saniye;s];Dakika;m];Saat;h];Gün;d]]
$sendMessage[**$customEmoji[emoji99] \`$userTag[$get[y]]\` Kişisine Başarıyla \`$get[s]\` Süresine Kadar Premium Verildi**;no]
$setGlobalUserVar[premium;Bulunuyor;$get[y]]
$let[s;$messageSlice[1]]
$let[k;$authorID]
$let[y;$mentioned[1]]
$onlyIf[$checkContains[$messageSlice[1];Saniye;Dakika;Saat;Gün]!=false;**$customEmoji[emoji_999] <@$authorID> Bir süre girin. \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`**]
$suppressErrors[1;**$customEmoji[emoji_999] <@$authorID> Birini Etiketleyin ve bir Süre Belirt \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`**]
$onlyIf[$messageSlice[1]!=;**$customEmoji[emoji_999] <@$authorID> Bir süre girin. \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`**]
$onlyIf[$isBot[$mentioned[1]]!=true;**$customEmoji[emoji_999] <@$authorID> Bir bota premium veremezsin**]
$onlyIf[$mentioned[1]!=;**$customEmoji[emoji_999] <@$authorID> Bir Kişiyi Etiketlemelisin**]
$onlyForIDs[855747867074494544;**$customEmoji[emoji_999] <@$authorID> Bu Komutu Sadece \`$userTag[855747867074494544]\` İsimli Geliştiricim Kullanabilir**]
`
  }