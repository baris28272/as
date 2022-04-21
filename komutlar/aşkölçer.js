module.exports = {
  name: "aşk-ölçer",
  aliases: "aşk-ölçer",
  code: `
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$userTag & $userTag[$mentioned[1]] Aranızdaki Aşk %$random[1;100]'dur**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
$argsCheck[1;**$customEmoji[emoji_71] • Birini Etiketle.**]

`

};

