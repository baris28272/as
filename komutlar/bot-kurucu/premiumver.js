module.exports = {
name:"premium-ver",
code:`
$author[1;$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji99] \`$userTag[$mentioned[1]]\` Kişisine \`$userTag\` Tarafından Premium Verildi**]
$setGlobalUserVar[premium;Bulunuyor;$mentioned[1]]
$onlyIf[$getGlobalUserVar[premium;$mentioned[1]]=!Bulunuyor;{newEmbed:{author:$userTag:$author
`
  }