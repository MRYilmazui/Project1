import React, {Component} from 'react';
import './SubCategories.scss';

import { Link, NavLink } from "react-router-dom";
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import languageJson from '../../language.json';

const lng = languageJson[localStorage.lang];
export default class SubCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  imageRepeater () {
    const NewsSlider = [];

    for (let i = 0; i < this.props.data.length; i++) {
      NewsSlider.push(
        <div className="subcategory">
          <NavLink activeClassName="active" to={"/"+lng.mainurl.title[1]+"/"+this.props.data[i].routeValue}>
            <span className="subcategory-image col-lg-6 float-left pr-0">
              <img src={this.props.data[i].listImageUrl} alt=""/>
            </span>
            <span className="text col-lg-6 float-left">
              <h5>{this.props.data[i].title}</h5>
              {this.props.data[i].listDescription}
            </span>
          </NavLink>
        </div>
      )
    }

    return NewsSlider;
  }
  render() {

    const BC = ['Haberler']

    return (
      <div className="SubCategories">
        <BreadCrumbNav mainpage={BC}/>

        {this.props.data !== null
          ?  
            this.imageRepeater() 
          : 
            ''
        }
      </div>
    )
  }
}