import React, { useState, useEffect } from 'react';

import './MapMarkerDetails.scss'
import ae from '../../language.json';

const la = ae[localStorage.lang];
export default function MyComponent(props) {
  debugger;
  return (
    <>
      {
        props.data.length !== 0 ?
        <span className={`MapMarkerDetails `} >
          <a href="javascript:void(0)" className="backside" onClick= {() => {
            props.func()
          }} >Back</a>
        <div className="info">
          <h5>{props.data.name}</h5>
          <div className="clearfix"></div>
          <div className="info-details">
            <span>
              {la.allsite.title[47]} : {props.data.address}
            </span>
            <a href={"mailto:"+props.data.email}>
              {la.allsite.title[48]} : {props.data.email}
            </a>
            <a href={"tel:"+props.data.phone}>
              {la.allsite.title[49]} : {props.data.phone}
            </a>
            <span>
              {la.allsite.title[50]} : {props.data.fax}
            </span>

          </div>
        </div>
        <div className="info-type">
          <h5>{la.Urunlerimiz.Otobus.SatisSonrasi.title[0]}</h5>
          <div className="info-type-details">
          {
              props.data.truckServiceType.length !== 0 ?
              <>
                {
                  props.data.truckServiceType[0] === "1" ?
                  <span>Kamyon Satış</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[1] === "1" ?
                  <span>Kamyon Satış</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[3] === "1" ?
                  <span>Kamyon Satış</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[0] === "2" ?
                  <span>Kamyon Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[1] === "2" ?
                  <span>Kamyon Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[2] === "2" ?
                  <span>Kamyon Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[0] === "3" ?
                  <span>Kamyon Servis</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[1] === "3" ?
                  <span>Kamyon Servis</span>
                  :
                  ''
                }
                {
                  props.data.truckServiceType[2] === "3" ?
                  <span>Kamyon Servis</span>
                  :
                  ''
                }
              </>
              :
              ''
            }
            {
              props.data.busServiceType.length !== 0 ?
              <>
                {
                  props.data.busServiceType[0] === "1" ?
                  <span>Otobüs Satış</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[1] === "1" ?
                  <span>Otobüs Satış</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[2] === "1" ?
                  <span>Otobüs Satış</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[0] === "2" ?
                  <span>Otobüs Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[1] === "2" ?
                  <span>Otobüs Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[2] === "2" ?
                  <span>Otobüs Satış 2. El</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[0] === "3" ?
                  <span>Otobüs Servis</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[1] === "3" ?
                  <span>Otobüs Servis</span>
                  :
                  ''
                }
                {
                  props.data.busServiceType[2] === "3" ?
                  <span>Otobüs Servis</span>
                  :
                  ''
                }
              </>
              :
              ''
            }
            
          </div>
        </div>
        
        <div className="work-clock">
          <h5>{la.allsite.title[45]}</h5>
          <div className="work-clock-details">
            <span>Pazartesi - Cuma : 09:00 - 17:30</span>
            <span>Cumartesi : 09:00 - 13:30</span>
          </div>
        </div>
      </span>
        :

        ''
      }
    </>

  )
}
