const os = require("os");
function inject(){
    var fs = require("fs");
    var branch = document.getElementById("channel").value;
    var mod = document.getElementById("mod").value.toLowerCase();
    console.log(branch)
    var basepath = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
    var path = basepath+'\\discord'
    var url = "https://updates.goosemod.com";
    console.log(`${path}\\settings.json`);
    fs.readFile(`${path}\\settings.json`, function (err, data) {
      console.log(data)
      var json = JSON.parse(data); //https://github.com/Goose-Nest/GooseUpdate/blob/main/src/apiV1/dashboard/template.html
      json["UPDATE_ENDPOINT"] = `${url}/${mod}`;
      json["NEW_UPDATE_ENDPOINT"] = `${url}/${mod}/`;

      fs.writeFileSync(`${path}\\settings.json`, JSON.stringify(json));
    });
}
module.exports = inject();