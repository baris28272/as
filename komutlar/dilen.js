module.exports = {
  name: "dilen",
  aliases: "dilen",
  code: `

$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[80;200]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | \`$username\` Dilendin ve $random[80;200] 💵 kazandın.**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$cooldown[15s;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
