import axios from 'axios';
import {API, GetLanguages, Headers} from '../Services/config';
import $ from 'jquery'

export async function GetLanguageF (language) {
  let a = await axios.get(`${API}${GetLanguages}`,
  {
    headers : {
      'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials' : true, // Required for cookies, authorization headers with HTTPS
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true'
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}