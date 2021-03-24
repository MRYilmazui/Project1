import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import SlideImage2 from '../../Assets/img/nopath.png';
import './Subpage.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {Dropdown, DropdownButton} from 'react-bootstrap'
import SubCategories from '../../Components/SubCategories/SubCategories';
import SubPosts from '../../Components/SubPosts/SubPosts';
import { GetGeneralContents } from '../../Actions/GetGeneralContents'
import { GetGeneralContentPreviews } from '../../Actions/GetGeneralContentsPreview'
import Slider from "react-slick";
import { render } from '@testing-library/react';

import findValue from '../../Components/FindValue/findValue'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';

import languageJson from '../../language.json';
import language from '../../newLanguage.json';
import { GetGeneralContentsPreviews } from '../../Actions/GetGeneralContentsPreview';

const lng = languageJson[localStorage.lang];
const lang = language[localStorage.lang];

export default class Subpage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: '',
      content: null,
      Loader: false,
      success: false
    }
  }



  imageRepeater () {
    const NewsSlider = [];

    if (this.state.content.galleries.length !== 0) {
      for (let i = 0; i < this.state.content.galleries.length; i++) {
        NewsSlider.push(
          <div className="slide">
            <div>
              <img src={this.state.content.galleries[i].imageUrl} alt=""/>
            </div>
          </div>
        )
      }
    } else {
      NewsSlider.push(
        <div className="slide">
          <div>
            <img src={this.state.content.imageUrl} alt=""/>
          </div>
        </div>
      )
    }


    return NewsSlider;
  }

  componentDidMount = async() => {
    let GetGeneralContentsPage = null;
    
    let name = '';
    let pageValue = ''
    debugger;

    if(
        window.location.pathname === '/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Gonullu-Geri-Cagirma-Aksiyonlari'
        ||
        window.location.pathname === '/Urunlerimiz/Kamyon/Satis-Sonrasi-Hizmetler/Gonullu-Geri-Cagirma-Aksiyonlari'
      )
    {
      window.location.pathname = '/Sasi'
    }
    if(this.props.match.params.subdetails !== undefined) {
      this.name = this.props.match.params.subdetails
    } else if(this.props.match.params.subpage !== undefined) {
      this.name = this.props.match.params.subpage
    } else {
      this.name = this.props.match.params.pagename
    }

    if(this.props.match.params.pagename === undefined){
      this.name = this.props.match.url.split('/')[1]
    }

    if(this.name === lang[6].mainurl.title[8]){
      pageValue = findValue(lang, this.name, this.props.match.params.pagename)
    } else {
      pageValue = findValue(lang, this.name)
    }

    if(window.location.href.split('previewId=')[1] !== undefined){
      GetGeneralContentsPage= await GetGeneralContentsPreviews(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      this.setState({content : GetGeneralContentsPage})
    } else {
      GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      this.setState({content : GetGeneralContentsPage})
    }
    debugger; 

    if(GetGeneralContentsPage === null) {
      return window.location.pathname = '/'
    }

  }
  componentDidUpdate = async(prevProps, prevState, snapshot) => {
    let GetGeneralContentsPage = null;
    const name = '';
    let pageValue = ''
    
    if(this.props.match.params.subdetails !== undefined) {
      this.name = this.props.match.params.subdetails
    } else if(this.props.match.params.subpage !== undefined) {
      this.name = this.props.match.params.subpage
    } else {
      this.name = this.props.match.params.pagename
    }
    
    if(this.props.match.params.pagename === undefined){
      this.name = this.props.match.url.split('/')[1]
    }

    if(this.name === lang[6].mainurl.title[8]){
      pageValue = findValue(lang, this.name, this.props.match.params.pagename)
    } else {
      pageValue = findValue(lang, this.name)
    }

    if(prevProps.location.pathname !== window.location.pathname){


      if(window.location.href.split('previewId=')[1] !== undefined){
        GetGeneralContentsPage= await GetGeneralContentsPreviews(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
        this.setState({content : GetGeneralContentsPage})
      } else {
        GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      }
  
      if(this.state.content.id !== GetGeneralContentsPage.id){
        this.setState({content : GetGeneralContentsPage})
  
        if(GetGeneralContentsPage !== null){
  
          if(this.state.content === null) {
            this.setState({content : GetGeneralContentsPage})
          } else if(this.state.content.id !== GetGeneralContentsPage.id ) {
            this.setState({content : GetGeneralContentsPage})
          }
        } else {
          return window.location.pathname = '/'
        }
      }
    }

  }

  download () {
    const table = document.getElementsByClassName('table table-borderless')[0]

    html2canvas(table)
    .then((canvas) => {
      debugger;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");  
    });
  }

  
  render(match){

    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const breadcrumbData = this.props.match.url.split('/')

    return (
      <div className="Subpage">
        {this.state.content !== null
          ?
        <div className="container animate__animated animate__fadeIn animate__fast">
          <Helmet>
            <title>{this.state.content.title}</title>
          </Helmet>
          <BreadCrumbNav mainpage={breadcrumbData} title={this.state.content.title} />

          <div className="details">
            <div className="topside">
              <Slider {...settings}>
                {this.imageRepeater()}
              </Slider>
              <div className="info">
                <h5>{this.state.content.title}</h5>
              </div>
            </div>

            <hr/>

            <p>
              {ReactHtmlParser(this.state.content.body)}
            </p>
          </div>
        </div>
        :
        ''
      }
      </div>
    )
  }
}