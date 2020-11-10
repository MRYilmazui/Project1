import React, {Component} from 'react';

import Menu from '../../Components/Menu/Menu'
import Search from '../../Components/Search/Search'
import Language from '../../Components/Language/Language'
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div className="Header">

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