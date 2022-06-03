module.exports = [{
  name: "afk",
  description: "AFK Durumuna Geçin",
  code: `
**$customEmoji[tatlimisir] <@$authorID>**, **\`$noMentionMessage\` Sebebi ile AFK durumuna geçtin.**
$setGlobalUserVar[afk;yes]
$setGlobalUserVar[afkmsj;$noMentionMessage]
$onlyIf[$getGlobalUserVar[afk;$authorID]==no;]
`
},{
  name: "$alwaysExecute",
  code: `
**$customEmoji[tatlimisir] Hoşgeldin <@$authorID>, artık AFK değilsin.**
$setGlobalUserVar[afk;no]
$setGlobalUserVar[afkmsj;]
$onlyIf[$getGlobalUserVar[afk;$authorID]==yes;]
`
},{
  name: "$alwaysExecute",
  code: `
**$customEmoji[tatlimisir] <@$authorID>, Etiketlediğin kişi \(**$username[$mentioned[1]]**\) **\`$getGlobalUserVar[afkmsj;$mentioned[1]]**\` sebebi ile AFK durumunda.
$deleteIn[5s]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==yes;]
`
}]; 
