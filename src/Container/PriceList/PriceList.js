import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import './PriceList.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Slider from "react-slick";
import AnnouncementSummary from '../../Components/AnnouncementSummary/AnnouncementSummary';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import {Dropdown, DropdownButton} from 'react-bootstrap'

import { GetPriceListF } from '../../Actions/GetPriceList'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class PriceList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PriceList: null
    }
  }
  TableRepeater () {
    const NewsSlider = [];

    if (this.state.PriceList.priceses.length !== 0) {
      debugger;

      for (let i = 0; i < this.state.PriceList.priceses.length; i++) {
        NewsSlider.push(

          <tr id={this.state.PriceList.priceses[i].id}>
            <td>
              <div className="img">
                <img src='' alt=""/>
              </div>
              <span>
              {this.state.PriceList.priceses[i].model}
              </span>
              <i>
                {this.state.PriceList.priceses[i].modelShortName}
              </i>
            </td>
            <td>{this.state.PriceList.priceses[i].productType}</td>
            <td>{this.state.PriceList.priceses[i].taxFree}</td>
            <td>{this.state.PriceList.priceses[i].otv}</td>
            <td>{this.state.PriceList.priceses[i].kdv}</td>
            <td>{this.state.PriceList.priceses[i].kdV_OTV}</td>
            <td>{this.state.PriceList.priceses[i].currencyUnit}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="moreButton">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Ödeme Koşulları</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
                
              
        )
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
  
  componentDidMount = async() => {
    let priceList = await GetPriceListF(localStorage.langid, '1')
    this.setState({PriceList : priceList})
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
          <div className="container">
            <BreadCrumbNav mainpage=""/>
            
            <Slider {...settings}>
              
            </Slider>

            <table className="table table-borderless price-content">
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Model Tipi</th>
                    <th scope="col">Vergi</th>
                    <th scope="col">ÖTV</th>
                    <th scope="col">KDV</th>
                    <th scope="col">KDV & ÖTV</th>
                    <th scope="col">Para Tipi</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.TableRepeater()}
                </tbody>
              </table>
          </div>
         : ''
        }
      </div>
    )
  }
}