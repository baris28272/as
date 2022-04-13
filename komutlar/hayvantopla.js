module.exports = {
name: "hayvan-topla",
code: `
$setGlobalUserVar[hayvan;$sum[$splitText[1];$random[2;3]]/$sum[$splitText[2];$random[2;7]]/$sum[$splitText[3];$random[2;6]]/$sum[$splitText[4];$random[2;5]]/$sum[$splitText[5];$random[1;5]]/$sum[$splitText[6];$random[1;6]]/$sum[$splitText[7];$random[1;4]]/$sum[$splitText[8];$random[0;4]]/$sum[$splitText[9];$random[0;3]]/$sum[$splitText[10];$get[u]];$authorID]
**:seedling: | $username Topladığın Hayvanlar :**
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[:bee:$random[2;8] :bug:$random[2;7] :lady_beetle:$random[2;6] :butterfly:$random[2;5] :sheep:$random[1;5] :chipmunk:$random[1;6] :rooster:$random[1;4] $replaceText[$replaceText[$checkCondition[$get[c]==0];true;];false;:crocodile:$get[c]] $replaceText[$replaceText[$checkCondition[$get[w]==0];true;];false;:whale:$get[w]] $replaceText[$replaceText[$checkCondition[$get[u]==0];true;];false;:unicorn:$get[u]];0;⁰];1;¹];2;²];3;³];4;⁴];5;⁵];6;⁶];7;⁷];8;⁸];9;⁹]
$let[c;$random[0;4]]
$let[w;$random[0;3]]
$let[u;$random[0;1]]
$wait[1s]
$textSplit[$getGlobalUserVar[hayvan;$authorID];/]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`
} 
