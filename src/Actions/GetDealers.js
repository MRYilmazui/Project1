import axios from 'axios';
import {API, GetDealerList, Headers} from '../Services/config';
import qs from 'qs';

export async function getDealers (language, cityId, postalCode, dealerId, cartype, cartype2, dealerType, dealerType2, dealerType3) {
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
      'dealerId': dealerId,
      'productGroup': [cartype, cartype2],
      'serviceType': [dealerType, dealerType2, dealerType3]
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  }
  ).then(response => {
    return response.data;
  })
  .catch(function (error) {
  })

  return a;
}