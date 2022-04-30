module.exports = {
  name: "türk-ölçer",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;🇹🇷・<@$authorID>  **__%$random[0;100]__** Türk]
$footer[1;$username Tarafından Kullanıldı;$userAvatar[$authorID]]
$addReactions[🇹🇷]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
};
