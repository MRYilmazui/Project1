import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './CampaignList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetCampaignLists } from '../../Actions/GetCampaignList'
import SubPosts from '../../Components/SubPosts/SubPosts';

export default class CampaignList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      getCampaignListPage: null
    }
  }
  
  componentDidMount = async() => {
    let getCampaigns = await GetCampaignLists(localStorage.langid, this.props.match.params.pagename)
    this.setState({getCampaignListPage : getCampaigns})
  }

  componentDidUpdate = async() => {
    let getCampaigns = await GetCampaignLists(localStorage.langid, this.props.match.params.pagename)

    if(this.state.getCampaignListPage.data[0].id !== getCampaigns.data[0].id) {
      this.setState({getCampaignListPage : getCampaigns})
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
          <div className="container">
            <p>
              <SubPosts data={this.state.getCampaignListPage.data} uppername={this.props.match.params.pagename}/>
            </p>
          </div>
         : ''
        }
      </div>
    )
  }
}