import React, {Component} from 'react';
import SlideImage from '../../Assets/img/slide-img.png';
import './Search.scss';
import { Helmet } from 'react-helmet'

import { SearchResult } from '../../Actions/GetSearchResult'
import language from '../../newLanguage.json';

const lang = language[localStorage.lang];
export default class AnnouncementDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result : null,
      findUrlData: false
    }
  }

   menuBuildFunction4 (e,c) {
    let menuConst = [];

    for (let i = 0; i < e.length-1; i++) {
      if(e[i].value === c) {
        menuConst.push(e[i].link)
        break;
      }
    }

    return menuConst;
  }
  
   menuBuildFunction3 (e, c) {
    let menuConst = [];

    for (let i = 0; i < e.length-1; i++) {
      if(e[i].value === c) {
        menuConst.push(e[i].link)
        break;
      }
      if(e[i].sub !== null) {
        menuConst.push(this.menuBuildFunction4(e[i].sub, c))

        if(menuConst[0].length === 0){
          menuConst = []
        }
      } else {
        
      }
    }

    return menuConst;
  }
  
   menuBuildFunction2 (e, c) {
    let menuConst = [];

    for (let i = 0; i < e.length-1; i++) {
      if(e[i].value === c) {
        menuConst.push(e[i].link)
        break;
      }
      if(e[i].sub !== null) {
        menuConst.push(this.menuBuildFunction3(e[i].sub, c))

        if(menuConst[0].length === 0){
          menuConst = []
        }
      } else {
        
      }
    }

    return menuConst;
  }
   menuBuildFunction (e) {
    let menuConst = [];

    for (let i = 0; i < lang.length-1; i++) {

      if(lang[i].value === e) {
        menuConst.push(lang[i].link)
        break;
      }
      if(lang[i].sub !== null) {
        menuConst.push(this.menuBuildFunction2(lang[i].sub, e))

        if(menuConst[0].length === 0){
          menuConst = []
        }
      } else {
        
      }
    }

    for (let i = 0; i < menuConst.length; i++) {
      if(menuConst[i].length > 1) {

      } else {
        if(menuConst[i][0].length > 0){
          menuConst = menuConst[i]
          break;
        }
      }
    }

    return menuConst;
  }
  findURL (rootValue) {
    let a = this.menuBuildFunction(rootValue)

    return a;
  }
  repeater () {
    const NewsSlider = [];

    for (let i = 0; i < this.state.result.length; i++) {
      NewsSlider.push(
        <a href={this.state.result[i].link} className="search-item">
          <img src={this.state.result[i].imageUrl} alt=""/>
          <h4>{this.state.result[i].title}</h4>
          <p>{this.state.result[i].description}</p>
        </a>
      )
    }

    return NewsSlider;
  }
  componentDidMount = async() => {
    let getResult = await SearchResult(localStorage.langid, this.props.match.params.searchText)
    this.setState({result : getResult})
  }
  render() {
    
    return (
      <div className="SearchDetails ">
        <Helmet>
          <title>{'Arama Sonuçları'}</title>
        </Helmet>
        <div className="container animate__animated animate__fadeIn animate__fast">
          <h5>Arama Sonuçları</h5>
          {this.state.result !== null
          ?  
            this.repeater()
          :
            ''
          }
        </div>
      </div>
    )
  }
}