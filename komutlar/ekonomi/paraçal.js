module.exports = {
name:"para-çal",
code:`
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$mentioned[1]> adlı kullanıcıyı soydun ve \`$getGlobalUserVar[para;$mentioned[1]]\` 💵 kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobaVar[para;$mentioned[1]];$getVar[para;$authorID]];$authorID]
$setVar[para;0;$mentioned[1]]
$argsCheck[>1; <@$authorID>, soyacağın kişiyi etiketlemelisin.]
$onlyIf[$getVar[para;$mentioned[1]]>0; <@$authorID>, etiketlediğin kişi de para yok.]  

`
  }