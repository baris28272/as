module.exports = {
  name: "ban",
  code: `
$ban[$message[1];$guildID;0;$message[2]]
$author[1;$userTag[$message[1]];$userAvatar[$message[1]]]
$description[1;$customEmoji[emoji99] \`$userTag[$message[1]]\` İsimli Kullanıcı \`$message[2]\` Sebebi İle Banlandı ^^]
$color[1;RANDOM]
$onlyIf[$highestRole[$message[1]]!=$highestRole[$authorID];{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] Aynı En Yüksek Role Sahip Birini Yasaklayamazsınız**}{color:RANDOM}}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];{newEmbed:{author:$userTag:$authorAvatar}{description:*$customEmoji[emoji_999] Senden Daha Yüksek Bir Role Sahip Birini Yasaklayamazsın**}{color:RANDOM}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$message[1]]];{newEmbed:{author:$userTag:$authorAvatar}{description:**$customEmoji[emoji_999] Benden Daha Yüksek Rolü Olan Birini Banlayamam**}{color:RANDOM}}] 
$onlyIf[$highestRole[$message[1]]!=$highestRole[$clientID];{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Benimle Aynı Yüksek Role Sahip Birini Yasaklayamam**}{color:RANDOM}}]
$onlyIf[$message[1]!=$ownerID;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Sunucu Sahibini Yasaklayamazsınız**}{color:RANDOM}}]
$onlyIf[$message[1]!=$authorID;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] \`$userTag[$authorID]\` Birini Etiketlemelisin**}{color:RANDOM}}] 
$onlyIf[$message[1]!=$clientID;:{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Kendimi Yasaklayamam**}{color:RANDOM}}]
$onlyIf[$hasPerms[$guildID;$authorID;ban]==true;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] Bu Komutu Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı**}{color:RANDOM}}] 
$onlyBotPerms[ban;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Kullanmak İçin Bana \`Üyeleri Banla\` Yetkisi Vermelisin ^^**}{color:RANDOM}}]
$suppressErrors[1;{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bütün Gün Kimi Banlayacağımı Düşünücem ^^**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
`
};
