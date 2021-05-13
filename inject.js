document.getElementById("install").onclick = function () {
  document.getElementById("status").innerHTML = "Injecting!";
  var fs = require("fs");
  var branch = document.getElementById("channel").value;
  var mod = document.getElementById("mod").value.toLowerCase();
  console.log(branch);
  var basepath =
    process.env.APPDATA ||
    (process.platform == "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : process.env.HOME + "/.local/share");
  var path = basepath + `\\${branch}`;
  var url = "https://updates.goosemod.com";
  console.log(`${path}\\settings.json`);
  fs.readFile(`${path}\\settings.json`, function (err, data) {
    console.log(data);
    var json = JSON.parse(data); //https://github.com/Goose-Nest/GooseUpdate/blob/main/src/apiV1/dashboard/template.html
    json["UPDATE_ENDPOINT"] = `${url}/${mod}`;
    json["NEW_UPDATE_ENDPOINT"] = `${url}/${mod}/`;

    fs.writeFileSync(`${path}\\settings.json`, JSON.stringify(json));
    document.getElementById("status").innerHTML = "Injected!";
  });
};
document.getElementById("uninstall").onclick = function () {
  document.getElementById("status").innerHTML = "Uninstalling!";
  var fs = require("fs");
  var branch = document.getElementById("channel").value;
  console.log(branch);
  var basepath =
    process.env.APPDATA ||
    (process.platform == "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : process.env.HOME + "/.local/share");
  var path = basepath + `\\${branch}`;
  console.log(`${path}\\settings.json`);
  fs.readFile(`${path}\\settings.json`, function (err, data) {
    console.log(data);
    var json = JSON.parse(data); //https://github.com/Goose-Nest/GooseUpdate/blob/main/src/apiV1/dashboard/template.html
    json["UPDATE_ENDPOINT"] = null;
    json["NEW_UPDATE_ENDPOINT"] = null;
    
    fs.writeFileSync(`${path}\\settings.json`, JSON.stringify(json));
    document.getElementById("status").innerHTML = "Uninstalled!";
  });
};