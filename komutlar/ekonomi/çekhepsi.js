module.exports = {
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
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}