import React from 'react';
import { withRouter } from "react-router-dom";

import importedComponent from 'react-imported-component';

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
      LoaderDetails: false
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

  componentDidMount = () => {
    this.pathControl()
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.pathControl()
  }
  
  render()
  {

    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default  withRouter(props => <App {...props} />);
