import React, {Component} from 'react';
import './BreadCrumbNav.scss';
import $ from 'jquery'
import data from '../../newLanguage.json';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class BreadCrumbNav extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderLoop (e) {
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
  loop () {
        var language = "tr";
        var query = window.location.pathname;
        var breadCrumb = '';
        debugger;

        if (language == "tr") {
            breadCrumb += data.tr[0].name;

            for (var i = 0; i < data.tr.length; i++) {
                if (data.tr[i].link == query) {
                    breadCrumb += " / <a href='"+ data.tr[i].link +"'>"  + data.tr[i].name + "</a>";
                }
                else {
                    if (data.tr[i].sub != null) {
                        for (var k = 0; k < data.tr[i].sub.length; k++) {
                            if (data.tr[i].sub[k].link == query) {
                                breadCrumb += " / <a href="+ data.tr[i].link +">"  + data.tr[i].name + "</a>"
                                breadCrumb += " / <a href="+ data.tr[i].sub[k].link +">"  + data.tr[i].sub[k].name + "</a>"
                            }
                            else {
                                if (data.tr[i].sub[k].sub != null) {
                                    for (var s = 0; s < data.tr[i].sub[k].sub.length; s++) {
                                        if (data.tr[i].sub[k].sub[s].link == query) {
                                            breadCrumb += " / <a href="+ data.tr[i].link +">"  + data.tr[i].name + "</a>"
                                            breadCrumb += " / <a href="+ data.tr[i].sub[k].link +">"  + data.tr[i].sub[k].name + "</a>"
                                            breadCrumb += " / <a href="+ data.tr[i].sub[k].sub[s].link +">"  + data.tr[i].sub[k].sub[s].name + "</a>"
                                        }
                                        else {
                                            if (data.tr[i].sub[k].sub[s].sub != null) {
                                                for (var y = 0; y < data.tr[i].sub[k].sub[s].sub.length; y++) {
                                                    if (data.tr[i].sub[k].sub[s].sub[y].link == query) {
                                                        breadCrumb += " / <a href="+ data.tr[i].link +">"  + data.tr[i].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.tr[i].sub[k].link +">"  + data.tr[i].sub[k].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.tr[i].sub[k].sub[s].link +">"  + data.tr[i].sub[k].sub[s].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.tr[i].sub[k].sub[s].sub[y].link +">"  + data.tr[i].sub[k].sub[s].sub[y].name + "</a>"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            breadCrumb += data.en[0].name;

            for (var i = 0; i < data.en.length; i++) {
                if (data.en[i].link == query) {
                    breadCrumb += " / <a href="+ data.en[i].link +">"  + data.en[i].name + "</a>"
                }
                else {
                    if (data.en[i].sub != null) {
                        for (var k = 0; k < data.en[i].sub.length; k++) {
                            if (data.en[i].sub[k].link == query) {
                                breadCrumb += " / <a href="+ data.en[i].link +">"  + data.en[i].name + "</a>"
                                breadCrumb += " / <a href="+ data.en[i].sub[k].link +">"  + data.en[i].sub[k].name + "</a>"
                            }
                            else {
                                if (data.en[i].sub[k].sub != null) {
                                    for (var s = 0; s < data.en[i].sub[k].sub.length; s++) {
                                        if (data.en[i].sub[k].sub[s].link == query) {
                                            breadCrumb += " / <a href="+ data.en[i].link +">"  + data.en[i].name + "</a>"
                                            breadCrumb += " / <a href="+ data.en[i].sub[k].link +">"  + data.en[i].sub[k].name + "</a>"
                                            breadCrumb += " / <a href="+ data.en[i].sub[k].sub[s].link +">"  + data.en[i].sub[k].sub[s].name + "</a>"
                                        }
                                        else {
                                            if (data.en[i].sub[k].sub[s].sub != null) {
                                                for (var y = 0; y < data.en[i].sub[k].sub[s].sub.length; y++) {
                                                    if (data.en[i].sub[k].sub[s].sub[y].link == query) {
                                                        breadCrumb += " / <a href="+ data.en[i].link +">" + data.en[i].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.en[i].sub[k].sub[s].link +">" + data.en[i].sub[k].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.en[i].sub[k].sub[s].link +">" + data.en[i].sub[k].sub[s].name + "</a>"
                                                        breadCrumb += " / <a href="+ data.en[i].sub[k].sub[s].sub[y].link +">" + data.en[i].sub[k].sub[s].sub[y].name + "</a>"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return breadCrumb
  }
  render() {

    return (
      <div className="BreadCrumbNav">
        {ReactHtmlParser(this.loop())}
      </div>
    )
  }
}