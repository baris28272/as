module.exports = {
  name: "para-gönder",
  aliases: "para-gönder",
  code: `
$onlyIf[$mentioned[1]!=$authorID;**<:emoji_71:917309220687314966> | $username Kendine Para Yollayazsın**]
$onlyIf[$isNumber[$noMentionMessage]!=false;**$customEmoji[emoji_71] | Bir miktar belirt**]
$onlyIf[$noMentionMessage>0;**$customEmoji[emoji_71] | $username 0'dan Düşük miktar belirtemezsi**]
$suppressErrors[1;**<:emoji_71:917309220687314966> | $username Doğru Kullanım ?para-gönder @etiket Miktar**]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Kullanıcı \`$userTag[$mentioned[1]]\` Kişisine \`$numberSeparator[$noMentionMessage;,]\` Miktarında Para Gönderdi**
]
$color[1;RANDOM] 
$onlyIf[$mentioned[1]!=$botOwnerID;728155399655784488;{description:$customEmoji[emoji_71] | **Bot Geliştiricisine** Para Atamazsın}{color:RED}] 
$onlyIf[$noMentionMessage<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_71] | $username Bu Kadar Paran Yok Üstünde**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
