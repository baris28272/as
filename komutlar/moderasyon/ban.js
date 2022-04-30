module.exports = {
  name: "ban",
  code: `
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$ban[$mentioned[1];$guildID;1;$noMentionMessage]
$description[1;$customEmoji[emoji99] \`$userTag[$mentioned[1]]\` İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı ^^]
$color[1;RANDOM]
$onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] Aynı En Yüksek Role Sahip Birini Yasaklayamazsınız**}{color:RANDOM}}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{author:$userTag:$authorAvatar}{description:*$customEmoji[emoji_999] Senden Daha Yüksek Bir Role Sahip Birini Yasaklayamazsın**}{color:RANDOM}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] Benden Daha Yüksek Rolü Olan Birini Banlayamam**}{color:RANDOM}}] 
$onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Benimle Aynı Yüksek Role Sahip Birini Yasaklayamam**}{color:RANDOM}}]
$onlyIf[$mentioned[1]!=$ownerID;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Sunucu Sahibini Yasaklayamazsınız**}{color:RANDOM}}]
$onlyIf[$mentioned[1]!=$authorID;**$customEmoji[emoji_71] | \`$userTag[$authorID]\` Birini Etiketlemelisin**] 
$onlyIf[$mentioned[1]!=$clientID;:**$customEmoji[emoji_71] | Kendimi Yasaklayamam**]
$onlyIf[$hasPerms[$guildID;$authorID;ban]==true;**$customEmoji[emoji_71] | Bu Komutu Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı**] 
$onlyBotPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin Bana \`Üyeleri Banla\` Yetkisi Vermelisin ^^]
$suppressErrors[1;**<:emoji_71:917309220687314966> | Bütün Gün Kimi Banlayacağımı Düşünücem ^^**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 


`
};
