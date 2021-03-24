import React, {Component} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './SocialMedia.scss';
import { GetSocialMedias } from '../../Actions/GetSocialMedia'
import { Helmet } from 'react-helmet'

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
import ae from '../../language.json';

const la = ae[localStorage.lang];
export default class SocialMedia extends Component {
  constructor(props) {
    super(props)
    this.Follow = this.Follow.bind(this);
    this.state = {
      location: null,
      social: null
    };
  }

  componentDidMount = async() => {
    let getSocial = null;
    getSocial= await GetSocialMedias(localStorage.langid)

    this.setState({social : getSocial})
  }
  followinner (e) {
    const follow = [];

    for (let i = 0; i < e.length; i++) {
      follow.push(
        <Dropdown.Item href={'http://'+e[i].link}>{e[i].name}</Dropdown.Item>
      )
    }


    return follow;
  }

  Follow = () => {

    if(this.state.social !== null){
      const follow = [];

      for (let i = 0; i < this.state.social.length; i++) {
        follow.push(
          <DropdownButton id={this.state.social[i].socialMediaTypeName}  title={
            <img src={this.state.social[i].socialMediaTypeImageUrl} />
          }>
            {this.followinner(this.state.social[i].socialMedias)}
          </DropdownButton>
        )
      }
  
      return follow;
    }

  }
  Share = () => {
    if(this.state.location !== window.location.href) {
      this.setState({location: window.location.href})
    }

    const follow = <div>
      <FacebookShareButton 
        title={this.props.data.title}
        url={this.state.location}>
          <FacebookIcon size={36} />
      </FacebookShareButton>
      <LinkedinShareButton 
        title={this.props.data.title}
        url={this.state.location}>
          <LinkedinIcon size={36} />
      </LinkedinShareButton>
      <TwitterShareButton 
        title={this.props.data.title}
        url={this.state.location}>
          <TwitterIcon size={36} />
      </TwitterShareButton>
      <WhatsappShareButton 
        title={this.props.data.title}
        url={this.state.location}>
          <WhatsappIcon size={36} />
      </WhatsappShareButton>
    </div>; 

    return follow;
  }
  render() {

    return (
      <div className="SocialMedia">
        { this.props.data !== undefined ?
          <Helmet>
            <title>{this.props.data.title}</title>
            <meta name="description"        content={this.props.data.listDescription} />
            <meta property="og:title"       content={this.props.data.title} />
            <meta property="og:description" content={this.props.data.listDescription} />
          </Helmet>
        :
          ''
        }

        <h5>{la.allsite.title[37]}</h5>

        {this.props.Follow ? (
          <div className="social-media">
            {this.Follow()}
          </div>
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