module.exports = {
name:"nuke",
code:`
$deleteChannels[$channelID]
$cloneChannels[$channelID]
$onlyPerms[admin;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_71] $userTag Bunu Kullanmak İçin \`Yönetici\` İznin Olmalı**}{color:RANDOM}}]
`
  }