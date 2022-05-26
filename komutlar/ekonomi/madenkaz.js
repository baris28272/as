module.exports = {
  name: "maden-kaz",
  code: `
$color[1;RANDOM]
$author[1;$userTag;$userAvatar[$authorID]]
$description[1;
**<@$authorID>, madenden \`$random[10;20]\` elmas ve \`$random[15;30]\` altın buldun.**]
$setGlobalUserVar[elmas;$sum[$getGlobalUserVar[elmas;$authorID];$random[10;20]];$authorID]
$setGlobalUserVar[altın;$sum[$getGlobalUserVar[altın;$authorID];$random[15;30]];$authorID]
$cooldown[5m;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`5 Dakika\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 


`,
};
