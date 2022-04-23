module.exports = {
name:"istifa-et",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla \`$getGlobalUserVar[meslek]\` Mesleğinden İstifa Ettiniz**]
$setGlobalUserVar[meslek;Bulunmuyor;$authorID]
$setGlobalUserVar[maaş;0;$authorID]
`
  }