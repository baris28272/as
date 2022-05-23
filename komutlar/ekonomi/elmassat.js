module.exports = {
  name: "elmas-sat",
  code: `
  $setGlobalUserVar[para;$sum[$getGlobalUserVar[para];$multi[$message;2000]];$authorID]
  $setGlobalUserVar[elmas;$sub[$getGlobalUserVar[elmas];$message];$authorID]
  $author[1;$userTag;$authorAvatar]
  $description[1;
**$customEmoji[emoji_70] | $message adet elmas satıldı. Parana $numberSeparator[$multi[$message;2000];,] tl eklendi.**]
  $footer[1;Komutu kullanan: $username[$authorID]]
  $onlyIf[$getGlobalUserVar[elmas]>=$message;**$customEmoji[emoji_70] | $username Yeterli miktarda altınınız yok $message adet elmas sahip olmalısınız.**]
  $suppressErrors[1;**$customEmoji[emoji_71] | $username Lütfen bir sayı giriniz.**]
  $color[1;RANDOM]
$onlyIf[$noMentionMessage>=0;**$customEmoji[emoji_71] | $username Sayıyı düzgün yaz.**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
};
