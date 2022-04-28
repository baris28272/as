module.exports = {
  name: "seviyor-sevmiyor",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**<@$authorID>,<@$mentioned[1]> Kişisi Seni $randomText[Seviyor ❤;Sevmiyor 💔]**]
$suppressErrors[1;{author:$userTag[$authorID]:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71] | Dostum Birisini Etiketlemelisin**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
}