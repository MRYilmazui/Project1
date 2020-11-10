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
    const pageValue = findValue(lang, this.name)

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
    const name = '';

    
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
    const pageValue = findValue(lang, this.name)


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
              <span className="d-none">
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

                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Collapsible Group Item #1
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Collapsible Group Item #2
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Collapsible Group Item #3
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>

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
                
                </span>
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