module.exports = {
  name: "hgbb-sıfırla",
  aliases: "hgbb-sıfırla",
  code: `
$color[1;$random[0;99999]]
$description[1;
$customEmoji[emoji_70] ・ Gelen Giden Sistemi Başarıyla Sıfırlandı.]
$onlyPerms[managechannels; <@$authorID>, bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın.]
$resetServerVar[hgbb]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz. ] 

`,
};
