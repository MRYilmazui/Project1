import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetNewsList, Headers} from '../Services/config';

export async function GetAnnouncementList (langid, currentpage) {
  let a = await axios.get(`${API}${GetNewsList}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
    },
    params: {
      'languageId': langid,
      'currentPage': currentpage,
      'count': '1'
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}