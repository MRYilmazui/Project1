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

import links from '../../links.json';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery'

import ae from '../../language.json';

const la = ae[localStorage.lang];

export default class PriceList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PriceList: null,
      ModalDetails : null,
      thisLink: null,
      thisLinkSpecial: null,
      thisPage: null
    }
  }
  TableRepeater (e) {
    const NewsSlider = [];
    let value = this.props.match.path.split('/')[2];
    if (this.state.PriceList.priceses.length !== 0) {
      if(value === 'Kamyon' || value === 'Truck'){
        if(this.state.thisLink !== links.links[0].link) {
          this.setState({thisLink: links.links[0].link})
          this.setState({thisLinkSpecial: links.links[1].link})
        }
      } else {
        if(this.state.thisLink !== links.links[2].link) {
          this.setState({thisLink: links.links[2].link})
          this.setState({thisLinkSpecial: links.links[3].link})
        }
      }
      
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
              <td width="180px">
                
                {
                  this.state.PriceList.priceses[i].paymentPlan !== null || this.state.PriceList.priceses[i].contactFormUrl !== null || this.state.PriceList.priceses[i].hardwarePriceUrl !== null ?
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="moreButton">
                        Dropdown Button
                      </Dropdown.Toggle>
      
                      <Dropdown.Menu>
                        { this.state.PriceList.priceses[i].paymentPlan !== null ?
                            <span className='footerBottom2' onClick={()=>this.modalDetailsFullfilled(this.state.PriceList.priceses[i])}>{la.allsite.title[13]}</span>
                          :
                            ''
                        }
                        { this.state.PriceList.priceses[i].contactFormUrl !== null ?
                            <a href={this.state.PriceList.priceses[i].contactFormUrl} className='footerBottom2'>{la.allsite.title[14]}</a>
                          :
                            ''
                        }
                        { this.state.PriceList.priceses[i].hardwarePriceUrl !== null ?
                            <a href={this.state.PriceList.priceses[i].hardwarePriceUrl} className='footerBottom2'>{la.allsite.title[15]}</a>
                          :
                            ''
                        }
                        
                      </Dropdown.Menu>
                    </Dropdown>
                  :
                    ''
                }
                {
                    this.state.PriceList.priceses[i].brochureUrl !== null ?
                  <a href={this.state.PriceList.priceses[i].brochureUrl} class="brochure" download>
                  </a>
                :
                  ''
                }
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
              <td width="180px">
                
                {
                  this.state.PriceList.priceses[i].paymentPlan !== null || this.state.PriceList.priceses[i].contactFormUrl !== null || this.state.PriceList.priceses[i].hardwarePriceUrl !== null ?
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="moreButton">
                        Dropdown Button
                      </Dropdown.Toggle>
      
                      <Dropdown.Menu>
                        { this.state.PriceList.priceses[i].paymentPlan !== null ?
                            <span className='footerBottom2' onClick={()=>this.modalDetailsFullfilled(this.state.PriceList.priceses[i])}>{la.allsite.title[13]}</span>
                          :
                            ''
                        }
                        { this.state.PriceList.priceses[i].contactFormUrl !== null ?
                            <a href={this.state.PriceList.priceses[i].contactFormUrl} className='footerBottom22'>{la.allsite.title[14]}</a>
                          :
                            ''
                        }
                        { this.state.PriceList.priceses[i].hardwarePriceUrl !== null ?
                            <a href={this.state.PriceList.priceses[i].hardwarePriceUrl} className='footerBottom22'>{la.allsite.title[15]}</a>
                          :
                            ''
                        }
                        
                      </Dropdown.Menu>
                    </Dropdown>
                  :
                    ''
                }
                {
                    this.state.PriceList.priceses[i].brochureUrl !== null ?
                  <a href={this.state.PriceList.priceses[i].brochureUrl} class="brochure" download>
                    
                  </a>
                :
                  ''
                }
              </td>
            </tr>
                  
                
          )
        }

      }
    } else {
      
  }


    return NewsSlider;
  }

  modalDetailsFullfilled (e) {

    if(e !== null && e !== undefined){
      this.setState({modalDetailsFullfilled: e.paymentPlan})
    }
  }
  
  componentDidMount = async() => {
    let value = this.props.match.path.split('/')[2];
    let Lastvalue = null

    if(value === 'Kamyon' || value === 'Truck'){
      Lastvalue = '1'
      this.setState({thisPage: 'Kamyon'})
      this.setState({thisLink: links.links[1].link})
        this.setState({thisLinkSpecial: links.links[2].link})
    } else {
      Lastvalue = '2'
      this.setState({thisPage: 'Otobüs'})
      this.setState({thisLink: links.links[2].link})
        this.setState({thisLinkSpecial: links.links[3].link})
    }

    let priceList = await GetPriceListF(localStorage.langid, Lastvalue)
    this.setState({PriceList : priceList})

    if(priceList.priceses.length === 0) {
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
    let value = this.props.match.path.split('/')[2];
    let Lastvalue = null
    if(value === 'Kamyon' || value === 'Truck'){
      Lastvalue = '1'
    } else {
      Lastvalue = '2'
    }
    let priceList = await GetPriceListF(localStorage.langid, Lastvalue)
    
    if(value !== this.state.thisPage) {

      this.setState({PriceList : priceList})
      this.setState({thisPage: value})
      if(value === 'Kamyon' || value === 'Truck'){
        this.setState({thisLink: links.links[0].link})
        this.setState({thisLinkSpecial: links.links[1].link})
      } else {
        this.setState({thisLink: links.links[2].link})
        this.setState({thisLinkSpecial: links.links[3].link})
      }
      this.TableRepeater()
    }

    if(priceList.priceses.length === 0) {
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
                  <th scope="col">Model</th>
                  <th scope="col">{la.allsite.title[0]}</th>
                  <th scope="col">{la.allsite.title[1]}</th>
                  <th scope="col">{la.allsite.title[2]}</th>
                  <th scope="col">{la.allsite.title[3]}</th>
                  <th scope="col">{la.allsite.title[4]}</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.TableRepeater()}
              </tbody>
            </table>
            <a href={this.state.thisLink}>{la.allsite.title[43]}</a>
            <a href={this.state.thisLinkSpecial}>{la.allsite.title[43]}</a>
            <a href="javascript:void(0)" className='specialPrice' onClick={()=>this.TableRepeater('Special')}>{la.allsite.title[44]}</a>

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