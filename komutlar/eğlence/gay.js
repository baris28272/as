module.exports = {
  name: "gay",
  code: `
$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$color[1;RANDOM]
$description[1;
**$userTag[$mentioned[1;yes]] Sen \`%$random[1;100]\` Gay'sin**
]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
