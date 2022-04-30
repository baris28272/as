module.exports = {
  name: "destek",
  code: `
$dm[855747867074494544]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$userTag[$authorID] İsimli Kullanıcı \`$message[1]\` Sebebinden Destek İstedi.**]
$channelSendMessage[$channelID;**$customEmoji[emoji_70]・<@$authorID> Destek Mesajınız Geliştiricime İletilmiştir En Yakın Zamanda Size Geri Dönüş Yapacaktır.**]
$argsCheck[1;**$customEmoji[emoji_71]・<@$authorID> Bir Mesaj Belirtmelisin.**] 
$cooldown[10s;**$customEmoji[emoji_71] <@$authorID> Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
  `,
};

