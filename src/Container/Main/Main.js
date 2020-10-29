import React, {Component} from 'react';
import importedComponent from 'react-imported-component';

import {
  Switch,
  Route
} from "react-router-dom";

import { GetLanguageF } from '../../Actions/GetLanguage'
import language from '../../newLanguage.json';
import languageJson from '../../language.json';

/* Styles */
import './Main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './Main.scss';


/* Modules */
const Homepage = importedComponent( () => import('../../Container/Homepage/Homepage'));
const AnnouncementList = importedComponent( () => import('../../Container/AnnouncementList/AnnouncementList'));
const AnnouncementDetails = importedComponent( () => import('../../Container/AnnouncementDetails/AnnouncementDetails'));
const CampaignDetails = importedComponent( () => import('../../Container/CampaignDetails/CampaignDetails'));
const CampaignList = importedComponent( () => import('../../Container/CampaignList/CampaignList'));
const Subpage = importedComponent( () => import('../../Container/Subpage/Subpage'));
const MapLocation = importedComponent( () => import('../../Container/Map/Map'));
const PriceList = importedComponent( () => import('../../Container/PriceList/PriceList'));
const Search = importedComponent( () => import('../../Container/Search/Search'));
const ContactUs = importedComponent( () => import('../../Container/ContactUs/ContactUs'));

const lng = languageJson[localStorage.lang];
const lang = language[localStorage.lang];

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      languageDetails: null
    }
  }

  pathControl() {
    const element = document.getElementsByTagName('body')[0]
    
    if (this.props.location.pathname == '/'+lng.mainurl.title[5]) {
      element.classList.add('Map')
    } else {
      element.classList.remove('Map')
    }
  }
  componentDidMount = async(props) => {
  }
  componentDidUpdate = (prevProps, prevState) => {

  }
  render()
  {

    return (
      <div className="App">
        { 
          lang !== undefined
          ? 
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path={lang[5].link+"/:counter?"} component={AnnouncementList}/>
            <Route path={'/'+lang[6].mainurl.title[0] + '/' + lang[6].mainurl.title[1]+"/:pagename"} component={AnnouncementDetails}/>
            <Route path={"/"+lang[6].mainurl.title[2]+"/:pagename"} component={CampaignList}/>
            <Route path={"/"+lang[6].mainurl.title[3]+"/:pagename/:subname"} component={CampaignDetails}/>
            <Route path={lang[1].link+"/:pagename/:subpage?/:subdetails?"} component={Subpage}/>
            <Route path={lang[2].link+"/:pagename/:subpage?/:subdetails?"} component={Subpage}/>
            <Route path={lang[3].link+"/:pagename/:subpage?/:subdetails?"} component={Subpage}/>
            <Route path={lang[4].link+"/:pagename/:subpage?/:subdetails?"} component={Subpage}/>
            <Route path={"/"+lng.mainurl.title[5]} exact component={MapLocation} />
            <Route path={"/"+lng.mainurl.title[6]+"&=:searchText"} component={Search} />
            <Route path={lang[2].sub[0].sub[0].sub[3].link} component={PriceList} />
            <Route path={lang[2].sub[1].sub[0].sub[3].link} component={PriceList} />
          </Switch>
                    : ''
                  }
      </div>
    );
  }
}