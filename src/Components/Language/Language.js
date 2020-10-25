import React, {Component} from 'react';
import './Language.scss';

import { GetLanguageF } from '../../Actions/GetLanguage'

export default class Language extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GetLanguageState: null
    }
  }

  updateLang(e, id) {
    localStorage.lang = e;
    localStorage.langid = id;
    
    window.location.reload('/')
  }

  loadLanguage () {
    
  }
  
  componentDidMount = async() => {
    let GetLanguageUpdate = await GetLanguageF()
    this.setState({GetLanguageState : GetLanguageUpdate})

    if(localStorage.lang === undefined) {
      localStorage.lang = this.state.GetLanguageState[2].code
      localStorage.langid = this.state.GetLanguageState[2].id
    } else if (localStorage.lang === 'tr'){
      localStorage.lang = this.state.GetLanguageState[2].code
      localStorage.langid = this.state.GetLanguageState[2].id
    } else if (localStorage.lang === 'en'){
      localStorage.lang = this.state.GetLanguageState[1].code
      localStorage.langid = this.state.GetLanguageState[1].id
    }
  }
  render() {

    return (
      <div className="Language">
        <a href="javascript:void(0)" className={"tr" + (localStorage.lang === 'tr' ? 'tr active' : ' ')} onClick={() => this.updateLang('tr', localStorage.langid)}>TR</a>
        <a href="javascript:void(0)" className={"en" + (localStorage.lang === 'en' ? 'en active' : ' ')} onClick={() => this.updateLang('en', localStorage.langid)}>EN</a>
      </div>
    )
  }
}