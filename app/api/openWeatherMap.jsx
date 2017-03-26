// var axios = require('axios');
//
// const OPEN_WEATHER _MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=995e211d4a066124029874b48da95466&units=metric';
//
// //995e211d4a066124029874b48da95466
//
// module.exports = {
//   getTemp: function(location){
//     var encodedLocation = encodeURIComponent(location);
//     var requestUrl=`${OPEN_WEATHER _MAP_URL}&q=${encodedLocation}`;
//
//     return axios.get(requestUrl).then(function(res){
//       if(res.data.cod && res.data.message){
//         throw new Error(res.data.message);
//       }
//       else{
//         return res.data.main.temp;
//       }
//     }, function(res){
//       throw new Error(res.data.message);
//     });
//   }
// }


var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=995e211d4a066124029874b48da95466&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
