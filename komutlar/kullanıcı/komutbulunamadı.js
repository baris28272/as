module.exports = {
  name: "$alwaysExecute",
  description: "mesela olmayan bi komutu girince o komut bulunamadı diyo",
  code: `
$djsEval[
const isimler = new Set(client.cmd.default.map(x => x.name));
const takmaAdlar = new Set(client.cmd.default.map(x => x.aliases));
let dize = [...isimler, ...takmaAdlar].flat();
const userCommand = message.content.split(" ")[0].slice(client.prefix.length).trim();
if (!dize.includes(userCommand)) message.channel.send("\`" + userCommand + "\`" + " " + "diye bir komut bulunamadı!");
;no]
$onlyIf[$djsEval[message.content.startsWith(client.prefix);yes]==true;]
`
}; 
