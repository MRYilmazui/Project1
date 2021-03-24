import React, {Component} from 'react';
import SlideImage from '../../Assets/img/image_4.png';
import SlideImage2 from '../../Assets/img/nopath.png';
import './Subpage.scss';
import BreadCrumbNav from '../../Components/BreadCrumbNav/BreadCrumbNav'
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet'
import data from '../../newLanguage.json';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {Dropdown, DropdownButton} from 'react-bootstrap'
import SubCategories from '../../Components/SubCategories/SubCategories';
import SubPosts from '../../Components/SubPosts/SubPosts';
import { GetGeneralContents } from '../../Actions/GetGeneralContents'
import { GetSubNavigationPage } from '../../Actions/GetSubNavigationPages'
import { GetGeneralContentPreviews } from '../../Actions/GetGeneralContentsPreview'
import Slider from "react-slick";
import { render } from '@testing-library/react';

import findValue from '../../Components/FindValue/findValue'
import img1 from '../../Assets/img/rectangle_72.png'
import img2 from '../../Assets/img/rectangle_78.png'
import img3 from '../../Assets/img/group_298.png'

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
import { GetSubNavigationPages } from '../../Services/config';

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
      subpagesList : null
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
    let getSubpageLists = null;

    let name = '';
    let pageValue = ''

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

    if(this.props.match.params.pagename === undefined) {
      this.name = this.props.match.url.split('/')[1]
    }

    if(this.name === lang[6].mainurl.title[8]) {
      pageValue = findValue(lang, this.name, this.props.match.params.pagename)
    } else {
      pageValue = findValue(lang, this.name, undefined, this.props.match.url)
    }

    if(window.location.href.split('previewId=')[1] !== undefined){
      GetGeneralContentsPage= await GetGeneralContentsPreviews(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      this.setState({content : GetGeneralContentsPage})
    } else {
      GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      getSubpageLists = await GetSubNavigationPage(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      this.setState({subpagesList : getSubpageLists})
      this.setState({content : GetGeneralContentsPage})
    }

    if(GetGeneralContentsPage === null) {
      return window.location.pathname = '/'
    }

  }
  componentDidUpdate = async(prevProps, prevState, snapshot) => {
    let GetGeneralContentsPage = null;
    let getSubpageLists = null;
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
      pageValue = findValue(lang, this.name, undefined, this.props.match.url)
    }

    if(prevProps.location.pathname !== window.location.pathname){

      if(window.location.href.split('previewId=')[1] !== undefined){
        GetGeneralContentsPage= await GetGeneralContentsPreviews(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
        this.setState({content : GetGeneralContentsPage})
      } else {
        GetGeneralContentsPage= await GetGeneralContents(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
        getSubpageLists = await GetSubNavigationPage(localStorage.langid, pageValue, window.location.href.split('previewId=')[1])
      }
  
      if(this.state.content.id !== GetGeneralContentsPage.id){
        this.setState({content : GetGeneralContentsPage})
        this.setState({subpagesList : getSubpageLists})
  
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
  loop () {
    var language = "tr";
    var query = window.location.pathname;
    var breadCrumb = '';

    if(this.state.subpagesList.subPages !== undefined) {

      for (let i = 0; i < this.state.subpagesList.subPages.length; i++) {
        breadCrumb += "<div class='subcategoriesDetails'><a href='"+ this.state.subpagesList.subPages[i].url +"'><img src='"+ this.state.subpagesList.subPages[i].imageURL +"' /></a><a href='"+ this.state.subpagesList.subPages[i].url +"'>"  + this.state.subpagesList.subPages[i].name + "</a></div>";
      }
    }

    // if (language == "tr") {
    //     for (var i = 0; i < data.tr.length; i++) {
    //         if (data.tr[i].link == query) {

    //             for (let z = 0; z < data.tr[i].sub.length; z++) {
    //               breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.tr[i].sub[z].value +".png' /><a href='"+ data.tr[i].sub[z].link +"'>"  + data.tr[i].sub[z].name + "</a></div>";
    //             }
    //         }
    //         else {
    //             if (data.tr[i].sub != null) {
    //                 for (var k = 0; k < data.tr[i].sub.length; k++) {
    //                     if (data.tr[i].sub[k].link == query && data.tr[i].sub[k].sub !== null) {
    //                         for (let z = 0; z < data.tr[i].sub[k].sub.length; z++) {
    //                           breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.tr[i].sub[k].sub[z].value +".png' /><a href="+ data.tr[i].sub[k].sub[z].link +">"  + data.tr[i].sub[k].sub[z].name + "</a></div>"
    //                         }
    //                     }
    //                     else {
    //                         if (data.tr[i].sub[k].sub != null) {
    //                             for (var s = 0; s < data.tr[i].sub[k].sub.length; s++) {
    //                                 if (data.tr[i].sub[k].sub[s].link == query && data.tr[i].sub[k].sub[s].sub !== null) {
                                      
    //                                   for (let z = 0; z < data.tr[i].sub[k].sub[s].sub.length; z++) {
    //                                     breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.tr[i].sub[k].sub[s].sub[z].value +".png' /><a href="+ data.tr[i].sub[k].sub[s].sub[z].link +">"  + data.tr[i].sub[k].sub[s].sub[z].name + "</a></div>"
    //                                   }
    //                                 }
    //                                 else {
    //                                     if (data.tr[i].sub[k].sub[s].sub != null) {
    //                                         for (var y = 0; y < data.tr[i].sub[k].sub[s].sub.length; y++) {
    //                                             if (data.tr[i].sub[k].sub[s].sub[y].link == query) {
                                                  
    //                                               for (let z = 0; z < data.tr[i].sub[k].sub[s].sub[y].length; z++) {
    //                                                 breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.tr[i].sub[k].sub[s].sub[y].value +".png' /><a href="+ data.tr[i].sub[k].sub[s].sub[y].link +">"  + data.tr[i].sub[k].sub[s].sub[y].sub[z].name + "</a></div>"
    //                                               }
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // else {
    //   for (var i = 0; i < data.en.length; i++) {
    //     if (data.en[i].link == query) {

    //         for (let z = 0; z < data.en[i].sub.length; z++) {
    //           breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.tr[i].sub[z].value +".png' /><a href='"+ data.en[i].sub[z].link +"'>"  + data.en[i].sub[z].name + "</a></div>";
    //         }
    //     }
    //     else {
    //         if (data.en[i].sub != null) {
    //             for (var k = 0; k < data.en[i].sub.length; k++) {
    //                 if (data.en[i].sub[k].link == query && data.tr[i].sub[k].sub !== null) {
    //                   for (let z = 0; z < data.en[i].sub[k].sub.length; z++) {
    //                       breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.en[i].sub[k].sub[z].value +".png' /><a href="+ data.en[i].sub[k].sub[z].link +">"  + data.en[i].sub[k].sub[z].name + "</a></div>"
    //                     }
    //                 }
    //                 else {
    //                     if (data.en[i].sub[k].sub != null) {
    //                         for (var s = 0; s < data.en[i].sub[k].sub.length; s++) {
    //                             if (data.en[i].sub[k].sub[s].link == query && data.en[i].sub[k].sub[s].sub !== null) {
                                  
    //                               for (let z = 0; z < data.en[i].sub[k].sub[s].sub.length; z++) {
    //                                 breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.en[i].sub[k].sub[s].sub[z].value +".png' /><a href="+ data.en[i].sub[k].sub[s].sub[z].link +">"  + data.en[i].sub[k].sub[s].sub[z].name + "</a></div>"
    //                               }
    //                             }
    //                             else {
    //                                 if (data.en[i].sub[k].sub[s].sub != null) {
    //                                     for (var y = 0; y < data.en[i].sub[k].sub[s].sub.length; y++) {
    //                                         if (data.en[i].sub[k].sub[s].sub[y].link == query) {
                                              
    //                                           for (let z = 0; z < data.en[i].sub[k].sub[s].sub[y].length; z++) {
    //                                             breadCrumb += " <div class='subcategoriesDetails'><img src='https://pcorpblobbackupstorage.blob.core.windows.net/pcorpblob/pagenavigation/"+ data.en[i].sub[k].sub[s].sub[y].value +".png' /><a href="+ data.en[i].sub[k].sub[s].sub[y].link +">"  + data.en[i].sub[k].sub[s].sub[y].sub[z].name + "</a></div>"
    //                                           }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //   }
    // }
    return breadCrumb
  }

  download () {
    const table = document.getElementsByClassName('table table-borderless')[0]

    html2canvas(table)
    .then((canvas) => {
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
        <div className="container animate__animated animate__fadeInRight animate__fast">
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

            <p className="subDetailsp">
              {ReactHtmlParser(this.state.content.body)}
            </p>

            <div className="clearfix">

            </div>
            <div className="thisCategoriesTotal">
              {ReactHtmlParser(this.loop())}
            </div>

            <div className="d-none">
              <div class="image-container">
                <img src={img1} alt="" />
              </div>
              <div className="text-important">
                <span>Lorem ipsum dolor sit amet</span>
                <div className="clearfix"></div>
                <span>Lorem ipsum dolor sit Lorem ipsum dolor sit amet</span>
              </div>
              <div className="about-block">
                <div className="col-lg-6 float-left pl-0">
                  <img src={img1} alt=""/>
                </div>
                <div className="col-lg-4 float-left pr-0">
                  <h5>Hakkımızda</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque esse soluta cum recusandae corrupti, totam sint autem tempora explicabo! Vel officiis repellendus voluptatibus enim beatae ad exercitationem necessitatibus doloremque?
                  </p>
                </div>
              </div>
              <div className="important-text">
                1967 yılında Daimler-Benz AG’nin % 36 ortaklığı ile Otomarsan unvanıyla İstanbul Davutpaşa’da kurulmuştur. 
              </div>
              <div class="mainposts animate__animated star animate__fast star animate__fadeInRight">
                <div class="MainPosts">
                <a href="http://www.google.com" class="col-lg-6 float-left pl-0">
                    <img src="https://tcorpblobbackupstorage.blob.core.windows.net/tcorpblob/img3_2020-11-0520201105T232032505.png" alt="" />
                      <span class="post-title">
                        <i>Hedeflerimiz</i>
                      </span>
                      <p class="post-desc">Bu bizim misyonumuz ve bizi motive eden ve bizi farklı bölümler ve markalar arasında birleştiren şeydir.</p>
                  </a>
                  <a href="http://www.google.com" class="col-lg-6 float-left pl-0">
                    <img src="https://tcorpblobbackupstorage.blob.core.windows.net/tcorpblob/img3_2020-11-0520201105T232032505.png" alt="" />
                      <span class="post-title">
                        <i>Hedeflerimiz</i>
                      </span>
                      <p class="post-desc">Bu bizim misyonumuz ve bizi motive eden ve bizi farklı bölümler ve markalar arasında birleştiren şeydir.</p>
                  </a>
                </div>
              </div>

              <div className="table-info table table-borderless price-content table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Lokasyon</th>
                      <th scope="col">İletişim</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr id="3135852f-cb2a-4a52-7353-08d87672adce" class="notSpecial">
                    <td>
                      Genel Merkez
                    </td>
                    <td>
                      Akçaburgaz Mah. Süleyman Şah Cad. No:2 34522 Esenyurt/İstanbul
                      <br/>
                      <b>Telefon :</b> 0 (212) 867 30 00<br/>
                      <b>Fax :</b> 0 (212) 867 44 00
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div className="persons">
                <div className="img float-left col-lg-4">
                  <img src={img2} alt=""/>
                </div>
                <div className="info-person float-left col-lg-8">
                  <h5>Mehmet Lorem</h5>
                  <i>Kamyon Satış Sonrası Hizmetler Pazarlama Grup Müdürü</i>
                  <p>
                      Çocuk yaşlarda odamın duvarlarını resimleriyle süslediğim bir markanın parçası olmak, tarifsiz bir duygu. 2003’te Otobüs Satış Sonrası Hizmetler departmanında Servis Mühendisi olarak işe başladım. Çalışanlarını kucaklayan ve gelişmeye teşvik eden Mercedes-Benz Türk benim için ikinci bir aile oldu. Bu duygu bağı, sorumluluk almak için cesaret ve daha iyisini başarmak için güç verdi.
                  </p>
                </div>
              </div>
              <div className="persons right-person">
                <div className="img float-left col-lg-4">
                  <img src={img2} alt=""/>
                </div>
                <div className="info-person float-left col-lg-8">
                  <h5>Mehmet Lorem</h5>
                  <i>Kamyon Satış Sonrası Hizmetler Pazarlama Grup Müdürü</i>
                  <p>
                      Çocuk yaşlarda odamın duvarlarını resimleriyle süslediğim bir markanın parçası olmak, tarifsiz bir duygu. 2003’te Otobüs Satış Sonrası Hizmetler departmanında Servis Mühendisi olarak işe başladım. Çalışanlarını kucaklayan ve gelişmeye teşvik eden Mercedes-Benz Türk benim için ikinci bir aile oldu. Bu duygu bağı, sorumluluk almak için cesaret ve daha iyisini başarmak için güç verdi.
                  </p>
                </div>
              </div>

              <div className="maddeler">
                <b>Neden Biz ?</b>
                <ul>
                  <li>
                  Çalışan deneyimi ve dijitalleşmeyi çalışmalarımızın odak noktasına koyarak modern İnsan Kaynakları uygulamalarını hayata geçirmek
                  </li>
                  <li>
                  Çalışan deneyimi ve dijitalleşmeyi çalışmalarımızın odak noktasına koyarak modern İnsan Kaynakları uygulamalarını hayata geçirmek
                  </li>
                  <li>
                  Çalışan deneyimi ve dijitalleşmeyi çalışmalarımızın odak noktasına koyarak modern İnsan Kaynakları uygulamalarını hayata geçirmek
                  </li>
                  <li>
                  Çalışan deneyimi ve dijitalleşmeyi çalışmalarımızın odak noktasına koyarak modern İnsan Kaynakları uygulamalarını hayata geçirmek
                  </li>
                </ul>
              </div>

              <div className="important-category">
                <h5>Dürüstlük</h5>
                <img src={img1} alt=""/>
                <p>
                Davranışlarımızın temelini dürüstlük, adalet ve güvenilirlik oluşturur. Yüksek ahlaki değerlere her durumda kayıtsız şartsız bağlıyız. Sözümüzü tutarız. Karşılıklı güvene dayanan ortaklıklara değer veririz. Sorumluluk üstlenir, birlikte verilen kararları savunuruz. Başarının gururunu paylaşırken hataların da sorumluluğunu üstlenir bu hataların düzeltilmesi için birbirimize destek oluruz. Süreklilik ilkesi bize yol gösterir. Şirketin karlı büyümesiyle topluma ve çevreye karşı sorumluluğumuzun gereklerini aynı zamanda gerçekleştirmeye çalışırız.
                </p>
              </div>
            </div>
          </div>
        </div>
        :
        ''
      }
      </div>
    )
  }
}