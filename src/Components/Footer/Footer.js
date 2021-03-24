import React, {Component} from 'react';
import Menu from '../../Components/Menu/Menu'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import './Footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import { GetFooterDetails } from '../../Actions/GetFooterDetails'
import $ from 'jquery'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {

      Footer: null
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
  
  componentDidMount = async() => {
    let Footer = await GetFooterDetails(localStorage.langid)
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
      event.preventDefault()
      
      $('li').removeClass('active');
      $('[href="'+ this.attributes[0].value +'"]').parent().addClass('active');

      var a = this.attributes[0].value
      $('.tab-content div').addClass('d-none');
      $(a).removeClass('d-none');
    });
    $('.nav.nav-tabs li:first a').trigger('click'); // Default

    $('.overlay').click(function(){
      $('.popup-details').addClass('d-none')
    })

    $('.footerBottom').click(function(){
      $('.popup-details').removeClass('d-none')
    })
  }
  render() {
      
    return (
      <div className="Footer">
        {this.state.Footer !== null
        ? 
          <div className="container">
            <div className="col-lg-4 float-left">
              <h5>Daimler Truck AG</h5>
              <p>1967 yılında Daimler-Benz AG’nin % 36 ortaklığı ile Otomarsan unvanıyla İstanbul Davutpaşa’da kurulmuştur. Marka, efsanevi O302 tipi otobüslerin üretimine kuruluşundan yalnızca bir yıl sonra, 1968 yılında başlamıştır. 1970 yılında ilk ihracatını gerçekleştiren şirket, 1984 yılında Mercedes-Benz Türkiye Genel Mümessili olmuştur.</p>
            </div>
            <div className="col-lg-4 float-left">
              <h5>Navigasyon</h5>
              <Menu />
            </div>
            <div className="col-lg-4 float-left">
              <h5>İletişim</h5>
              <p>Akçaburgaz Mah. Süleyman Şah Cad. No:2 34522 Esenyurt/İstanbul</p>

              <SocialMedia  Follow={true}/>
            </div>
            <div className="clearfix"></div>
            <div className="footerBottom">
              { this.footerLoop() }
            </div>
            <div className="copyright">
              © 2020 Daimler Truck AG. All Rights Reserved.
            </div>
          </div>
        : 
          ''
        }

        <div className="popup-details Subpage  animate__animated animate__fast star  d-none">
          <ul class="tabs" role="tablist">
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
        
    )
  }
}
