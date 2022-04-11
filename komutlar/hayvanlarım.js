module.exports = {
name: "hayvanlarım",
code: `
:herb::seedling: :deciduous_tree: **$username'nin hayvanat bahçesi!** :deciduous_tree: :herb: :seedling: 
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[:regional_indicator_c:  :bee:$splitText[1]  :bug:$splitText[2]  :lady_beetle:$splitText[3]  :butterfly:$splitText[4]
:regional_indicator_r:  :sheep:$splitText[5]  :chipmunk:$splitText[6]  :rooster:$splitText[7]
:regional_indicator_e:  :crocodile:$splitText[8]  :whale:$splitText[9]
:regional_indicator_m:  :unicorn:$splitText[10];0;⁰];1;¹];2;²];3;³];4;⁴];5;⁵];6;⁶];7;⁷];8;⁸];9;⁹]
$textSplit[$getGlobalUserVar[hayvan;$authorID];/]
`
}