module.exports = {
name: "cf",
$if: "v4",
code: `
$if[$message[1]!=$randomText[yazı;tura]]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[2];2]];$authorID]
$endif
$wait[1ms]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor $replaceText[$replaceText[$randomText[yazı;tura];yazı;:coin:];tura;:yellow_circle:] $replaceText[$replaceText[$checkContains[$randomText[yazı;tura];$message[1]];true;ve sen **$multi[$message[2];2]** kazandın.];false;vee hepsini kaybettin...];$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor :coin:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor :coin:;$channelID]
$wait[1s]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$message[2]];$authorID]
$let[mesaj;$channelSendMessage[$channelID;
**$userTag** **$message[1]** için **$message[2]** TL bahis koydu.
Para dönüyor :yellow_circle:
;yes]]
$wait[1ms]
$onlyIf[$message[2]=<50001;**$customEmoji[emoji_71] | 50,000 üzerinde oynamana izin veremem**]
$onlyIf[$getGlobalUserVar[para;$authorID]>=$message[2];**$customEmoji[emoji_71] | Maalesef oynadığın miktarda paran bulunmuyor**]
$onlyIf[0<$message[2];**$customEmoji[emoji_71] | Girdiğin miktar 0 ve altı olmamalı**]
$onlyIf[$isNumber[$message[2]]!=false;**$customEmoji[emoji_71] | Miktar sadece **sayı olmalıdır**]
$onlyIf[$checkCondition[$message[1]==yazı]$checkCondition[$message[1]==tura]!=falsefalse;**$customEmoji[emoji_71] | ?cf *yazı/tura* seçmelisiniz**]
`
}
