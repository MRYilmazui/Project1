import React, {Component} from 'react';
import './SliderComp.scss';
import SlideImage from '../../Assets/img/slide-img.png';
import SlideImage2 from '../../Assets/img/img7.png';

import Slider from "react-slick";

export default class SliderComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0
    };
  }
  getButton (e) {
    let a = [];

    if(e !== null){

      a.push(
        <a href={e}>Detaylar</a>
      )
    } else {
      a.push(
        <a href={e} class="nullElementSlider"></a>
      )
    }


    return a;
  }
  
  sliderBuild () {
    const slider = [];

    for (let i = 0; i < this.props.data.length; i++) {
      if(this.props.data[i].videoUrl === null) {
        slider.push(
          <div>
            <a href={this.props.data[i].redirectUrl}>
              <img src={this.props.data[i].imageUrl} alt=""/>
            </a>
            <div className="desc">
              <div className="title">
              {this.props.data[i].title}
              </div>
              <p>{this.props.data[i].description}</p>
              
            </div>
          </div>
        )
      } else {
        slider.push(
          <div>
            <iframe width="100%" src={this.props.data[i].videoUrl + "?modestbranding=1"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        )
      }
    }

    return slider
  }
  render() {
    const settings = {
        dots: false,
        fade: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        focusOnSelect: false,
        adaptiveHeight: true,
        touchMove: true,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    return (
      <div className="SliderComp animate__animated animate__fadeIn animate__fast star">
        <div className="blurbg" style={{background: "url("+ this.props.data[this.state.activeSlide].imageUrl +")"}}></div>
        <div className="container ">
          <Slider {...settings}>
            {this.sliderBuild()}
          </Slider>
        </div>
      </div>
    )
  }
}