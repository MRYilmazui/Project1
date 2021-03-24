import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './PriceList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import NumberFormat from 'react-number-format';

import { Helmet } from 'react-helmet'
import { GetPriceListF } from '../../Actions/GetPriceList'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery'

export default class PriceList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PriceList: null,
      ModalDetails : null
    }
  }
  TableRepeater (e) {
    const NewsSlider = [];
    debugger;

    if (this.state.PriceList.priceses.length !== 0) {

      for (let i = 0; i < this.state.PriceList.priceses.length; i++) {
        if(this.state.PriceList.priceses[i].isSpecial === true){
          NewsSlider.push(

            <tr id={this.state.PriceList.priceses[i].id} className="notSpecial">
              <td>
                <div className="img">
                  { this.state.PriceList.priceses[i].vehicleImageUrl !== null ?
                      <img src={this.state.PriceList.priceses[i].vehicleImageUrl} alt=""/>
                    :
                      ''
                  } 
                </div>
                <span>
                {this.state.PriceList.priceses[i].model}
                </span>
                <i>
                  {this.state.PriceList.priceses[i].modelShortName}
                </i>
              </td>
              <td>{this.state.PriceList.priceses[i].productType}</td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].taxFree} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].otv} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].kdv} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].kdV_OTV} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                {this.state.PriceList.priceses[i].currencyUnit}
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="moreButton">
                    Dropdown Button
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <span className='footerBottom2' onClick={()=>this.modalDetailsFullfilled(this.state.PriceList.priceses[i])}>Ödeme Koşulları</span>
                    <a href={this.state.PriceList.priceses[i].brochureUrl} class="brochure" download>
                      Broşür İndir
                    </a>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
                  
                
          )
        } else {
          NewsSlider.push(

            <tr id={this.state.PriceList.priceses[i].id} className="special">
              <td>
                <div className="img">
                  { this.state.PriceList.priceses[i].vehicleImageUrl !== null ?
                      <img src={this.state.PriceList.priceses[i].vehicleImageUrl} alt=""/>
                    :
                      ''
                  } 
                </div>
                <span>
                {this.state.PriceList.priceses[i].model}
                </span>
                <i>
                  {this.state.PriceList.priceses[i].modelShortName}
                </i>
              </td>
              <td>{this.state.PriceList.priceses[i].productType}</td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].taxFree} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].otv} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].kdv} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <NumberFormat value={this.state.PriceList.priceses[i].kdV_OTV} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <div>{value}</div>} />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="moreButton">
                    Dropdown Button
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <span className='footerBottom2' onClick={()=>this.modalDetailsFullfilled(this.state.PriceList.priceses[i])}>Ödeme Koşulları</span>
                    <a href={this.state.PriceList.priceses[i].brochureUrl} class="brochure" download>
                      Broşür İndir
                    </a>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
                  
                
          )
        }

      }
    } else {
      NewsSlider.push(
        <div className="slide">
          <div>
            <img src={this.state.GetAnnouncementDetailsPage.imageUrl} alt=""/>
          </div>
        </div>
      )
    }


    return NewsSlider;
  }

  modalDetailsFullfilled (e) {

    if(e !== null && e !== undefined){
      this.setState({modalDetailsFullfilled: e.paymentPlan})
    }
  }
  
  componentDidMount = async() => {
    let priceList = await GetPriceListF(localStorage.langid, '1')
    this.setState({PriceList : priceList})

    if(priceList === null) {
      return window.location.pathname = '/'
    }
    
    $('.overlay').click(function(){
      $('.AnnouncementDetails').removeClass('active-popup')
      $('.popup-details2').addClass('d-none')
    })
    
    $(document).on('click','.footerBottom2', function(){
      $('.AnnouncementDetails').addClass('active-popup')
      $('.popup-details2').removeClass('d-none')
    })
        
    $(document).on('click','.specialPrice', function(){

      if(document.getElementsByClassName('specialPrice')[0].innerText === 'Normal Fiyat Listesi'){
        $('.specialPrice').text('Özel Fiyat Listesi')
      } else {
        $('.specialPrice').text('Normal Fiyat Listesi')
      }
      $('.price-content').toggleClass('specialPriceList')
    })
  }
  componentDidUpdate = async() => {
    let priceList = await GetPriceListF(localStorage.langid, '1')

    if(this.state.PriceList.footNote.id !== priceList.footNote.id) {
      this.setState({PriceList : priceList})
    }

    if(priceList === null) {
      return window.location.pathname = '/'
    }
    
    $('.overlay').click(function(){
      $('.popup-details2').addClass('d-none')
    })
    
    $(document).on('click','.footerBottom2', function(){
      $('.popup-details2').removeClass('d-none')
    })
  }

  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div className="AnnouncementDetails">
        {this.state.PriceList !== null
        ?  
          <div className="container animate__animated animate__fadeIn animate__fast">
            <Helmet>
              <title>{'Fiyat Listesi'}</title>
            </Helmet>
            
            <Slider {...settings}>
              
            </Slider>

            <table className="table table-borderless price-content table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Model (TL)</th>
                    <th scope="col">Model Tipi (TL)</th>
                    <th scope="col">Vergi (TL)</th>
                    <th scope="col">ÖTV (TL)</th>
                    <th scope="col">KDV (TL)</th>
                    <th scope="col">KDV & ÖTV (TL)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.TableRepeater()}
                </tbody>
              </table>
            <a href="javascript:void(0)" className='specialPrice' onClick={this.TableRepeater('Special')}>Özel Fiyat Listesi</a>

          </div>
         : ''
        }

        <div className="popup-details2 Subpage d-none">
          <ul class="tabs" role="tablist">
            {this.state.PriceList !== null
            ? 
            <div>
              {
                this.state.modalDetailsFullfilled !== null 
                && 
                this.state.modalDetailsFullfilled !== undefined ? 
                  ReactHtmlParser(this.state.modalDetailsFullfilled)
                :
                  ''}
              {ReactHtmlParser(this.state.PriceList.footNote.body)}
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