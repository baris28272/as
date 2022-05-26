module.exports = {
name: "$alwaysExecute",
 code: `
$setGlobalUserVar[afks;$getGlobalUserVar[afks;$mentioned[1]] | <@$authorID>;$mentioned[1]]
$color[1;RANDOM]
$author[1;$userTag;$userAvatar[$mentioned[1]]]
$description[1;**$customEmoji[tatlimisir] \`$username[$mentioned[1]]\` şuan da \`$getGlobalUserVar[afk;$mentioned[1]]\` sebebi ile AFK lütfen rahatsız etme.**]
$deletecommand
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]!=;]

  `
}

