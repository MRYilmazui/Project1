import React, {Component} from 'react';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'
import { Link, NavLink } from "react-router-dom";
import languageJson from '../../language.json';
import language from '../../newLanguage.json';

import './SubPosts.scss';

const lang = language[localStorage.lang];

export default class SubPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  imageRepeater () {
    const NewsSlider = [];

    for (let i = 0; i < this.props.data.length; i++) {
      NewsSlider.push(
        <div class="subposts">
          <NavLink activeClassName="active" to={"/"+lang[6].mainurl.title[3]+this.props.uppername+"/"+this.props.data[i].routeValue}>
            <span class="subcategory-image col-lg-6 float-left pr-0">
              <img src={this.props.data[i].listImageUrl} alt="" />
            </span>
            <span class="text col-lg-6 float-left">
              <h5>{this.props.data[i].title}</h5>
              <p>
                {this.props.data[i].listDescription}
              </p>
            </span>
          </NavLink>
      </div>

      )
    }

    return NewsSlider;
  }
  render() {
    const BC = ['Kampanyalar']

    return (
      <div className="SubPosts">
        {/*<BreadCrumbNav mainpage={BC}/>*/}
        
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