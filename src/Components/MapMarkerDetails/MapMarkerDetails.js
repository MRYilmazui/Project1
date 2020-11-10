import React, { useState, useEffect } from 'react';

import './MapMarkerDetails.scss'

export default function MyComponent(props) {

  return (
    <span className={`MapMarkerDetails `} >
        <a href="javascript:void(0)" className="backside" onClick= {() => {
          props.func()
        }} >Back</a>
      <div className="info">
        <h5>{props.data.name}</h5>
        <div className="clearfix"></div>
        <div className="info-details">
          <span>
            {props.data.address}
          </span>
          <a href={"mailto:"+props.data.email}>
            {props.data.email}
          </a>
          <a href={"tel:"+props.data.phone}>
            {props.data.phone}
          </a>
          <span>
            {props.data.fax}
          </span>

        </div>
      </div>
      <div className="info-type">
        <h5>{props.data.name}</h5>
        <div className="info-type-details">
        {
            props.data.serviceType[0] === '1' && props.data.serviceType[0] !== undefined ?
            <span>Otomobil Satış</span>
            :
            ''
          }
          {
            props.data.serviceType[1] === '2' && props.data.serviceType[1] !== undefined?
            <span>Otomobil Satış 2. El</span>
            :
            ''
          }
          {
            props.data.serviceType[2] === '3' && props.data.serviceType[2] !== undefined ?
            <span>Servis</span>
            :
            ''
          }
        </div>
      </div>
      <div className="contactus">
        <h5>İletişim</h5>
        <div className="contactus-details">
          <a href={"mailto:"+props.data.email}>
            {props.data.email}
          </a>
        </div>
      </div>
      <div className="work-clock">
        <h5>Çalışma Saatleri</h5>
        <div className="work-clock-details">
          <span>Pazartesi - Cuma : 09:00 - 17:30</span>
          <span>Cumartesi : 09:00 - 13:30</span>
        </div>
      </div>
    </span>
  )
}
