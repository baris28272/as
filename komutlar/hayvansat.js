module.exports = {
name: "hayvan-sat",
code: `
$setGlobalUserVar[hayvan;0/0/0/0/0/0/0/0/0/0;$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$get[fiyat]];$authorID]
$wait[1ms]
:knife: **| $username $get[fiyat]** fiyatına :regional_indicator_c:x$get[toplamc] :regional_indicator_r:x$get[toplamr] :regional_indicator_e:x$get[toplame] :regional_indicator_m:x$get[toplamm] sattın.
$let[toplamm;$splitText[10]]
$let[toplame;$sum[$splitText[9];$splitText[8]]]
$let[toplamr;$sum[$splitText[5];$splitText[6];$splitText[7]]]
$let[toplamc;$sum[$splitText[1];$splitText[2];$splitText[3];$splitText[4]]]
$let[fiyat;$sum[$sum[$splitText[1];$splitText[2];$splitText[3];$splitText[4]];$multi[$sum[$splitText[5];$splitText[6];$splitText[7]];2];$multi[$sum[$splitText[9];$splitText[8]];4];$multi[$splitText[10];6]]]
$onlyIf[$getGlobalUserVar[hayvan;$authorID]!=0/0/0/0/0/0/0/0/0/0;:no_entry_sign: **| $username**, Hiç hayvanın yok >:c]
$textSplit[$getGlobalUserVar[hayvan;$authorID];/]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`
}
