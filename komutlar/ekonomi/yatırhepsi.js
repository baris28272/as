module.exports = {
  name: "yatır-hepsi",
  code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | Başarıyla \`$numberSeparator[$getGlobalUserVar[para;$authorID];,]\` Miktarında Para Bankaya Yatırıldı**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
}