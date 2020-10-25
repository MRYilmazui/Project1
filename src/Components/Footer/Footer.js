import React, {Component} from 'react';
import Menu from '../../Components/Menu/Menu'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './Footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import { GetFooterDetails } from '../../Actions/GetFooterDetails'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {

      Footer: null
    }
  }

  footerLoop () {
    const footer = [];

    for (let i = 0; i < this.state.Footer.length; i++) {
      footer.push(
        <a href="" className="footer-item">
          {this.state.Footer[i].title}
        </a>
      )
    }

    return footer;
  }
  
  componentDidMount = async() => {
    let Footer = await GetFooterDetails(localStorage.langid)
    this.setState({Footer : Footer})
  }
  render() {
      
    return (
      <div className="Footer">
        {this.state.Footer !== null
        ? 
          <div className="container">
            <div className="col-lg-4 float-left">
              <h5>About Daimler Truck AG</h5>
              <p>Daimler Trucks & Buses is one of the world’s largest commercial vehicle manufacturers, with more than 35 primary locations around the world and around 100,000 employees. The company brings seven vehicle brands under one roof.</p>
            </div>
            <div className="col-lg-4 float-left">
              <h5>Navigasyon</h5>
              <Menu />
            </div>
            <div className="col-lg-4 float-left">
              <h5>Contact Us</h5>
              <p>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>

              <SocialMedia  Follow={true}/>
            </div>
            <div className="clearfix"></div>
            <div className="footerBottom">
              { this.footerLoop() }
            </div>
            <div className="copyright">
              © 2020 Daimler Truck AG. All Rights Reserved.
            </div>
          </div>
        : 
          ''
        }
      </div>
        
    )
  }
}