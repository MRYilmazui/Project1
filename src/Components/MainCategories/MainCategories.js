import React, {Component} from 'react';
import './MainCategories.scss';

export default class MainCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    return (
      <div className="MainCategories">

        <div className="category col-lg-6 float-left pl-0 pr-0">
          <a href={this.props.data.sectionTwoLeftRedirectUrl}>
            <img src={this.props.data.sectionTwoLeftImageUrl} alt=""/>
            <span className="categories-title">
              <i>
                {this.props.data.sectionTwoLeftTitle}
              </i>
            </span>
          </a>
        </div>
        <div className="category col-lg-6 float-left pl-0 pr-0">
          <a href={this.props.data.sectionTwoRightRedirectUrl}>
            <img src={this.props.data.sectionTwoRightImageUrl} alt=""/>
            <span className="categories-title">
              <i>
                {this.props.data.sectionTwoRightTitle}
              </i>
            </span>
          </a>
        </div>
        
      </div>
    )
  }
}