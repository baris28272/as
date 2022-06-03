module.exports = [{
  name: "afk",
  description: "AFK Durumuna Geçin",
  code: `
$author[1;$userTag;$authorAvatar]
$color[1;33FF00]
$description[1;**$customEmoji[tatlimisir] <@$authorID>**, **\`$noMentionMessage\` Sebebi ile AFK durumuna geçtin.**]
$setGlobalUserVar[afk;yes]`setGlobalUserVar[afkmsj;$noMentionMessage]

$onlyIf[$getGlobalUserVar[afk;$authorID]==no;]
`
},{
  name: "$alwaysExecute",
  code: `
$author[1;$userTag;$authorAvatar]
$color[1;33FF00]
$description[1;**$customEmoji[tatlimisir] Hoşgeldin <@$authorID>, artık AFK değilsin.**]
$setGlobalUserVar[afk;no]
$setGlobalUserVar[afkmsj;]
$onlyIf[$getGlobalUserVar[afk;$authorID]==yes;]
`
},{
  name: "$alwaysExecute",
  code: `
$author[1;$userTag;$authorAvatar]
$color[1;33FF00]
$description[1;**$customEmoji[tatlimisir] <@$authorID>, Etiketlediğin kişi \`($username[$mentioned[1]])\` \`$getGlobalUserVar[afkmsj;$mentioned[1]]\` sebebi ile AFK durumunda.**]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==yes;]
`
}]; 
