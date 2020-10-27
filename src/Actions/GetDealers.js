import axios from 'axios';
import {API, GetDealerList, Headers} from '../Services/config';

export async function getDealers (language, cityId, postalCode, dealerId) {

  let a = await axios.get(`${API}${GetDealerList}`,
  {
    headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Ocp-Apim-Subscription-Key': 'e7dff51e117448e1a56e301912d70d83',
      'Ocp-Apim-Trace': 'true'
    },
    params: {
      'languageId': language,
      'cityId': cityId,
      'postalCode': postalCode,
      'dealerId': dealerId
    }
  }
  ).then((response) => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}