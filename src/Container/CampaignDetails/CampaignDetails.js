import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './CampaignDetails.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetCampaignDetails } from '../../Actions/GetCampaignDetails'
import { GetCampaignDetailsPreviews } from '../../Actions/GetCampaignDetailsPreview'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import findValue from '../../Components/FindValue/findValue'
import { Helmet } from 'react-helmet'

import language from '../../newLanguage.json';

const lang = language[localStorage.lang];
export default class CampaignDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      getCampaign: null
    }
  }
  imageRepeater () {
    const NewsSlider = [];

    if (this.state.getCampaign.galleries.length !== 0) {
      for (let i = 0; i < this.state.getCampaign.galleries.length; i++) {
        NewsSlider.push(
          <div className="slide">
            <div>
              <img src={this.state.getCampaign.galleries[i].imageUrl} alt=""/>
            </div>
          </div>
        )
      }
    } else {
      NewsSlider.push(
        <div className="slide">
          <div>
            <img src={this.state.getCampaign.imageUrl} alt=""/>
          </div>
        </div>
      )
    }


    return NewsSlider;
  }
  
  componentDidMount = async() => {
    const name = '';
    let getCampaignDetails = null;
    this.name = this.props.match.params.pagename

    const pageValue = findValue(lang, this.name, this.props.match.params.subname)
    const splitlocation = window.location.pathname.split('/')
    const splitlocationFull = splitlocation[splitlocation.length-1]

    if(window.location.href.split('previewId=')[1] !== undefined){
      getCampaignDetails = await GetCampaignDetailsPreviews(localStorage.langid, pageValue, splitlocationFull, window.location.href.split('previewId=')[1])
      this.setState({getCampaign : getCampaignDetails})
    } else {
      getCampaignDetails = await GetCampaignDetails(localStorage.langid, pageValue, splitlocationFull)
      this.setState({getCampaign : getCampaignDetails})
    }

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
    const breadcrumbData = this.props.match.url.split('/')
    
    return (
      <div className="AnnouncementDetails">
        {this.state.getCampaign !== null
        ?  
          <div className="container animate__animated animate__fadeIn animate__fast">
            <Helmet>
              <title>{this.state.getCampaign.title}</title>
            </Helmet>
            {/*<BreadCrumbNav mainpage={breadcrumbData}/>*/}
            
            <Slider {...settings}>
              {this.imageRepeater()}
            </Slider>
            <div className="info">
              <h5>
                {this.state.getCampaign.title}
              </h5>
              <i>{this.state.getCampaign.newsDate}</i>
            </div>

            <hr/>

            <p>
              {ReactHtmlParser(this.state.getCampaign.body)}
            </p>

            <hr/>

            <SocialMedia Share={true} />
          </div>
         : ''
        }
      </div>
    )
  }
}