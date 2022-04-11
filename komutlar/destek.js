module.exports = {
  name: "destek",
  code: `
$dm[728155399655784488]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**$userTag[$authorID] İsimli Kullanıcı \`$message[1]\` Sebebinden Destek İstedi.**]
$channelSendMessage[$channelID;**$customEmoji[emoji_70]・<@$authorID> Destek Mesajınız Geliştiricime İletilmiştir En Yakın Zamanda Size Geri Dönüş Yapacaktır.**]
$argsCheck[1;**$customEmoji[emoji_71]・<@$authorID> Bir Mesaj Belirtmelisin.**] 
  `,
};
