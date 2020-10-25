import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './PriceList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetPriceListF } from '../../Actions/GetPriceList'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class PriceList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PriceList: null
    }
  }
  imageRepeater () {
    const NewsSlider = [];

    if (this.state.GetAnnouncementDetailsPage.galleries.length !== 0) {
      for (let i = 0; i < this.state.GetAnnouncementDetailsPage.galleries.length; i++) {
        NewsSlider.push(
          <div className="slide">
            <div>
              <img src={this.state.GetAnnouncementDetailsPage.galleries[i].imageUrl} alt=""/>
            </div>
          </div>
        )
      }
    } else {
      NewsSlider.push(
        <div className="slide">
          <div>
            <img src={this.state.GetAnnouncementDetailsPage.imageUrl} alt=""/>
          </div>
        </div>
      )
    }


    return NewsSlider;
  }
  
  componentDidMount = async() => {
    let priceList = await GetPriceListF(localStorage.langid)
    this.setState({PriceList : priceList})
  }
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div className="AnnouncementDetails">
        {this.state.PriceList !== null
        ?  
          <div className="container">
            <BreadCrumbNav />
            
            <Slider {...settings}>
              
            </Slider>
            
          </div>
         : ''
        }
      </div>
    )
  }
}