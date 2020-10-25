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
  repeater () {
    const NewsSlider = [];

    for (let i = 0; i < this.state.result.length; i++) {
      NewsSlider.push(
        <a href="" className="search-item">
          <img src={this.state.result[i].imageUrl} alt=""/>
          <h4>{this.state.result[i].title}</h4>
          <p>{this.state.result[i].description}</p>
        </a>
      )
    }

    return NewsSlider;
  }
  componentDidMount = async() => {
    let getResult = await SearchResult(localStorage.langid, this.props.match.params.searchText)
    this.setState({result : getResult})
  }
  render() {
    
    return (
      <div className="SearchDetails">
        <div className="container">
          <h5>Arama Sonuçları</h5>
          {this.state.result !== null
          ?  
            this.repeater()
          :
            ''
          }
        </div>
      </div>
    )
  }
}