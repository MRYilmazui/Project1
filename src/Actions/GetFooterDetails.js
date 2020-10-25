import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetFooterContent, Headers} from '../Services/config';

export async function GetFooterDetails (langid) {
  let a = await axios.get(`${API}${GetFooterContent}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
    },
    params: {
      'languageId': langid
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}