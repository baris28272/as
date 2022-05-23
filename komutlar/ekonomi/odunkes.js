module.exports = {
  name: "odun-kes",
  aliases: "odun-kes",
  code: `
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;
**<@$authorID>,\`$random[1;50]\` Tane Odun Kestin Ve Bir Oduncu Sana Şu Parayı Verdi \`$random[100;2500]\` 💰 Kazandın**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[100;2500]];$authorID]
$cooldown[15s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`15 Saniye\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
