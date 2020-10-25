import React, { useState } from 'react';

import './MapMarkerDetails.scss'

export default function MyComponent() {
  return (
    <span className="MapMarkerDetails">
      <div className="info">
        <h5>Mengerler İstanbul Etiler</h5>
        <div className="clearfix"></div>
        <div className="info-details">
          <span>
          Etiler Mahallesi Ahular Sokak No:10 34337 İstanbul
          </span>
          <a href="mailto:istanbul@avm.com.tr">istanbul@avm.com.tr</a>
          <a href="tel:+90 212 4843300">Telefon : +90 212 4843300</a>
          <span>Faks : +90 212 3584834</span>
          <a href="http://www.mengerler.mercedes-benz.com.tr">http://www.mengerler.mercedes-benz.com.tr</a>

        </div>
      </div>
      <div className="info-type">
        <h5>Mengerler İstanbul Etiler</h5>
        <div className="info-type-details">
          <span>Otomobil Satış</span>
          <span>Otomobil Satış - Kullanılmış Otomobil</span>
          <span>Otomobil</span>
        </div>
      </div>
      <div className="contactus">
        <h5>Mengerler İstanbul Etiler</h5>
        <div className="contactus-details">
          <a href="mailto:mengerleristanbul_gssn_satis@mbtbayileri.com">mengerleristanbul_gssn_satis@mbtbayileri.com</a>
        </div>
      </div>
      <div className="work-clock">
        <h5>Mengerler İstanbul Etiler</h5>
        <div className="work-clock-details">
          <span>Pazartesi - Cuma : 09:00 - 17:30</span>
          <span>Cumartesi : 09:00 - 13:30</span>
        </div>
      </div>
    </span>
  )
}
