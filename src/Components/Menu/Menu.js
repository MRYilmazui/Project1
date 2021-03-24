import React, {Component} from 'react';
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import { MovieConsumer, MovieProvider } from '../../Context/Context'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import getLanguage from '../getLanguage/getLanguage'

import './Menu.scss';
import language from '../../newLanguage.json';

const lang = language[localStorage.lang];

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: '',
      Categories: null,
      Loader: false
    }
  }

  componentDidMount = async() => {

  }
  triggerNavigation() {
    if(this.state.displayMenu == '' ){
      this.setState({displayMenu: ' d-block'})
    } else {
      this.setState({displayMenu: ''})
    }
  }
  imageRepeater () {
    const NewsSlider = [];

    if (this.state.content.galleries.length !== 0) {
      for (let i = 0; i < this.state.content.galleries.length; i++) {
        NewsSlider.push(
          <div className="slide">
            <div>
              <img src={this.state.content.galleries[i].imageUrl} alt=""/>
            </div>
          </div>
        )
      }
    } else {
      NewsSlider.push(
        <div className="slide">
          <div>
            <img src={this.state.content.imageUrl} alt=""/>
          </div>
        </div>
      )
    }


    return NewsSlider;
  }


  menuSubSubBuild (param) {
    const subMenu = []

    for (let i = 0; i < param.length; i++) {
      if(param[i].sub !== null) {

        subMenu.push(
          <div>
            <NavLink activeClassName="active" to={param[i].link}>{param[i].name}</NavLink>

            <div className="dropdown-list">
              {this.menuSubSubSubBuild(param[i].sub)}
            </div>
          </div>
        )

      } else {
        subMenu.push(
          <NavLink activeClassName="active" to={param[i].link}>{param[i].name}</NavLink>
        )
      }
      
    }

    return subMenu;
  }

  
  menuSubSubSubBuild (param) {
    const subMenu = []

    for (let i = 0; i < param.length; i++) {

        subMenu.push(
          <NavLink activeClassName="active" key={i}  to={param[i].link}>{param[i].name}</NavLink>
        )
      
    }

    return subMenu;
  }

  menuSubBuild (param) {
    const subMenu = []

    for (let i = 0; i < param.length; i++) {
      if(param[i].sub !== null) {

        subMenu.push(
          <div>
            <NavLink activeClassName="active" exact key={i}  to={param[i].link}>{param[i].name}</NavLink>

            <div className="dropdown-list">
              {this.menuSubSubBuild(param[i].sub)}
            </div>
          </div>
        )

      } else {
        subMenu.push(
          <NavLink activeClassName="active" exact to={param[i].link}>{param[i].name}</NavLink>
        )
      }
      
    }

    return subMenu;
  }

  menuBuildFunction (e) {
    const menuConst = [];

    for (let i = 0; i < lang.length-1; i++) {
      if(lang[i].link === '/'){
        menuConst.push(
          <NavLink activeClassName="active" exact to={lang[i].link}>{lang[i].name}</NavLink>
        )
      } else {

        if(lang[i].sub !== null) {
          menuConst.push(
            <div className="dropdown-item-list">
              <NavLink activeClassName="active" key={i}  to={lang[i].link}>{lang[i].name}</NavLink>
    
              <div className="dropdown-list">
                {this.menuSubBuild(lang[i].sub)}
      
              </div>
            </div>
          )
        } else {
          menuConst.push(
            <NavLink activeClassName="active" to={lang[i].link}>{lang[i].name}</NavLink>
          )
        }
      }
      
    }

    return menuConst;
  }

  render() {

    return (
      <div className="Menu">
        <button className="menuNavButton" onClick={()=>this.triggerNavigation()}></button>
        <nav className={this.state.displayMenu}>

          {
            this.menuBuildFunction()
          }

        </nav>
      </div>
    )
  }
}

