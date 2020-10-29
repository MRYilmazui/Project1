import { GetLanguageF } from '../../Actions/GetLanguage'

export default async function getLanguage(param, pageName, pathname) {
  let GetLanguageUpdate = await GetLanguageF()

  if(localStorage.lang === undefined) {
    localStorage.lang = GetLanguageUpdate[2].code
    localStorage.langid = GetLanguageUpdate[2].id
  } else if (localStorage.lang === 'tr'){
    localStorage.lang = GetLanguageUpdate[2].code
    localStorage.langid = GetLanguageUpdate[2].id
  } else if (localStorage.lang === 'en'){
    localStorage.lang = GetLanguageUpdate[1].code
    localStorage.langid = GetLanguageUpdate[1].id
  }
}