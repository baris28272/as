module.exports = {
  name: "elmas-ekle",
  code: `
$suppressErrors[1;**$customEmoji[emoji_71] | $username Ekeyeceğim Kişiyi Etiketlemelisin ve Ne kadar miktar ekleyeceğimi yazmalısın!**]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Yetkili \`$userTag[$mentioned[1]]\` İsimli Kullanıcıya \`$numberSeparator[$noMentionMessage;,]\` Miktarda Elmas Ekledi**
]
$setGlobalUserVar[elmas;$sum[$getGlobalUserVar[elmas;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Ekleyeceğim Miktar Elmas Değil! D-Dostum Naptın Sen :D]
$onlyForIDs[$botOwnerID;728155399655784488;]
`,
};
