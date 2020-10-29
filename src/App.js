import React from 'react';
import { withRouter } from "react-router-dom";

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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      LoaderDetails: false,
      GetLanguageState: null,
      updatePage: null
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
  }

  componentDidMount = async() => {
  }
  componentDidUpdate = (prevProps, prevState) => {
  }
  
  render()
  {
    getLanguage()

    return (
      <div className="App">
        <div>
          <Header />
          <Main/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default  withRouter(props => <App {...props} />);
