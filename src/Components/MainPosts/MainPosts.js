import React, {Component} from 'react';
import './MainPosts.scss';

import IMG from "../../Assets/img/img3.png";
import IMG2 from "../../Assets/img/img4.png";

export default class MainPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    return (
      <div className="MainPosts">
        <a href={this.props.data.sectionThreeLeftRedirectUrl} className="col-lg-6 float-left pl-0">

          <img src={this.props.data.sectionThreeLeftImageUrl} alt=""/>
          <span className="post-title">
            <i>{this.props.data.sectionThreeLeftTitle}</i>
          </span>
          <p className="post-desc">
            {this.props.data.sectionThreeLeftDescription}
          </p>
        </a>
        <a href={this.props.data.sectionThreeRightRedirectUrl} className="col-lg-6 float-left pl-0">

          <img src={this.props.data.sectionThreeRightImageUrl} alt=""/>
          <span className="post-title">
            <i>{this.props.data.sectionThreeRightTitle}</i>
          </span>
          <p className="post-desc">
            {this.props.data.sectionThreeRightDescription}
          </p>
        </a>
      </div>
    )
  }
}