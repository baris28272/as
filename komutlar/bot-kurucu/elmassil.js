module.exports = {
  name: "elmas-sil",
  code: `
$suppressErrors[1;$customEmoji[emoji_71] | Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın]
$description[1;
$customEmoji[emoji_71] | \`$username[$authorID]\` İsimli Kullanıcı \`$username[$mentioned[1]]\` İsimli Kullanıcıdan \`$numberSeparator[$noMentionMessage\` Miktarda Elmas Sildi]
$setGlobalUserVar[elmas;$sub[$getGlobalUserVar[elmas;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Sileceğim Miktar Elmas Değil! D-Dostum Naptın Sen :D]
$onlyForIDs[$botOwnerID;855747867074494544;728155399655784488;]
`,
}