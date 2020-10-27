import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import SlideImage2 from '../../Assets/img/nopath.png';
import './Subpage.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {Dropdown, DropdownButton} from 'react-bootstrap'
import SubCategories from '../../Components/SubCategories/SubCategories';
import SubPosts from '../../Components/SubPosts/SubPosts';
import { GetGeneralContents } from '../../Actions/GetGeneralContents'
import Slider from "react-slick";
import { render } from '@testing-library/react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import $ from 'jquery'

import languageJson from '../../language.json';
const lng = languageJson[localStorage.lang];

export default class Subpage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: '',
      content: null,
      Loader: false
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

  findValue() {
 
  }

  componentDidMount = async() => {
    let GetGeneralContentsPage = null;

    if(this.props.match.params.subpage !== undefined){
      GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, this.props.match.params.subpage)
    } else {
      GetGeneralContentsPage = await GetGeneralContents(localStorage.langid, this.props.match.params.pagename)
    }
    this.setState({content : GetGeneralContentsPage})

    
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

  componentDidUpdate = async() => {
    let GetGeneralContentsPage = null;

    if(this.props.match.params.subpage !== undefined){
      GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, this.props.match.params.subpage)
    } else {
      GetGeneralContentsPage = await GetGeneralContents(localStorage.langid, this.props.match.params.pagename)
    }
    if(this.state.content.id !== GetGeneralContentsPage.id) {
      this.setState({content : GetGeneralContentsPage})
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
        <div className="container">
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
              <ul class="tabs" role="tablist">
                <div>
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#tab-0" rel="nofollow">Site Haritası</a></li>
                      <li class=""><a href="#tab-1" rel="nofollow">Site Haritası</a></li>
                      <li class=""><a href="#tab-2" rel="nofollow">Yasal Uyarılar</a></li>
                      <li class=""><a href="#tab-3" rel="nofollow">Çerezler</a></li>
                      <li class=""><a href="#tab-4" rel="nofollow">Gizlilik</a></li>
                      <li class=""><a href="#tab-5" rel="nofollow">Bilgi Toplumu Hizmetleri</a></li>
                    </ul>
                    <div class="tab-content">
                      <div id="tab-0" >
                          <p>
                          <p><span>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span></p>
                          </p>
                      </div>
                      <div id="tab-1" >
                          <p>
                          <p><span >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span></p>
                          </p>
                      </div>
                      <div id="tab-2" >
                          <p>
                          <p><span >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span></p>
                          </p>
                      </div>
                      <div id="tab-3"x>
                          <p>
                          <p><span >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span></p>
                          </p>
                      </div>
                      <div id="tab-4" >
                          <p>
                          <p><span >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span>x</p>
                          </p>
                      </div>
                      <div id="tab-5" >
                          <p>
                          <p><span >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span></p>
                          </p>
                      </div>
                    </div>
                </div>
              </ul>
              <div>
                <button type="button" className="button" >
                  Controlled Popup
                </button>
                <Popup closeOnDocumentClick >
                  <div className="open-modal animate__animated animate__fadeInDown">
                    <a className="close" >
                      &times;
                    </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                    ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                    doloribus. Odit, aut.
                  </div>
                </Popup>
              </div>
              <table className="table table-borderless downloadable-content">
                <thead>
                  <tr>
                    <th scope="col">Kredi Miktarı</th>
                    <th scope="col">Vade</th>
                    <th scope="col">Aylık Ödeme(TL)</th>
                    <th scope="col">Toplam Ödeme(TL)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="doc"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                  <tr>
                    <td><span className="excel"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                  <tr>
                    <td><span className="pdf"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                  <tr>
                    <td><span className="jpg"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                  <tr>
                    <td><span className="ppt"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                  <tr>
                    <td><span className="zip"></span></td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td><button className="download-button">download</button></td>
                  </tr>
                </tbody>
              </table>

              <table className="table table-borderless price-content">
                <thead>
                  <tr>
                    <th scope="col">Kredi Miktarı</th>
                    <th scope="col">Vade</th>
                    <th scope="col">Aylık Ödeme(TL)</th>
                    <th scope="col">Toplam Ödeme(TL)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                      <div className="img">
                        <img src={SlideImage2} alt=""/>
                      </div>
                      <span>
                        Yeni E200D
                      </span>
                      <i>
                        Edition 1 Exclusive 
                      </i>
                    </td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
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
                  <tr>
                    <td>
                      <div className="img">
                        <img src={SlideImage2} alt=""/>
                      </div>
                      <span>
                        Yeni E200D
                      </span>
                      <i>
                        Edition 1 Exclusive 
                      </i>
                    </td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="moreButton">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img">
                        <img src={SlideImage2} alt=""/>
                      </div>
                      <span>
                        Yeni E200D
                      </span>
                      <i>
                        Edition 1 Exclusive 
                      </i>
                    </td>
                    <td>17.885</td>
                    <td>214.620</td>
                    <td>214.620</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="moreButton">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </p>
          </div>
        </div>
        : ''
      }
      </div>
    )
  }
}