import React, {Component} from 'react';
import './Loader.scss';

export default class Loader extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    return (
      <div className="Loader">
        <div id="loader"></div>
      </div>
    )
  }
}