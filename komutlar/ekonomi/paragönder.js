module.exports = {
  name: "para-gönder",
  aliases: "para-gönder",
  code: `
$author[1:$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;
**$customEmoji[emoji99] | \`$userTag[$authorID]\` İsimli Kullanıcı \`$userTag[$mentioned[1]]\` Kişisine \`$numberSeparator[$noMentionMessage;,]\` Miktarında Para Gönderdi**
]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$mentioned[1]!=$botOwnerID;728155399655784488;{newEmbed:{author:$userTag:$authorvatar}{description:$customEmoji[emoji_999] | **Bot Geliştiricisine** Para Atamazsın}{color:RED}}] 
$onlyIf[$noMentionMessage<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_999] | $username Bu Kadar Paran Yok Üstünde**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$onlyIf[$mentioned[1]!=$authorID;**$customEmoji[emoji_999] | $username Kendine Para Yollayazsın**]
$onlyIf[$isNumber[$noMentionMessage]!=false;**$customEmoji[emoji_999] | Bir miktar belirt**]
$onlyIf[$noMentionMessage>0;**$customEmoji[emoji_999] | $username 0'dan Düşük miktar belirtemezsi**]
$suppressErrors[1;**$customEmoji[emoji_999] | $username Doğru Kullanım ?para-gönder @etiket Miktar**]
`,
};
