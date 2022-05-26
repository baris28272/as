module.exports = {
  name: "türk-ölçer",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$description[1;🇹🇷 $userTag[$mentioned[1;yes]]  **__%$random[0;100]__** Türk]
$footer[1;$username Tarafından Kullanıldı;$userAvatar[$mentioned[1;yes]]]
$addReactions[🇹🇷]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
};
