import { event } from 'jquery';
import React, { useState, useEffect, useRef } from 'react';
import { getCities } from '../../Actions/GetCities';
import { getDealers } from '../../Actions/GetDealers';

import jQuery from 'jquery'
import ae from '../../language.json';

const la = ae[localStorage.lang];
export default function MapFilterDetails (props) {
  const _isMounted = useRef(true); // Initial value _isMounted = true
  const [ cities, setCities ] = useState(null);
  const [ dealers, setDealers ] = useState(null);
  const [ pickDealer, setPickDealers ] = useState(null);

  const datas = null;
  const productGroup = []

  const [ cityselect, setcityselect ] = useState(null);
  const [ carType, setcarType ] = useState('1');
  const [ carType2, setcarType2 ] = useState('2');
  const [ dealerType, setdealerType ] = useState('1');
  const [ dealerType2, setdealerType2 ] = useState('2');
  const [ dealerType3, setdealerType3 ] = useState('3');

  useEffect(() => {

     
    async function fetchDatas() {
      const a = await getCities()
      const getDealer = await getDealers(localStorage.langid)
      const pickDealer = await getDealers(localStorage.langid)
      
      setCities(a)
      setDealers(getDealer)
      setPickDealers(getDealer)

      props.update(pickDealer)

      changeDealers('Kamyon')

      jQuery("input[type='checkbox']").prop("checked", true);

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
    let CT = null;
    let CT2 = null;
    let CS = null;
    let DT = null;
    let DT2 = null;
    let DT3 = null;

    let getDealer = null;
    let pickDealer = null;

    if(event === 'Kamyon'){
        setcarType('1')
        CT = '1';

        getDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
        pickDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
    } else if(event === 'Otobus') {
            
      setcarType2('2')
      CT2 = '2';

      getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
      pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
    }

    if(event.target !== undefined) {

      if(event.target.id === 'Kamyon'){
        
        if(event.target.checked === true){
          setcarType('1')
          CT = '1';

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
        } else {
          setcarType(null)
          CT = null;

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, CT, carType2, dealerType, dealerType2, dealerType3)
        }

      } else if(event.target.id === 'Otobus') {
              
        if(event.target.checked ===  true){
          setcarType2('2')
          CT2 = '2';

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
        } else {
          setcarType2(null)
          CT2 = null;
          event.target.checked = false;

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, CT2, dealerType, dealerType2, dealerType3)
        }

      } else if(event.target.id === 'cityselect') {
        setcityselect(event.target.selectedOptions[0].id)
        CS = event.target.selectedOptions[0].id;

        getDealer = await getDealers(localStorage.langid, CS, null, null, carType, carType2, dealerType, dealerType2, dealerType3)
        pickDealer = await getDealers(localStorage.langid, CS, null, null, carType, carType2, dealerType, dealerType2, dealerType3)
      } else if(event.target.id === 'Satis') {
                    
        if(event.target.checked ===  true){
          setdealerType(event.target.value)
          DT = '1';

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, DT, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, DT, dealerType2, dealerType3)
        } else {
          setdealerType(null)
          DT = null;
          event.target.checked = false;
          
          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, DT, dealerType2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, DT, dealerType2, dealerType3)
        }

      } else if(event.target.id === 'İkinciElSatis') {
                          
        if(event.target.checked ===  true){
          setdealerType2(event.target.value)
          DT2 = '2';

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, DT2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, DT2, dealerType3)
        } else {
          setdealerType2(null)
          DT2 = null;
          event.target.checked = false;

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, DT2, dealerType3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, DT2, dealerType3)
        }

      } else if(event.target.id === 'Servis') {
                                
        if(event.target.checked ===  true){
          setdealerType3(event.target.value)
          DT3 = '3';

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, dealerType2, DT3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, dealerType2, DT3)
        } else {
          setdealerType3(null)
          DT3 = null;
          event.target.checked = false;

          getDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, dealerType2, DT3)
          pickDealer = await getDealers(localStorage.langid, cityselect, null, null, carType, carType2, dealerType, dealerType2, DT3)
        }
      }
    }

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
          <h5>{la.allsite.title[25]}</h5>

          <div className="inputs">
            <select name="" id="cityselect" onChange={e => changeDealers(e)} onChange={e => changeDealers(e)}>
              <option value="" selected>{la.allsite.title[26]}</option>
              {loopBuild(cities)}
            </select>
            <select name="" id="mercedesDealer" onChange={e => selectedDealer(e)}>
              <option value="">{la.allsite.title[27]}</option>
              {loopBuild(dealers)}
            </select>

            <label>
              {la.allsite.title[28]}
            </label>
            <div className="checkbox">
              <label for="Kamyon">
                {la.allsite.title[30]}
              </label>
              <input type="checkbox" name="Otobüs" id="Kamyon" value="1"  onClick={e => changeDealers(e)}/>
            </div>
            <div className="checkbox">
              <label for="Otobus">
                {la.allsite.title[29]}
              </label>
              <input type="checkbox" name="Kamyon" id="Otobus" value="2"  onClick={e => changeDealers(e)}/>
            </div>
            
            <label>
            {la.allsite.title[31]}
            </label>
            <div className="checkbox">
              <label for="Satis">
                {la.allsite.title[32]}
              </label>
              <input type="checkbox" name="Satış" id="Satis" value="1"  onClick={e => changeDealers(e)}/>
            </div>
            <div className="checkbox">
              <label for="İkinciElSatis">
                {la.allsite.title[33]}
              </label>
              <input type="checkbox" name="İkinci El Satış" id="İkinciElSatis"  value="2"  onClick={e => changeDealers(e)}/>
            </div>
            <div className="checkbox">
              <label for="Servis">
                {la.allsite.title[34]}
              </label>
              <input type="checkbox" name="Servis " id="Servis" value="3"  onClick={e => changeDealers(e)}/>
            </div>

          </div>

          <i>{dealers.length} {la.allsite.title[35]}</i>

          <div className="result">
            <h5>{la.allsite.title[46]}</h5>
            {loopDealers()}
          </div>
        </span>
      : ''
  )
}
