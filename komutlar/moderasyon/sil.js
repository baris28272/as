module.exports = {
  name: "sil",
  code: `
$deleteIn[5s]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji99] <@$authorID> Başarıyla \`$message[1]\` Tane Mesaj Silindi**]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$authorID]]
$clear[$message[1]]
$onlyIf[$message[1]<101;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> 100'den Fazla Mesaj Silemiyorum Maalesef**}{color:RANDOM}}]
$onlyIf[$isNumber[$message[1]]==true;{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Girdiğin rakam bir sayı değil**}{color:RANDOM}}]
$onlyIf[$message[1]!=;**$customEmoji[emoji_71] | Kaç mesaj silmeliyim bunu tüm gün düşünücem**]
$onlyPerms[managemessages;**$customEmoji[emoji_71] | Bu Komutu Kullanman İçin \`Mesajları Yönet\` İznine Sahip Olman Gerek**]
$onlyBotPerms[managemessages; **$customEmoji[emoji_71] | Kullanman İçin Bana \`Mesajları Yönet İzni\` Vermelisin**]
$cooldown[10s;**$customEmoji[emoji_71] | <@$authorID> Yavaş Ol Kanka Bunu Kullanmak İçin 10 Saniye Beklemelisin**]
$suppressErrors[1;**$customEmoji[emoji_71] | Bi Miktar Girmelisin**]
$deletecommand
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
