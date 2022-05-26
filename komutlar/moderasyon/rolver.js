module.exports = {
  name: "rol-ver",
  code: `
$giveRole[$guildID;$mentioned[1];$mentionedRoles[1]]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$description[1;
**$customEmoji[emoji99] \`$userTag[$authorID]\` Başarıyla \`$userTag[$mentioned[1]]\` Kişisine <@&$mentionedRoles[1]> Rolünü Verdim**
]
$onlyPerms[manageroles;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] | Bu Komutu Kullanmak İçin \`Rolleri Yönet\` İznin Olmalı**}{color:RANDOM}}]
$suppressErrors
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
}