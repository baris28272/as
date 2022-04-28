module.exports = {
  name: "para-ekle",
  code: `
$suppressErrors[1;{description:**$customEmoji[emoji_71] | Ekeyeceğim Kişiyi Etiketlemelisin ve Ne kadar miktar ekleyeceğimi yazmalısın!**}{color:RED}]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Yetkili \`$userTag[$mentioned[1]]\` İsimli Kullanıcıya \`$numberSeparator[$noMentionMessage;,]\` Miktarda Para Ekledi**
]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | $username Ekleyeceğim Miktar Para Değil! D-Dostum Naptın Sen :D**]
$onlyForIDs[$botOwnerID;728155399655784488;]

`,
};
