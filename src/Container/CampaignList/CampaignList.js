import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './CampaignList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetCampaignLists } from '../../Actions/GetCampaignList'
import SubPosts from '../../Components/SubPosts/SubPosts';
import findValue from '../../Components/FindValue/findValue'

import language from '../../newLanguage.json';

const lang = language[localStorage.lang];

export default class CampaignList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      getCampaignListPage: null,
      retry: ''
    }
  }
  
  componentDidMount = async() => {
    const name = '';
    this.name = this.props.match.params.pagename

    const pageValue = findValue(lang, this.name, window.location.pathname)
    this.setState({retry: pageValue})

    let getCampaigns = await GetCampaignLists(localStorage.langid, pageValue)
    this.setState({getCampaignListPage : getCampaigns})
  }

  componentDidUpdate = async(prevProps, prevState, snapshot) => {
    if(prevProps.location.pathname !== window.location.pathname){
      const name = '';
      this.name = this.props.match.params.pagename

      const pageValue = findValue(lang, this.name, window.location.pathname)

      let getCampaigns = await GetCampaignLists(localStorage.langid, pageValue)

      if(this.state.getCampaignListPage.data[0].id !== getCampaigns.data[0].id) {
        this.setState({getCampaignListPage : getCampaigns})
      }
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
    
    return (
      <div className="AnnouncementDetails">
        {this.state.getCampaignListPage !== null
        ?  
          <div className="container animate__animated animate__fadeIn animate__fast">
            <p>
              <SubPosts data={this.state.getCampaignListPage.data} uppername={window.location.pathname.split('/'+lang[6].mainurl.title[2])[1]}/>
            </p>
          </div>
         : ''
        }
      </div>
    )
  }
}