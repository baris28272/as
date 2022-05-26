module.exports = {
name:"$alwaysExecute",
code:`
$setGlobalUserVar[afk;]
$setGlobalUserVar[afks;]
$author[1:$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$authorID> Afk lıktan başarıyla çıktın]
$onlyIf[$checkContains[$message;$getServerVar[prefix]afk]!=true;]
$onlyIf[$getGlobalUserVar[afk]!=;]
$color[1;RANDOM] `
}