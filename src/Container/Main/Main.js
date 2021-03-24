import React, {Component} from 'react';
import importedComponent from 'react-imported-component';

import { GetLanguageF } from '../../Actions/GetLanguage'
import language from '../../newLanguage.json';

import {
  Switch,
  Route
} from "react-router-dom";

import jQuery from 'jquery'

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
const GetRecall = importedComponent( () => import('../../Container/Subpage/getRecall'));


export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      languageDetails: null,
    }
  }

  pathControl = () => {
    const lang = language[localStorage.lang];
    const element = document.getElementsByTagName('body')[0]
    const splitUrl = window.location.pathname.split('/')

    if (window.location.pathname === '/' + lang[6].mainurl.title[5]) {
      element.classList.add('Map')
    } else {
      element.classList.remove('Map')
    }
  }
  componentWillMount = () => {
  }
  componentDidMount = () => {
 
    function showImages(el) {
      var windowHeight = jQuery( window ).height();
      jQuery(el).each(function(){
          var thisPos = jQuery(this).offset().top;
  
          var topOfWindow = jQuery(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > thisPos ) {
            jQuery(this).addClass("animate__fadeIn");
          }
      });
    }
  
    // if the image in the window of browser when the page is loaded, show that image
    jQuery(document).ready(function(){
        showImages('.star');

        jQuery('#closeCookie').on('click', function(){
            localStorage.cookie = false;

            jQuery('.accept-cookie').addClass('d-none');
        })
    });
    
    // if the image in the window of browser when scrolling the page, show that image
    jQuery(window).scroll(function() {
        showImages('.star');
    });


    this.pathControl()
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.pathControl()
  }
  render()
  {
    const lang = language[localStorage.lang];
    
    return (
      <div className="App show-on-scroll">
        { 
          lang !== undefined
          ? 
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path={lang[5].link+"/:counter?"} component={AnnouncementList}/>
              <Route path={'/'+lang[6].mainurl.title[0] + '/' + lang[6].mainurl.title[1]+"/:pagename"} component={AnnouncementDetails}/>
              <Route path={"/"+lang[6].mainurl.title[2]+"/:pagename"} component={CampaignList}/>
              <Route path={"/"+lang[6].mainurl.title[3]+"/:pagename/:subname"} component={CampaignDetails}/>
              <Route path={lang[1].link+"/:pagename?/:subpage?/:subdetails?"} component={Subpage}/>
              <Route path={lang[2].link+"/:pagename?/:subpage?/:subdetails?"} component={Subpage}/>
              <Route path={lang[3].link+"/:pagename?/:subpage?/:subdetails?"} component={Subpage}/>
              <Route path={lang[4].link+"/:pagename?/:subpage?/:subdetails?"} component={Subpage}/>
              <Route path={"/"+lang[6].mainurl.title[5]} exact component={MapLocation} />
              <Route path={"/"+lang[6].mainurl.title[6]+"&=:searchText"} component={Search} />
              <Route path={lang[2].sub[0].sub[0].sub[3].link} component={PriceList} />
              <Route path={lang[2].sub[1].sub[0].sub[3].link} component={PriceList} />
              <Route path={'/Sasi'} component={GetRecall} />
            </Switch>
          : ''
        }
        { 
          localStorage.cookie !== 'false'
          ? 
          <div className="accept-cookie">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio non labore dolorem iste consequatur eveniet, fuga nostrum nam eum pariatur. Officia consequatur debitis velit voluptates voluptate, veniam cum ducimus?
            </p>
            <button id="closeCookie">Close</button>
          </div>
          : ''
        }
      </div>
    );
  }
}

