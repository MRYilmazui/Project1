import React, {Component} from 'react';
import './BreadCrumbNav.scss';

export default class BreadCrumbNav extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  renderLoop (e) {
    debugger

    const a = [] 

    if(e.length-1 === 0){
      a.push(
        ' / ' + e[0] + ' / '
      )
    } else {
      for (let i = 0; i < e.length-1; i++) {
        a.push(
          e[i]+' / '
        )
      }
    }

    return a
  }
  render() {

    return (
      <div className="BreadCrumbNav">
        Anasayfa  {this.renderLoop(this.props.mainpage)}  {this.props.title}
      </div>
    )
  }
}