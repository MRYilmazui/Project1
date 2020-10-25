import React, {Component} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './SocialMedia.scss';

import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

export default class SocialMedia extends Component {
  constructor(props) {
    super(props)
    this.Follow = this.Follow.bind(this);
    this.state = {
      location: null
    };
  }

  Follow = () => {
    const follow = <div className="social-media">
      <a href="javascript:void(0)" id="youtube"></a>
      <a href="javascript:void(0)" id="instagram"></a>
      <DropdownButton id={'twitter'} title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <a href="javascript:void(0)" id="linkedin"></a>
      <a href="javascript:void(0)" id="facebook"></a>
    </div>;

    return follow;
  }
  Share = () => {
    if(this.state.location !== window.location.href) {
      this.setState({location: window.location.href})
    }
    const follow = <div>
      <FacebookShareButton 
        url={this.state.location}>
          <FacebookIcon size={36} />
      </FacebookShareButton>
      <LinkedinShareButton url={this.state.location}>
          <LinkedinIcon size={36} />
      </LinkedinShareButton>
      <TwitterShareButton url={this.state.location}>
          <TwitterIcon size={36} />
      </TwitterShareButton>
      <WhatsappShareButton url={this.state.location}>
          <WhatsappIcon size={36} />
      </WhatsappShareButton>
    </div>; 

    return follow;
  }
  render() {

    return (
      <div className="SocialMedia">
        <h5>Social Media</h5>

        {this.props.Follow ? (
          this.Follow()
        ) : (
          this.Share()
        )}

        <div className="follow">
        </div>
        <div className="share">

        </div>
      </div>
    )
  }
}