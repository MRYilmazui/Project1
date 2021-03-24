import React, {Component} from 'react';
import SliderComp from '../../Components/SliderComp/SliderComp'
import MainCategories from '../../Components/MainCategories/MainCategories'
import MainPosts from '../../Components/MainPosts/MainPosts'
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary'
import { Helmet } from 'react-helmet'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { GetMainPageF } from '../../Actions/GetMainPage'
import { GetMainPagePreviews } from '../../Actions/GetMainPagePreview'

import { NavLink } from "react-router-dom";
import jQuery from 'jquery'

import './Homepage.scss';

import languageJson from '../../language.json';

const lng = languageJson[localStorage.lang];
let styles = {}
export default class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      GetMainPage: null,
      content: null
    }
  }

  componentDidMount = async() => {
    if(window.location.href.split('previewId=')[1] !== undefined){
      let GetMainPage = await GetMainPagePreviews(localStorage.langid, window.location.href.split('previewId=')[1])
      this.setState({GetMainPage : GetMainPage})
    } else {
      let GetMainPage = await GetMainPageF(localStorage.langid)
      this.setState({GetMainPage : GetMainPage})
  
      window.addEventListener('storage', async function(e) {  
        let GetMainPage = await GetMainPageF(localStorage.langid)
        this.setState({GetMainPage : GetMainPage})
      });
    }
    styles = {
      backgroundImage: 'url(' + this.state.GetMainPage.mainPageSections.sectionOneImageUrl + ') no-repeat !important', 
      backgroundPosition: 'right !important',
      backgroundSize: 'auto 107% !important'
    }
  }

  componentDidUpdate = async() => {

  }

  render() {
    return (
      <div className="Homepage">
        {this.state.GetMainPage !== null
                ?  
                <div>       
                  <Helmet>
                    <title>{'Anasayfa - Mercedes-Benz Trucks - Trucks you can trust'}</title>
                  </Helmet>
                  <SliderComp data={this.state.GetMainPage.slider} />

                  <div className="container">
                    <div className="aboutus" 
                    style ={ { backgroundImage: "url(" + this.state.GetMainPage.mainPageSections.sectionOneImageUrl + ")" } }>
                    
                      <h3>
                        {this.state.GetMainPage.mainPageSections.sectionOneTitle}
                      </h3>
                      <i className="title-desc">
                        {this.state.GetMainPage.mainPageSections.sectionOneSubTitle}
                      </i>
                      <p className="col-lg-6 pl-0 pr-0">
                        {ReactHtmlParser(this.state.GetMainPage.mainPageSections.sectionOneBody)}
                      </p>
                    </div>
                  </div>
          
                  <div className="main-categories animate__animated star animate__fast star">
                    <MainCategories data={this.state.GetMainPage.mainPageSections} />
                  </div>
          
                  <div className="container">
                    <div className="mainposts animate__animated star animate__fast star">
                      <h3>
                        {this.state.GetMainPage.mainPageSections.sectionThreeTitle}
                      </h3>
                      <i className="title-desc">
                        {this.state.GetMainPage.mainPageSections.sectionThreeDescription}
                      </i>
                      <MainPosts data={this.state.GetMainPage.mainPageSections}/>
                    </div>
                  </div>
                  <div className="mainmap animate__animated star animate__fast star">
                    <div className="container">
                      <div className="col-lg-6">
                          <h3>
                            {this.state.GetMainPage.mainPageSections.dealerTitle}
                          </h3>
                          <i className="title-desc">
                            {this.state.GetMainPage.mainPageSections.dealerSubTitle}
                          </i>
          
                          <p>
                            {this.state.GetMainPage.mainPageSections.dealerDescription}
                          </p>
          
                          <NavLink to={"/"+lng.mainurl.title[5]} >Lokasyonlara gözat</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="announcementslider animate__animated star animate__fast star">
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