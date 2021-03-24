import React from 'react';
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet'

import importedComponent from 'react-imported-component';

import Main from './Container/Main/Main';
import Loader from 'react-loader-spinner'
import languageJson from './language.json';
import getLanguage from './Components/getLanguage/getLanguage'

/* Styles */
import './App.scss';
import 'animate.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/* Modules */
const Header = importedComponent( () => import('./Components/Header/Header'));
const Footer = importedComponent( () => import('./Components/Footer/Footer'));
getLanguage();

const lng = languageJson[localStorage.lang];
let updatePage = false;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      LoaderDetails: false,
      GetLanguageState: null,
      updatePage: false
    }
  }
  pathControl() {
    const element = document.getElementsByTagName('body')[0]
    
    if (this.props.location.pathname == '/'+lng.mainurl.title[5]) {
      element.classList.add('Map')
    } else {
      element.classList.remove('Map')
    }
  }

  componentWillMount = async() => {
    if(localStorage.lang === undefined){
      localStorage.lang = 'tr'
      localStorage.langid = "20dd5d1f-3c87-48a5-8ff5-bcefb810bcc2"
    }
  }

  componentDidMount = async() => {
  }

  componentWillUpdate = (prevProps, prevState) => {
  }
  componentDidUpdate = (prevProps, prevState) => {
  }
  
  render()
  {
    getLanguage()

    return (
      <div className="App">
        <Helmet>
          <meta name="facebook-domain-verification" content="2y33dajq47ot2oix5i7n519j23slo8" />
        </Helmet>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
        {
          updatePage === true ?
            <Loader />
          :
            ''
        }
      </div>
    );
  }
}

export default  withRouter(props => <App {...props} />);
