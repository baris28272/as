module.exports = {
name:"şifre",
code:`
$dm[$authorID]
**$random[100000;999999] İşte Zor Şifreniz**
$color[1;F1372]
$onlyIf[$isUserDMEnabled[$authorID]!=false;**Dm gönderme başarısız, Lütfen DM'lerini aç**]

`
  }