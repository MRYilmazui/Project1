import axios from 'axios';
import {API, GetCities, Headers} from '../Services/config';

export async function getCities (language) {
  let a = await axios.get(`${API}${GetCities}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true'
    }
  }
  ).then(response => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}