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
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';

import $ from 'jquery'

import languageJson from '../../language.json';
import language from '../../newLanguage.json';
import { GetRecalls } from '../../Actions/GetRecall';

const lng = languageJson[localStorage.lang];
const lang = language[localStorage.lang];

export default class Subpage extends Component {
constructor(props) {
    super(props)

    this.state = {
      displayMenu: '',
      content: null,
      Loader: false,
      success: false,
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);

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
  async postData (data) {
    const GetGeneralContentsPage = await GetRecalls(data);

    debugger;

    alertify.success('Accepted');

  }

  componentDidUpdate = async() => {
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
  async postData (data) {
    const GetGeneralContentsPage = await GetRecalls(data);

    if(GetGeneralContentsPage === null){
      alertify.error('Accepted');
    } else {
      alertify.success('Accepted');
    }


  }
  handleChange(event){
    this.setState({
      inputValue: event.target.value
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
        <div className="container sasi">
          <label htmlFor="">Şasi Numarası</label>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />

          <button onClick={()=>this.postData(this.state.inputValue)}>Gönder</button>
        </div>
      </div>
    )
  }
}