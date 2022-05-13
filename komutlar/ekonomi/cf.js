module.exports = [{ 
  name:"coinflip", 
  aliases:["coin-flip","cf"],
  code:` $if[$randomText[lose;win;lose]==win;{execute:win};{execute:lose}]
  $onlyIf[$message[1]<=150000;**$customEmoji[emoji_999] <@$authorID>, 150.000'den fazla giremezsin.*(]
  $onlyIf[$getGlobalUserVar[para]>=$message[1];**$customEmoji[emoji_999] <@$authorID>, Cüzdanında bu kadar para yok.**] 
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Miktar gir.] 
  ` },
      { name:"win",
       type:"awaited",
       code:` $editIn[3s;**<a:paraa:974703809995628636> <@$authorID>, \`$math[$message[1]*2]₺\` kazandın.**] 
       $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+$message[1]]] 
       **<a:paraa:974703809995628636> <@$authorID>, \`$message[1]₺\` yatırdın ve...**
` },{ 
  name:"lose",
  type:"awaited", 
  code:` $editIn[3s;**<a:paraa:974703809995628636> <@$authorID>, \`$message[1]₺\` kaybettin.]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-$message[1]]] 
  **<a:paraa:974703809995628636> <@$authorID>, \`$message[1]₺\` yatırdın ve... 
  ` }]