import { event } from 'jquery';
import React, { useState, useEffect, useRef } from 'react';
import { getCities } from '../../Actions/GetCities';
import { getDealers } from '../../Actions/GetDealers';


export default function MapFilterDetails (props) {
  const _isMounted = useRef(true); // Initial value _isMounted = true
  const [ cities, setCities ] = useState(null);
  const [ dealers, setDealers ] = useState(null);
  const [ pickDealer, setPickDealers ] = useState(null);
  const datas = null;


  useEffect(() => {
     
    async function fetchDatas() {
      const a = await getCities()
      const getDealer = await getDealers(localStorage.langid)
      const pickDealer = await getDealers(localStorage.langid)
      
      setCities(a)
      setDealers(getDealer)
      setPickDealers(getDealer)

      props.update(pickDealer)
    }
    
    fetchDatas()
  }, [datas])

  function loopBuild (loop) {
    const NewsSlider = [];

    if(loop !== null && loop !== undefined) {

      if (loop.length !== 0) {
        for (let i = 0; i < loop.length; i++) {
          NewsSlider.push(
            <option value="" id={loop[i].id}>{loop[i].name}</option>
          )
        }
      }
    }

    return NewsSlider;
  }

  function loopDealers() {
    const NewsSlider = [];

    if (pickDealer !== null && pickDealer !== undefined) {
      for (let i = 0; i < pickDealer.length; i++) {
        NewsSlider.push(
          <a href="javascript:void(0)" id={pickDealer[i].id} className="result-item" onClick={(e) => props.updateDetails(pickDealer[i].id)}>
            <h4>{pickDealer[i].name}</h4>
            <p>{pickDealer[i].address}</p>
          </a>
        )
      }
    }
    return NewsSlider;
  }

  async function changeDealers(event) {
    
    const id =  event.target.selectedOptions[0].id;
    const getDealer = await getDealers(localStorage.langid, id)
    const pickDealer = await getDealers(localStorage.langid, id)
    setPickDealers(getDealer)

    setDealers(getDealer)

    props.update(pickDealer)
  }
  
  async function postalCode(e) {
    if (e.key === 'Enter') {
      const postalCode =  e.target.value;
      const getDealer = await getDealers(localStorage.langid, '', postalCode)
      const pickDealer = await getDealers(localStorage.langid,  '', postalCode)
      setPickDealers(getDealer)

      setDealers(getDealer)

      props.update(pickDealer)

    }
  }
 
  async function selectedDealer(e) {
    const id =  e.target.selectedOptions[0].id;
    const pickDealer = await getDealers(localStorage.langid, '', '', id)

    setPickDealers(pickDealer)
    props.update(pickDealer)

  }

  return (
      cities !== null && dealers !== null && cities !== undefined && dealers !== undefined ?
        <span className="MapFilterDetails">
          <h5>Mercedes Benz Yetkili Satıcı ve Servis Arama</h5>

          <div className="inputs">
            <select name="" id="" onChange={e => changeDealers(e)}>
              <option value="" selected>Şehre Göre Arama</option>
              {loopBuild(cities)}
            </select>
            <select name="" id="" onChange={e => selectedDealer(e)}>
              <option value="">Tüm Mercedes-Benz Yetkili Bayileri</option>
              {loopBuild(dealers)}
            </select>
          </div>

          <i>{dealers.length} Mercedes-Benz Bayisi Bulundu.</i>

          <div className="result">
            <h5>Sonuçlar</h5>
            {loopDealers()}
          </div>
        </span>
      : ''
  )
}
