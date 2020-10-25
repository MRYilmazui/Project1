import React, {Component} from 'react';
import languageJson from '../../language.json';
import './Search.scss';


const lng = languageJson[localStorage.lang];

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displaySearch: 'd-none',
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  clickableSearch(param) {
    if(this.state.displaySearch == '' ){
      this.setState({displaySearch: ' d-none'})
    } else {
      this.setState({displaySearch: ''})
    }
  }
  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }
  keyDownEnter = (e) => {
    if (e.key === 'Enter') {
      window.location.pathname = '/'+ lng.mainurl.title[6] + '&=' + this.state.searchValue
    }
  }
  render() {

    return (
      <div className="Search">
        <a href="javascript:void(0)" className="search-icon" onClick={() => this.clickableSearch()}></a>

        <div className={'search-details ' + this.state.displaySearch}>
          <div className="search-input">
            <input type="text" name="" id="" value={this.state.searchValue} onChange={this.handleChange} onKeyDown={this.keyDownEnter}/>
          </div>

          <div className="overlay"  onClick={() => this.clickableSearch()}></div>
        </div>
      </div>
    )
  }
}