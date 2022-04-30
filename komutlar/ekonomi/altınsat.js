module.exports = {
  name: "altın-sat",
  code: `
  $setGlobalUserVar[para;$sum[$getGlobalUserVar[para];$multi[$message;2000]];$authorID]
  $setGlobalUserVar[altın;$sub[$getGlobalUserVar[altın];$message];$authorID]
  $description[1;
**<:emoji_70:917309183341236244> | $message adet altın satıldı. Parana $numberSeparator[$multi[$message;2000];,] tl eklendi.**]
  $footer[1;Komutu kullanan: $username[$authorID]]
  $onlyIf[$getGlobalUserVar[altın]>=$message;**<:emoji_71:917309220687314966> | $username Yeterli miktarda altınınız yok! $message adet altına sahip olmalısınız.**]
  $suppressErrors[1;**<:emoji_71:917309220687314966> | $username Lütfen bir sayı giriniz.**]
  $color[1;RANDOM]
$onlyIf[$noMentionMessage>=0;**<:emoji_71:917309220687314966> | $username Sayıyı düzgün yaz.**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

  `,
};
