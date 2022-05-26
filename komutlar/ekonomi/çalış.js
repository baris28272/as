module.exports = {
  name: "çalış",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]
$description[1;
**💸・\`$userTag[$authorID]\` Çalıştın Ve $random[500;3000] Para Kazandın.**
]
$cooldown[30s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`30 Saniye\` Beklemelisin.**] 
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[500;3000]];$authorID]
$footer[1;Bu Komutu,$username Tarafından Kullanıldı;$userAvatar[$authorID]] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`,
};
