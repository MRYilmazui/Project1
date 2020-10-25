import React, {Component} from 'react';
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import { MovieConsumer, MovieProvider } from '../../Context/Context'
import { DropdownButton, Dropdown } from 'react-bootstrap';

import './Menu.scss';
import languageJson from '../../language.json';

const lng = languageJson[localStorage.lang];


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
  menuBuild (e, type, title) {
    const m = [];
    const splitURL = e.upperside.split('/')

    if(title === 'Kurumsal' || title === 'Corporate'){
      for (let i = 0; i < e.title.length; i++) {

        m.push(
          <NavLink activeClassName="active" to={"/"+title+"/"+splitURL[splitURL.length-1].slice(1)+"/"+e.value[i]}>{e.title[i]}</NavLink>
        )
      }
    } else if(title === 'Ürünlerimiz' || title === 'Products'){
        for (let i = 0; i < e.title.length; i++) {

        m.push(
          <NavLink activeClassName="active" to={"/"+title+"/"+splitURL[splitURL.length-1].slice(1)+"/"+e.value[i]}>{e.title[i]}</NavLink>
        )
      }
    } else {

      if(title === "Kampanyalar") {
        for (let i = 0; i < e.title.length; i++) {
  
          m.push(
            <NavLink activeClassName="active" to={"/"+splitURL[splitURL.length-1].slice(1)+"/"+e.value[i]}>{e.title[i]}</NavLink>
          )
        }
      } else {
  
        for (let i = 0; i < e.title.length; i++) {
  
          m.push(
            <NavLink activeClassName="active" to={"/"+lng.mainurl.title[4]+"/"+e.value[i]}>{e.title[i]}</NavLink>
          )
        }
      }
    }



    return m;
  }

  render() {

    return (
      <div className="Menu">
        <button className="menuNavButton" onClick={()=>this.triggerNavigation()}></button>
        <nav className={this.state.displayMenu}>
          <NavLink activeClassName="active" exact to="/" >
            {lng.title[0]}
          </NavLink>
          <div className="dropdown-item-list">
            <NavLink activeClassName="active" onClick={e => e.preventDefault()} to={"/"+lng.mainurl.title[4]}>{lng.title[1]}</NavLink>

            <div className="dropdown-list">
              <Link activeClassName="active"  
              to={"/"+lng.title[1]+"/"+lng.Kurumsal.value[0]}>{lng.Kurumsal.title[0]}</Link>

              <div className="dropdown-list">
                {this.menuBuild(lng.Kurumsal.Hakkimizda, null, lng.title[1])}
              </div>
              <NavLink activeClassName="active" to={"/"+lng.title[1]+"/"+lng.Kurumsal.value[1]}>{lng.Kurumsal.title[1]}</NavLink>
              <NavLink activeClassName="active" to={"/"+lng.title[1]+"/"+lng.Kurumsal.value[2]}>{lng.Kurumsal.title[2]}</NavLink>
              <NavLink activeClassName="active" to={"/"+lng.title[1]+"/"+lng.Kurumsal.value[3]}>{lng.Kurumsal.title[3]}</NavLink>
              <NavLink activeClassName="active" to={"/"+lng.title[1]+"/"+lng.Kurumsal.value[4]}>{lng.Kurumsal.title[4]}</NavLink>
            </div>
          </div>

          <div className="dropdown-item-list">
              <NavLink activeClassName="active"  onClick={e => e.preventDefault()} to={"/"+lng.mainurl.title[4]}>{lng.title[2]}</NavLink>

            <div className="dropdown-list">
              <NavLink activeClassName="active" onClick={e => e.preventDefault()} to={"/"+lng.Urunlerimiz.title[0]}>{lng.Urunlerimiz.title[0]}</NavLink>

              <div className="dropdown-list">
                <NavLink activeClassName="active"  to={"/"+lng.Urunlerimiz.title[0]+"/"+lng.Urunlerimiz.Kamyon.value[0]}>{lng.Urunlerimiz.Kamyon.title[0]}</NavLink>
                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Kamyon.Satis, null, lng.title[2])}
                </div>

                <NavLink activeClassName="active" to={"/"+lng.Urunlerimiz.title[0]+"/"+lng.Urunlerimiz.Kamyon.value[1]}>{lng.Urunlerimiz.Kamyon.title[1]}</NavLink>
                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Kamyon.Kampanyalar, null, lng.mainurl.title[2])}
                </div>
                
                <NavLink activeClassName="active" to={"/"+lng.Urunlerimiz.title[0]+"/"+lng.Urunlerimiz.Kamyon.value[2]}>{lng.Urunlerimiz.Kamyon.title[2]}</NavLink>
                <NavLink activeClassName="active" to={"/"+lng.Urunlerimiz.title[0]+"/"+lng.Urunlerimiz.Kamyon.value[3]}>{lng.Urunlerimiz.Kamyon.title[3]}</NavLink>

                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Kamyon.SatisSonrasi, null, lng.mainurl.title[2])}
                </div>
              </div>

              <NavLink activeClassName="active" onClick={e => e.preventDefault()} to={"/"+lng.Urunlerimiz.title[1]}>{lng.Urunlerimiz.title[1]}</NavLink>

              <div className="dropdown-list">
                <NavLink activeClassName="active" to={"/"+lng.mainurl.title[4]+"/"+lng.Urunlerimiz.Otobus.value[0]}>{lng.Urunlerimiz.Otobus.title[0]}</NavLink>
                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Otobus.Satis)}
                </div>

                <NavLink activeClassName="active" to={"/"+lng.mainurl.title[4]+"/"+lng.Urunlerimiz.Otobus.value[1]}>{lng.Urunlerimiz.Otobus.title[1]}</NavLink>
                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Otobus.Kampanyalar, 'Kampanya')}
                </div>
                
                <NavLink activeClassName="active" to={"/"+lng.mainurl.title[4]+"/"+lng.Urunlerimiz.Otobus.value[2]}>{lng.Urunlerimiz.Otobus.title[2]}</NavLink>
                <NavLink activeClassName="active" to={"/"+lng.mainurl.title[4]+"/"+lng.Urunlerimiz.Otobus.value[3]}>{lng.Urunlerimiz.Otobus.title[3]}</NavLink>

                <div className="dropdown-list">
                  {this.menuBuild(lng.Urunlerimiz.Otobus.SatisSonrasi)}
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown-item-list">
            <NavLink activeClassName="active"  onClick={e => e.preventDefault()} to={"/"+lng.mainurl.title[4]+"/"+lng.value[3]}>{lng.title[3]}</NavLink>

            <div className="dropdown-list">
              {this.menuBuild(lng.Innovasyon)}
            </div>
          </div>          
          <div className="dropdown-item-list">
            <NavLink activeClassName="active"  onClick={e => e.preventDefault()} to={"/"+lng.mainurl.title[4]+"/"+lng.value[4]}>{lng.title[4]}</NavLink>

            <div className="dropdown-list">
              {this.menuBuild(lng.Kariyer)}
            </div>
          </div>   
          <NavLink activeClassName="active" to={'/'+lng.mainurl.title[0]}>{lng.title[5]}</NavLink>
        </nav>
      </div>
    )
  }
}

