import React, {Component} from 'react';
import SliderComp from '../../Components/SliderComp/SliderComp'
import MainCategories from '../../Components/MainCategories/MainCategories'
import MainPosts from '../../Components/MainPosts/MainPosts'
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary'

import { GetMainPageF } from '../../Actions/GetMainPage'

import { NavLink } from "react-router-dom";

import './Homepage.scss';

import languageJson from '../../language.json';

const lng = languageJson[localStorage.lang];

export default class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GetMainPage: null
    }
  }

  componentDidMount = async() => {
    let GetMainPage = await GetMainPageF(localStorage.langid)
    this.setState({GetMainPage : GetMainPage})
  }

  render() {
    
    return (
      <div className="Homepage">
        {this.state.GetMainPage !== null
                ?  
                <div>       
                  <SliderComp data={this.state.GetMainPage.slider} />

                  <div className="container">
                    <div className="aboutus">
                    
                      <h3>
                        {this.state.GetMainPage.mainPageSections.sectionOneTitle}
                      </h3>
                      <i className="title-desc">Welcome to Daimler Truck AG</i>
                      <p className="col-lg-6 pl-0 pr-0">
                        {this.state.GetMainPage.mainPageSections.sectionOneBody}
                      </p>
                    </div>
                  </div>
          
                  <div className="main-categories">
                    <MainCategories data={this.state.GetMainPage.mainPageSections} />
                  </div>
          
                  <div className="container">
                    <div className="mainposts">
                      <h3>Our Purpose</h3>
                      <i className="title-desc">This is our mission and what drives.</i>
                      <MainPosts data={this.state.GetMainPage.mainPageSections}/>
                    </div>
                  </div>
                  <div className="mainmap">
                    <div className="container">
                      <div className="col-lg-6">
                          <h3>Dealers</h3>
                          <i className="title-desc">View Dealers on The Map</i>
          
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          
                          <NavLink to={"/"+lng.mainurl.title[5]} >Lokasyonlara gözat</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="announcementslider">
                    <div className="container">
                      <AnnouncementSummary data={this.state.GetMainPage.news} />
                    </div>
                  </div>
                </div>
                : ''
              }

      </div>
    )
  }
}