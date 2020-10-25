import React, {Component} from 'react';
import importedComponent from 'react-imported-component';

import {
  Switch,
  Route
} from "react-router-dom";

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

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render()
  {

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path={"/"+lng.mainurl.title[0]+"/:counter?"} component={AnnouncementList}/>
          <Route path={"/"+lng.mainurl.title[1]+"/:pagename"} component={AnnouncementDetails}/>
          <Route path={"/"+lng.mainurl.title[2]+"/:pagename"} component={CampaignList}/>
          <Route path={"/"+lng.mainurl.title[3]+"/:pagename/:subname"} component={CampaignDetails}/>
          <Route path={"/"+lng.title[1]+"/:pagename/:subpage?"} component={Subpage}/>
          <Route path={"/"+lng.title[2]+"/:pagename/:subpage?"} component={Subpage}/>
          <Route path={"/"+lng.title[3]+"/:pagename/:subpage?"} component={Subpage}/>
          <Route path={"/"+lng.title[4]+"/:pagename/:subpage?"} component={Subpage}/>
          <Route path={"/"+lng.mainurl.title[5]} component={MapLocation} />
          <Route path={"/"+lng.mainurl.title[6]+"&=:searchText"} component={Search} />
          <Route path={"/"+lng.mainurl.title[7]} component={PriceList} />
        </Switch>
      </div>
    );
  }
}