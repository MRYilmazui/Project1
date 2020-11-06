import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './AnnouncementList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

import { GetAnnouncementList } from '../../Actions/GetAnnouncementList'
import SubCategories from '../../Components/SubCategories/SubCategories';
import { NavLink } from 'react-router-dom';

export default class AnnouncementList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GetAnnouncementListPage: null
    }
  }
  
  componentDidMount = async() => {
    let GetAnnouncementListC = await GetAnnouncementList(localStorage.langid, "1")
    this.setState({GetAnnouncementListPage : GetAnnouncementListC.data})
  }
  componentDidUpdate = async() => {
    let GetAnnouncementListC = await GetAnnouncementList(localStorage.langid, "1")

    if(GetAnnouncementListC.data[0].id !== this.state.GetAnnouncementListPage[0].id){
      this.setState({GetAnnouncementListPage : GetAnnouncementListC.data})
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
        {this.state.GetAnnouncementDetailsPage !== null
        ?  
          <div className="container animate__animated animate__fadeIn animate__fast">
            <p>
              <SubCategories data={this.state.GetAnnouncementListPage}/>
            </p>
          </div>
         : ''
        }
      </div>
    )
  }
}