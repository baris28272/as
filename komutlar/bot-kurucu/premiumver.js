module.exports = [{

  name:"premium",

code:`

$sendMessage[{newEmbed:

{title:Premium}

{description:\`$usertag[$get[k]]\` İsimli kullanıcının premium süresi bitti! premium veren: <@$get[y]>}

{footer:$username[$clientid]}

{color:RED}

}

;no]

$setGlobalUserVar[premium;false;$get[k]]
$wait[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[s]; ;];saniye;s];dakika;m];saat;h];gün;d]]
$sendMessage[
{newEmbed:{title:Premium}{description:\`$usertag[$get[k]]\` İsimli kullanıcıya \`$get[s]\` premium verildi!}{footer:$username[$clientid]}{color:GREEN}};no]
$setGlobalUserVar[premium;true;$message[1]]
$let[y;$authorid]
$let[s;$messageSlice[1]]
$let[k;$message[1]]
$onlyIf[$checkContains[$messageSlice[1];saniye;dakika;saat;gün]!=false;Bir süre girin. \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`]
$suppressErrors[Bir ID ve bir Süre Belirt \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`]
$onlyIf[$messageSlice[1]!=;Bir süre girin. \`1 Saniye | 1 Dakika | 1 Saat | 1 gün\`]
$onlyIf[$getglobaluservar[premium;$message[1]]!=true;zaten kullanıcıda premium var]
$onlyIf[$isbot[$message[1]]!=true;Bir bota premium veremezsin.]
$onlyIf[$message[1]!=;Bir id girin]
$onlyforids[$botownerid;❌ Sahibim Değilsin]
`
},
{
name:"premium-bitir",
code:`
$setGlobalUserVar[premium;false;$get[k]]
$sendMessage[{newEmbed:{author:Premium}{description:\`$usertag[$get[k]]\` İsimli kullanıcının premium süresi bitti! premium veren: <@$get[y]>}{footer:$username[$clientid]}{color:RED}};no]
$let[y;$authorid]
$let[k;$message[1]]
$onlyIf[$getglobaluservar[premium;$message[1]]!=false;zaten kullanıcıda premium yok]
$onlyIf[$isbot[$message[1]]!=true;Bir botun premiumunu bitiremessin]
$onlyIf[$message[1]!=;Bir id girin]
$onlyforids[$botownerid;❌ Sahibim Değilsin]

`

}] 

