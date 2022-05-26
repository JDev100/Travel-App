import axios from 'axios'
// const axios = require("axios");

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {

};

// axios.request(options).then(function (response) {
//    console.log(response.data);
// }).catch(function (error) {
//    console.error(error);
// });

/** Retrieve on hotels given the latitude and longitude
 * of the top right and bottom left corners of screen 
 * using Travel Advisor API from rapidapi.com
*/
export const getPlacesData = async (sw, ne) => {
   try {
      const { data: { data } } = await axios.get(URL, {
         params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
         },
         headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': 'ee6075d51bmshb88a0327b172280p1bdaebjsna24e4ef23143'
         }
      });
      return data;
   } catch (error) {
      console.log();
   }
}