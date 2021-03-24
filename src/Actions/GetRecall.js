import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetRecall, Headers} from '../Services/config';

export async function GetRecalls (chassisNumber) {
  let a = await axios.get(`${API}${GetRecall}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
    },
    params: {
      'chassisNumber': chassisNumber,
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
    return null;
  })

  return a;
}