import React, {Component} from 'react';
import './AnnouncementSummary.scss';

import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import language from '../../newLanguage.json';
import ae from '../../language.json';

const lang = language[localStorage.lang];
const la = ae[localStorage.lang];

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

          <p>{ReactHtmlParser(this.props.data[i].listDescription)}</p>

          <NavLink activeClassName="active" to={'/'+lang[6].mainurl.title[0]+'/'+lang[6].mainurl.title[1]+"/"+this.props.data[i].routeValue}>
            {la.allsite.title[36]}
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
      centerPadding: '20px',
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }]
    };

    return (
      <div className="AnnouncementSummary">
        <h3>{la.allsite.title[40]}</h3>
        <i className="title-desc">{la.allsite.title[41]}</i>

        <div className="announcements">
          <Slider {...settings}>
            {this.NewsSliderBuild()}
          </Slider>
        
          
        </div>
      </div>
    )
  }
}