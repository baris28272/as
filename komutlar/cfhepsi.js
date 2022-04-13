module.exports = {
name: "cf hepsi",
code: `
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$replaceText[$replaceText[$checkCondition[$randomText[yazı;tura]==$message[1]];true;$multi[$get[para1];2]];false;0]];$authorID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor $replaceText[$replaceText[$randomText[yazı;tura];yazı;:coin:];tura;:yellow_circle:] $replaceText[$replaceText[$checkContains[$randomText[yazı;tura];$message[1]];true;ve sen **$multi[$get[para1];2]** kazandın. ];false;vee hepsini kaybettin...];$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor :coin:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor :yellow_circle:;$channelID]
$wait[1s]
$editMessage[$get[mesaj];
**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor :coin:;$channelID]
$wait[1s]
$let[mesaj;$channelSendMessage[$channelID;
**$userTag** **$message[1]** için **$get[para1]** TL bahis koydu.
Para dönüyor :yellow_circle:
;yes]]
$setGlobalUserVar[para;$replaceText[$replaceText[$checkCondition[$get[para]>=50000];true;$sub[$get[para];50000]];false;0];$authorID]
$let[para1;$replaceText[$replaceText[$checkCondition[$get[para]>=50000];true;50000];false;$get[para]]]
$wait[1ms]
$let[para;$getGlobalUserVar[para;$authorID]]
$wait[1ms]
$onlyIf[$getGlobalUserVar[para;$authorID]>=0;**$customEmoji[emoji_71] | Hiç paran yok ki**]
$onlyIf[$checkCondition[$message[1]==yazı]$checkCondition[$message[1]==tura]!=falsefalse;**$customEmoji[emoji_71] | ?cf hepsi yazı/tura seçmelisiniz**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`
}