module.exports = {
  name: "destek",
  code: `
$dm[855747867074494544]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$userTag[$authorID] İsimli Kullanıcı \`$message[1]\` Sebebinden Destek İstedi.**]
$channelSendMessage[$channelID;**$customEmoji[emoji99]・<@$authorID> Destek Mesajınız Geliştiricime İletilmiştir En Yakın Zamanda Size Geri Dönüş Yapacaktır.**]
$argsCheck[1;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bir Mesaj Belirtmelisin.**}{color:RANDOM}}] 
$cooldown[10s;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
};

