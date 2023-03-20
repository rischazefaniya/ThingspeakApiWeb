// api url
const api_url = "https://api.thingspeak.com/channels/2071477/feeds.json?api_key=24ORHN7N9Y6G40T3&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("distance").innerHTML =  obj.field1+" cm";
      document.getElementById("xAngle").innerHTML = obj.field2+" rad";
    });
}, 1000);
