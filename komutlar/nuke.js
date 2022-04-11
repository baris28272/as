module.exports = {
  name: "nuke",
  aliases: "nuke",
  code: ` 
 $deleteChannels[$channelID]
 $cloneChannel[$channelID]
$onlyPerms[managemessages;Hey Görünüşe Göre Yetersiz Yetkin Var.]

$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
