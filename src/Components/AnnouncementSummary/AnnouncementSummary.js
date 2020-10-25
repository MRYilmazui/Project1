import React, {Component} from 'react';
import './AnnouncementSummary.scss';

import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import languageJson from '../../language.json';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const lng = languageJson[localStorage.lang];

export default class AnnouncementSummary extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
 
  NewsSliderBuild () {
    const NewsSlider = [];

    for (let i = 0; i < this.props.data.length; i++) {
        NewsSlider.push(
        <div className="announcement">
          <img src={this.props.data[i].imageUrl} alt=""/>
          <h5>{this.props.data[i].title}</h5>

          <p>{ReactHtmlParser(this.props.data[i].body)}</p>

          <NavLink activeClassName="active" to={"/"+lng.mainurl.title[1]+"/"+this.props.data[i].routeValue}>
            Detaylar
          </NavLink>
        </div>
      )
    }

    return NewsSlider;
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: '20px'
    };

    return (
      <div className="AnnouncementSummary">
        <h3>News & Announcements</h3>
        <i className="title-desc">Press releases and statements</i>

        <div className="announcements">
          <Slider {...settings}>
            {this.NewsSliderBuild()}
          </Slider>
        
          
        </div>
      </div>
    )
  }
}