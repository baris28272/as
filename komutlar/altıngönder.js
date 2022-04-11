module.exports = {
  name: "altın-gönder",
  aliases: "altın-gönder",
  code: `
$onlyIf[$mentioned[1]!=$authorID;<:emoji_71:917309220687314966> | Kendine Altın Yollayazsın]
$onlyIf[$isNumber[$noMentionMessage]!=false;**$customEmoji[emoji_71] | $username Bir miktar belirt**]
$onlyIf[$noMentionMessage>0;**$customEmoji[emoji_71] | $username 0'dan Düşük miktar belirtemezsin**]
$suppressErrors[1;**<:emoji_71:917309220687314966> | $username Doğru Kullanım ?altın-gönder @etiket Miktar**]
$setGlobalUserVar[altın;$sub[$getGlobalUserVar[altın;$authorID];$noMentionMessage];$authorID]
$setGlobalUserVar[altın;$sum[$getGlobalUserVar[altın;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Kullanıcı \`$userTag[$mentioned[1]]\` Kişisine \`$numberSeparator[$noMentionMessage;,]\` Miktarında Altın Gönderdi**
]
$onlyIf[$mentioned[1]!=$botOwnerID;728155399655784488;$customEmoji[emoji_71] | **Bot Geliştiricisine** Para Atamazsın] 
$color[1;RANDOM] 
$onlyIf[$noMentionMessage<=$getGlobalUserVar[altın;$authorID];Bu Kadar Altın Yok Üstünde]
$onlyIf[$getGlobalUserVar[devpara;$authorID]!=Var;$customEmoji[emoji_71] | Developerların Altın Göndermesi Yasak] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
$onlyIf[$getServerVar[guildban]!=1;] 

`,
};
