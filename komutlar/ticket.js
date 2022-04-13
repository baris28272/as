module.exports = {
    name: "ticket",
    $if: "v4",
    code: `
$if[$message==]
$description[1;<:dwarny_darklon:930209322204541009> <@$authorID> **Komutu Eksik Kullandın!** \`gönder / sıfırla\`]
$color[1;ff0000]
$endif
$if[$noMentionMessage==gönder]
$useChannel[$mentionedChannels[1]]
$author[1;Ticket Oluştur;$serverIcon]
$description[1;Merhaba Sayın Kullanıcı, Destek Talebi Oluşturmak İçin Aşşağıdaki Butona Tıkla.]
$addTimestamp[1]
$color[1;GREEN]
$addbutton[1;Ticket Aç;primary;DarkLonTicketAç;no;📨]
$channelSendMessage[$channelID;{newEmbed:{description::m_approved2: **Ticket Sistemi Başarı İle <@$authorID> Tarafından Kuruldu!**}{color:5964f1}}]
$onlyIf[$mentionedChannels[1]!=$channelID;{newEmbed:{description:<:dwrong_darklon:930209322590416946> <@$authorID> **Lütfen Bir Kanal Etiketleyiniz.** \n **Bu Komutu Ticket'in Açılacağı Kanalda Kullanamazsın, Eğer Bu Kanalı Kullanacaksanız Lütfen Farklı Bir Kanaldan Burayı Etiketleyiniz.**}{color:ff0000}{timestamp}}]
$endif
    `} 
