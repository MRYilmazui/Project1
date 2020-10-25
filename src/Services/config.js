export const API = 'https://tcorpapi.azure-api.net/contentservice';
export const SKey = 'e7dff51e117448e1a56e301912d70d83';
export const OCP = 'true';

/* EndPoints */
export const GetCities = '/api/UI/getCities';

export const GetLanguages = '/api/UI/GetLanguages';

export const GetMainPage = '/api/UI/GetMainPage';
export const GetMainPagePreview = '/api/UI/GetMainPagePreview';

export const GetGeneralContent = '/api/UI/GetGeneralContent';
export const GetGeneralContentPreview = '/api/UI/GetGeneralContentPreview';

export const GetCampaignList = '/api/UI/GetCampaignList';
export const GetCampaignDetail = '/api/UI/GetCampaignDetail';
export const GetCampaignDetailPreview = '/api/UI/GetCampaignDetailPreview';

export const GetFooterContent = '/api/UI/GetFooterContent';

export const GetNewsList = '/api/UI/GetNewsList';
export const GetNewsDetail = '/api/UI/GetNewsDetail';
export const GetNewsDetailPreview = '/api/UI/GetNewsDetailPreview';

export const GetSocialMedia = '/api/UI/GetSocialMedia';

export const GetPriceList = '/api/UI/GetPriceList';

export const GetDealerList = '/api/UI/GetDealerList';

export const GetSearchResult = '/api/UI/GetSearchResult';

export const GetRecall = '/api/UI/GetRecall';

export const Headers = {
    'Content-Ocp-Apim-Subscription-Key': SKey,
    'Ocp-Apim-Trace': OCP,
    'access-control-allow-origin':'*'
}