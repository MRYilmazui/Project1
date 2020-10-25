import React, {Component} from 'react';
import SlideImage from '../../Assets/img/slide-img.png';
import './Search.scss';

import { SearchResult } from '../../Actions/GetSearchResult'

export default class AnnouncementDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result : null
    }
  }
  imageRepeater () {
    const NewsSlider = [];

    for (let i = 0; i < this.state.result.length; i++) {
      NewsSlider.push(
        <a href="" className="search-item">
          <img src={SlideImage} alt=""/>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis, explicabo eaque consequuntur incidunt tempora accusamus laudantium laborum, praesentium ratione facere vel error repellendus! Optio hic dolore incidunt nesciunt laborum!</p>
        </a>
      )
    }

    return NewsSlider;
  }
  componentDidMount = async() => {
    debugger;
    let getResult = await SearchResult(localStorage.langid, this.props.match.params.searchText)
    this.setState({result : getResult})
  }
  render() {
    
    return (
      <div className="SearchDetails">
        <div className="container">
          <h5>Arama Sonuçları</h5>
          
          <a href="" className="search-item">
            <img src={SlideImage} alt=""/>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis, explicabo eaque consequuntur incidunt tempora accusamus laudantium laborum, praesentium ratione facere vel error repellendus! Optio hic dolore incidunt nesciunt laborum!</p>
          </a>
          <div className="search-item">
            <img src={SlideImage} alt=""/>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis, explicabo eaque consequuntur incidunt tempora accusamus laudantium laborum, praesentium ratione facere vel error repellendus! Optio hic dolore incidunt nesciunt laborum!</p>
          </div>
          <div className="search-item">
            <img src={SlideImage} alt=""/>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis, explicabo eaque consequuntur incidunt tempora accusamus laudantium laborum, praesentium ratione facere vel error repellendus! Optio hic dolore incidunt nesciunt laborum!</p>
          </div>
          <div className="search-item">
            <img src={SlideImage} alt=""/>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis, explicabo eaque consequuntur incidunt tempora accusamus laudantium laborum, praesentium ratione facere vel error repellendus! Optio hic dolore incidunt nesciunt laborum!</p>
          </div>
        </div>
      </div>
    )
  }
}