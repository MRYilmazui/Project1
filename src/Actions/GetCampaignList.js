import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import {API, GetCampaignList, Headers} from '../Services/config';

export async function GetCampaignLists (langid, type) {
  let a = await axios.get(`${API}${GetCampaignList}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true',
    },
    params: {
      'languageId': langid,
      'pageRouteValue': type,
      'currentPage': '1',
      'count': '100'
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}