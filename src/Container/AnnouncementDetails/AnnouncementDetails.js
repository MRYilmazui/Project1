import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './AnnouncementDetails.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetMainPageF } from '../../Actions/GetMainPage'
import { GetAnnouncementDetails } from '../../Actions/GetAnnouncementDetails'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class AnnouncementDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GetMainPage: null,
      GetAnnouncementDetailsPage: null
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
    let GetMainPage = await GetMainPageF(localStorage.langid)
    this.setState({GetMainPage : GetMainPage})

    let GetAnnouncementDetailsC = await GetAnnouncementDetails(localStorage.langid, this.props.match.params.pagename)
    this.setState({GetAnnouncementDetailsPage : GetAnnouncementDetailsC})

    
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
        {this.state.GetAnnouncementDetailsPage !== null
        ?  
          <div className="container">
            <BreadCrumbNav mainpage={'Haberler'} title={this.state.GetAnnouncementDetailsPage.title}/>
            
            <Slider {...settings}>
              {this.imageRepeater()}
            </Slider>
            <div className="info">
              <h5>
                {this.state.GetAnnouncementDetailsPage.title}
              </h5>
              <i>{this.state.GetAnnouncementDetailsPage.newsDate}</i>
            </div>

            <hr/>

            <p>
              {ReactHtmlParser(this.state.GetAnnouncementDetailsPage.body)}
            </p>

            <hr/>

            <SocialMedia Share={true} />

            <AnnouncementSummary data={this.state.GetMainPage.news}/>
          </div>
         : ''
        }
      </div>
    )
  }
}