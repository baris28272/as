module.e{
  name: "çek-hepsi",
  code: `
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | Başarıyla \`$numberSeparator[$getGlobalUserVar[banka;$authorID];,]\` Miktarında Para Cüzdana Çekildi**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
}