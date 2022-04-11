module.exports = {
  name: "rozet-al",
  code: `
$setGlobalUserVar[developer;<:developerr:910821172877344778>;$authorID] **$customEmoji[emoji_70] | Başarıyla $username[$authorID] Tüm Rozetleri Satın Aldın**
$setGlobalUserVar[bughunter;<:emoji_90:937429223478542336>;$authorID]
$setGlobalUserVar[staf;<:emoji_51:927275737696862251>;$authorID]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];200000];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>200000;**<@$authorID>, cüzdanında yeterli miktarda para yok.**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
};
