module.exports = {
name: "cf",
$if: "v4",
code: `
$if[$message[1]!=$randomText[yazı;tura]]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[2];2]];$authorID]
$wait[1ms]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor $replaceText[$replaceText[$randomText[yazı;tura];yazı;:coin:];tura;:yellow_circle:] $replaceText[$replaceText[$checkContains[$randomText[yazı;tura];$message[1]];true;ve sen **$multi[$message[2];2]** TL kazandın.];false;vee hepsini kaybettin...];$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor :coin:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor :coin:;$channelID]
$wait[1s]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message[2]];$authorID]
$let[mesaj;$channelSendMessage[$channelID;
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu para dönüyor :yellow_circle:
;yes]]
$wait[1ms]
$onlyIf[$message[2]<50001;**$customEmoji[emoji_71] | 50.000'den Fazla Giremezsin**]
$onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];**$customEmoji[emoji_71] | Cüzdanında Bu Kadar Para Yok**]
$onlyIf[0<$message[2];**$customEmoji[emoji_71] | Girdiğin miktar 0 ve üstü olmalı**]
$onlyIf[$isNumber[$message[2]]!=false;**$customEmoji[emoji_71] | Miktar sadece **sayı olmalıdır**]
$onlyIf[$checkCondition[$message[1]==yazı]$checkCondition[$message[1]==tura]!=falsefalse;**$customEmoji[emoji_71] | ?cf *yazı/tura* seçmelisiniz**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
$cooldown[10s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`10 Saniye\` Beklemelisin.**] 
`
}
