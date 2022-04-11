module.exports = {
name:"hackle",
code:`
$suppressErrors[1;Ummmmm Birini etiketlemeyecek misin?]
$onlyIf[$isBot[$mentioned[1]]==false;Botların birbirine savaş açması **Uluslararası Discord Bot Antlaşması** ile engelleniyor.]
$onlyIf[$mentioned[1]!=$authorID;Hacker... Kendini hackleyecek kadar çaresiz değilsin]
$title[1;Hack!]
$description[1;
<@$authorID>, <@$mentioned[1]> Kullanıcısını Hackledi! 😱] 
$image[1;https://media.discordapp.net/attachments/856207352779636748/856812849871847444/tenor.gif] 
$color[1;00ff22] 
`
} 

