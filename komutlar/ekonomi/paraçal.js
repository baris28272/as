module.exports = {
name:"para-çal",
code:`
$color[1;RANDOM]
$author[1;$userTag;$authorAvatar]
$description[1;**$customEmoji[emoji99] <@$mentioned[1]> adlı kullanıcıyı soydun ve \`$getGlobalUserVar[para;$mentioned[1]]\` 💵 kazandın.**]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$getGlobalUserVar[para;$authorID]];$authorID]
$setGlobalUserVar[para;0;$mentioned[1]]
$argsCheck[>1;**$customEmoji[emoji_999] <@$authorID>, soyacağın kişiyi etiketlemelisin.**]
$onlyIf[$getGlobalUserVar[para;$mentioned[1]]>0;**$customEmoji[emoji_999] <@$authorID>, etiketlediğin kişi de para yok.**]  
$onlyIf[$getGlobalUserVar[pasif;$authorID]!=açık;**$customEmoji[emoji_999] <@$authorID>, etiketlediğin kişinin pasifi açık soyamazsın.** ] 
$onlyIf[$getGlobalUserVar[pasif;$authorID]!=açık;**$customEmoji[emoji_999] <@$authorID>, pasif modun açık ondan birini soyamazsın.** ] 
`
  }