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

    window.location.pathname = '/'
  }

  loadLanguage () {
    
  }
  
  componentDidMount = async() => {

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