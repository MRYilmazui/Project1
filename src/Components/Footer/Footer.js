import React, {Component} from 'react';
import Menu from '../../Components/Menu/Menu'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import postscribe from 'postscribe';
import {Helmet} from "react-helmet";

import img1 from '../../Assets/img/Hp5Fz1.png';

import './Footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import { GetFooterDetails } from '../../Actions/GetFooterDetails'
import { GetSiteScripts } from '../../Actions/GetSiteScript'
import $ from 'jquery'
import ae from '../../language.json';

const la = ae[localStorage.lang];

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {

      Footer: null,
      siteScript: null
    }
  }

  footerLoop () {
    const footer = [];

    for (let i = 0; i < this.state.Footer.length; i++) {
      footer.push(
        <a href={"#tab"+i} className="footer-item">
          {this.state.Footer[i].title}
        </a>
      )
    }

    return footer;
  }
  tabsTitle () {
    const footer = [];

    for (let i = 0; i < this.state.Footer.length; i++) {
      footer.push(
        <li class="">
          <a href={"#tab"+i} rel="nofollow">{this.state.Footer[i].title}</a>
        </li>
      )
    }

    return footer;

  }
  Popupganerator () {
    const footer = [];

    for (let i = 0; i < this.state.Footer.length; i++) {
      footer.push(
        
        <div id={"tab"+i}>
          <p>{ReactHtmlParser(this.state.Footer[i].body)}</p>
        </div>
      )
    }

    return footer;
  }

  componentWillMount = async() => {
 
  }
  
  componentDidMount = async() => {
    let Footer = await GetFooterDetails(localStorage.langid)
    let siteScript = await GetSiteScripts()
    
    this.setState({siteScript : siteScript})
    this.setState({Footer : Footer})

    $('.nav.nav-tabs a').on('click', function (event) {
      event.preventDefault()
      
      $('li').removeClass('active');
      $(this).parent().addClass('active');

      var a = this.attributes[0].value
      $('.tab-content div').addClass('d-none');
      $(a).removeClass('d-none');
    });
    $('.footerBottom a').on('click', function (event) {
      $('.popup-outer-details').toggleClass('d-none')
      event.preventDefault()
      
      $('li').removeClass('active');
      $('[href="'+ this.attributes[0].value +'"]').parent().addClass('active');

      var a = this.attributes[0].value
      $('.tab-content div').addClass('d-none');
      $(a).removeClass('d-none');
    });
    $('.nav.nav-tabs li:first a').trigger('click'); // Default

    $('.overlay, .closeModal').click(function(e){
      $('.popup-outer-details').addClass('d-none');
    })

    $('#openCookie').click(function(){
      $('.popup-outer-details').removeClass('d-none')
    })
    
    $('#closeCookie').on('click', function(){
      localStorage.cookie = false;

      $('.accept-cookie').addClass('d-none');
  })
  }
  render() {
    return (
      <>
      {this.state.Footer !== null
        ? 
      <div className="Footer">
        <Helmet>
          <script>
            { this.state.siteScript !== null
              ?
                this.state.siteScript.footers[0]
              :
                ''
            }
          </script>

          <script src=
            { this.state.siteScript !== null
              ?
                this.state.siteScript.footerLibraries[0]
              :
                ''
            }
          ></script>
        </Helmet>

          <div className="container">
            <div className="col-lg-4 float-left">
              <h5>Mercedes-Benz Türk A.Ş.</h5>
              <p>1967 yılında Daimler-Benz AG’nin % 36 ortaklığı ile Otomarsan unvanıyla İstanbul Davutpaşa’da kurulmuştur. Marka, efsanevi O302 tipi otobüslerin üretimine kuruluşundan yalnızca bir yıl sonra, 1968 yılında başlamıştır. 1970 yılında ilk ihracatını gerçekleştiren şirket, 1984 yılında Mercedes-Benz Türkiye Genel Mümessili olmuştur.</p>
            </div>
            <div className="col-lg-4 float-left">
              <h5>{la.allsite.title[42]}</h5>
              <Menu />
            </div>
            <div className="col-lg-4 float-left">
              <h5>{la.allsite.title[37]}</h5>
              <p>
                <a href="tel:444 62 44" >
                  <img src={img1} className="footer-phone-img" />
                </a>
                Akçaburgaz Mah. Süleyman Şah Cad. No:2 34522 Esenyurt/İstanbul
              </p>

              <SocialMedia  Follow={true}/>
            </div>
            <div className="clearfix"></div>
            <div className="footerBottom">
              { this.footerLoop() }
              { 
                localStorage.cookie !== 'false'
                ? 
                <div className="accept-cookie">
                  <p>
                    {la.allsite.title[7]}
                  </p>
                  <button id="closeCookie">{la.allsite.title[9]}</button>
                  <a href="#tab3" id="openCookie" type="button" className="footer-item">{la.allsite.title[8]}</a>
                <div className="clearfix"></div>
                  <a href="#tab0" id="openCookie" type="button" className="noInspect">{la.allsite.title[11]}</a>
                  <a href="#tab3" id="openCookie" type="button" className="noInspect">{la.allsite.title[10]}</a>
                </div>
                : ''
              }
            </div>
            <div className="copyright">
              © <a href="#tab0" id="openCookie" type="button" className="noInspect">2021</a> Mercedes-Benz Türk A.Ş.. All Rights Reserved.
            </div>

          </div>
        

        <div className="popup-outer-details  d-none">
          <div className="popup-details Subpage  animate__animated animate__fast star">
            <ul class="tabs" role="tablist">
            <button className="closeModal"></button>
              {this.state.Footer !== null
              ? 
              <div>
                <ul class="nav nav-tabs">
                  {this.tabsTitle()}
                </ul>
                <div class="tab-content">
                  {this.Popupganerator()}
                </div>
              </div>
              :''
              }
            </ul>
          <div className="overlay"></div>
          </div>
        </div>

      </div>
      : 
      ''
    } 
    </>  
    )
  }
}
