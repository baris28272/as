module.exports = [{
  name: "test",
  aliases: "yardim",
  description: "Yardım Menüsünü Görüntüleyin",
  code: `
$author[1;$username[$clientID] Yardım Menüsü;$userAvatar[$clientID]]
$thumbnail[1;$authorAvatar]
$description[1;
📘 Moderasyon \[10\]
📗 Sistem \[0\]
📙 Kayıt \[5\]
📕 Eğlence \[3\]
📔 Genel \[2\]
]
$color[1;FFFF00]
$addTimeStamp[1]
$footer[1;$username Kullandı]
$addSelectMenu[1;menu_$authorID;📚 Kategoriler;1;1;no;Moderasyon:Moderasyon Komutları:moderasyon:no:📘;Sistem:Sistem Komutları:sistem:no:📗;Kayıt:Kayıt Komutları:kayit:no:📙;Eğlence:Eğlence Komutları:eglence:no:📕;Genel:Genel Komutlar:genel:no:📔;Bağlantılar::baglanti:no::s_link:]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[;{newEmbed:
{author:Moderasyon Komutları:$userAvatar[$clientID]}
{thumbnail:$authorAvatar}
{description:Ön Ek: **s**
**yasakla @kişi <sebep>**: Bir üyeyi sunucudan yasaklayabilirsin.
**at @kişi <sebep>**: Bir üyeyi sunucudan atabilirsin.
**sustur @kişi <süre>**: Bir üyeye zaman aşımı uygulayın. \[****BAKIM****\]
**rol-ver @kişi @rol**: Bir üyeye rol verin.
**rol-al @kişi @rol**: Bir üyeden rol kaldırın.
**sil <mesajsayısı>**: Belirli miktarda mesaj silersin.
**patlat/nuke**: Bot, kanalı silip klonunu oluşturur. Yani kanaldaki tüm mesajları siler.
**kilit**: $roleName[$roleID[$guildID]] Rolü kanala yazamaz. Kanal kilitlenir.
**kilit-aç**: Kanal kilidini açın.
**yavaş-mod <süre>**: Kanalda yavaş modu ayarlayın.}
{timestamp}
{footer:$username Kullandı}
{color:BLUE};{actionRow:{selectMenu:menu_$authorID:Kategoriler:1:1:no:{selectMenuOptions:Moderasyon:moderasyon:Moderasyon Komutları:yes:📘}
{selectMenuOptions:Sistem:sistem:Sistem Komutları:no:📗}
{selectMenuOptions:Kayıt:kayit:Kayıt Komutları:no:📙}
{selectMenuOptions:Eğlence:eglence:Eğlence Komutları:no:📕}
{selectMenuOptions:Genel:genel:Genel Komutlar:no:📔}
{selectMenuOptions:Bağlantılar:baglanti::no::s_link:}}}]
$onlyIf[$interactionData[values[0]]==moderasyon;]
$onlyif[$advancedtextsplit[$interactiondata[customId];_;2]==$authorid;{"content": ":f_ret: Menü senin olmadığı için kullanmazsın. **f.yardım**", "ephemeral": true, "options": {"interaction": true}}]
$onlyif[$advancedtextsplit[$interactiondata[customId];_;1]==menu;]  
`
}]; 
