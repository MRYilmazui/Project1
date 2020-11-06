import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetSocialMedia, Headers} from '../Services/config';

export async function GetSocialMedias (langid) {
  let a = await axios.get(`${API}${GetSocialMedia}`,
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
    return null;
  })

  return a;
}