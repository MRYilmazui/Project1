import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetMainPage, Headers} from '../Services/config';

export async function GetMainPageF (langid) {
  let a = await axios.get(`${API}${GetMainPage}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
      'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials' : true // Required for cookies, authorization headers with HTTPS
    },
    params: {
      'languageId': langid
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
    return null
  })

  return a;
}