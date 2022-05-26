module.exports = {
  name: "balık-tut",
  aliases: "balık-tut",
  code: `
$color[1;RANDOM]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[120;210]];$authorID]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$customEmoji[emoji_70] | \`$userTag\` 🐬 Balık tuttun ve $random[120;210] 💵 kazandın.**]
$footer[1;Bu Komut $userTag Tarafından Kullanıldı;$userAvatar[$authorID]]
$cooldown[10s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 


`,
};
