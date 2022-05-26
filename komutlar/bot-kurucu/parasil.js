module.exports = {
  name: "para-sil",
  code: `
$suppressErrors[1;$customEmoji[emoji_71] | Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın]
$description[1;
$customEmoji[emoji_71] | \`$username[$authorID]\` İsimli Kullanıcı \`$username[$mentioned[1]]\` İsimli Kullanıcıdan \`$numberSeparator[$noMentionMessage;,]\` Miktarda Para Sildi]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;$customEmoji[emoji_71] | Sileceğim Miktar Para Değil! D-Dostum Naptın Sen :D]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
$onlyForIDs[855747867074494544;]
`,
}