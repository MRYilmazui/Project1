import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetMainPagePreview, Headers} from '../Services/config';

export async function GetMainPagePreviews (langid, previd) {
  let a = await axios.get(`${API}${GetMainPagePreview}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
    },
    params: {
      'languageId': langid,
      'previewId' : previd
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