module.exports = {
      name:"abone-istatistik",
      code:`$author[1;$userTag;$authorAvatar]
      $description[1;<@$authorID>** , \`$getGlobalUserVar[abonesayisi]\` Kişiye Abone Rolü Vermişsin.** ]
   $footer[1;$username Kullandı;$userAvatar[$authorID]]
   $color[1;RANDOM]
   $onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
   ` } 
