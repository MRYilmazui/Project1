import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import Menu from '../../Components/Menu/Menu'
import Search from '../../Components/Search/Search'
import Language from '../../Components/Language/Language'
import { GetSiteScripts } from '../../Actions/GetSiteScript'
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      siteScript: null
    }
  }
      
  componentDidMount = async() => {
    let siteScript = await GetSiteScripts()
  
    this.setState({siteScript : siteScript})

    window.onscroll = function() {
      myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <div className="Header" id="myHeader">
        <Helmet>
          <script>
            { this.state.siteScript !== null
              ?
                this.state.siteScript.headers[0]
              :
                ''
            }
          </script>

          <script src=
            { this.state.siteScript !== null
              ?
                this.state.siteScript.headerLibraries[0]
              :
                ''
            }
          ></script>
        </Helmet>
        <div className="logo-section">
          <div className="container">
            <a href="/" className="mercedes-logo"></a>
            <a href="/"  className="mercedes-turk"></a>
          </div>
        </div>
        

        <div className="Menu">
          <div className="container">
            <Menu />
            <Language />
            <Search />
          </div>
        </div>
      </div>
    )
  }
}