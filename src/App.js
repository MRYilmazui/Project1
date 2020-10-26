import React from 'react';
import { withRouter } from "react-router-dom";

import importedComponent from 'react-imported-component';
import { GetLanguageF } from './Actions/GetLanguage'

import Main from './Container/Main/Main';
import Loader from 'react-loader-spinner'
import languageJson from './language.json';


/* Styles */
import './App.scss';
import 'animate.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/* Modules */
const Header = importedComponent( () => import('./Components/Header/Header'));
const Footer = importedComponent( () => import('./Components/Footer/Footer'));

const lng = languageJson[localStorage.lang];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      LoaderDetails: false,
      GetLanguageState: null
    }
  }

  componentWillMount = async() => {
    let GetLanguageUpdate = await GetLanguageF()
    this.setState({GetLanguageState : GetLanguageUpdate})

    if(localStorage.lang === undefined) {
      localStorage.lang = GetLanguageUpdate[2].code
      localStorage.langid = GetLanguageUpdate[2].id
    } else if (localStorage.lang === 'tr'){
      localStorage.lang = this.state.GetLanguageState[2].code
      localStorage.langid = this.state.GetLanguageState[2].id
    } else if (localStorage.lang === 'en'){
      localStorage.lang = this.state.GetLanguageState[1].code
      localStorage.langid = this.state.GetLanguageState[1].id
    }

  }

  componentDidMount = async() => {
  }
  componentDidUpdate = (prevProps, prevState) => {
  }
  
  render()
  {
    return (
      <div className="App">
        { 
          this.state.GetLanguageState !== null
          ? 
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
          : ''
        }
      </div>
    );
  }
}

export default  withRouter(props => <App {...props} />);
