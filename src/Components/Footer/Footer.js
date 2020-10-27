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
        <a href="javascript:void(0)" className="footer-item">
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
          <a href={"#tab-"+i} rel="nofollow">{this.state.Footer[i].title}</a>
        </li>
      )
    }

    return footer;

  }
  Popupganerator () {
    const footer = [];

    for (let i = 0; i < this.state.Footer.length; i++) {
      footer.push(
        
        <div id={"tab-"+i}>
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
      event.preventDefault();
      
      $('li').removeClass('active');
      $(this).parent().addClass('active');
      $('.tab-content div').hide();
      $($(this).attr('href')).show();
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
              <h5>About Daimler Truck AG</h5>
              <p>Daimler Trucks & Buses is one of the world’s largest commercial vehicle manufacturers, with more than 35 primary locations around the world and around 100,000 employees. The company brings seven vehicle brands under one roof.</p>
            </div>
            <div className="col-lg-4 float-left">
              <h5>Navigasyon</h5>
              <Menu />
            </div>
            <div className="col-lg-4 float-left">
              <h5>Contact Us</h5>
              <p>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>

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

        <div className="popup-details Subpage d-none">
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
