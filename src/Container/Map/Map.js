import React, { useState, useRef } from 'react';
import { Link, NavLink } from "react-router-dom";

import { compose, withProps } from "recompose";
import { GoogleMap, LoadScript, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import { formatRelative } from 'date-fns'

import mapIco from '../../Assets/img/mercedes-map-logo.png'
import MapFilterDetails from '../../Components/MapFilterDetails/MapFilterDetails'
import MapMarkerDetails from '../../Components/MapMarkerDetails/MapMarkerDetails'
import mapStyles from './mapStyles'


import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import './Map.scss'

const opt = {
  styles: mapStyles,
  defaultClickableIcons: false,
  mapTypeControl: false,
  streetViewControl: false
}

const mapContainerStyle = {
  width: "100%",
  height: "100%"
}

export default function MapDetailsInner() {
  const [ dealerDetails, setDealerDetails ] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [indexDetails, setIndexDetails] = useState(null);
  const [selected, setSelected] = useState(null);
  const [dealer, setDealer] = useState([])
  const [activate, setactivate] = useState(false);

  
  function updateMapDetails(e, dealers) {
    loopMarkers(e)
  }

  const [ currentPosition, setCurrentPosition ] = useState({
      lat: 41.3851,
      lng: 2.1734
  });

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  React.useEffect(() => {
    changeDisplayFalse()
    navigator.geolocation.getCurrentPosition(success);
  },[])
  
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(14)
  }, [])

  function loopMarkers(list) {
    debugger

    if (list !== undefined && list !== null) {
        
      setDealerDetails(list)
      const markerList =  []

      for (let i = 0; i < list.length; i++) {
        markerList.push(
          [parseInt(list[i].latitude), parseInt(list[i].longitude)]
        )
      }

      setMarkers(markerList)
    }
  }
  async function updateDetails(params) {
    for (let i = 0; i < dealerDetails.length; i++) {
      if(dealerDetails[i].id === params) {
        setDealer(dealerDetails[i])
      }
    }
    await changeDisplayTrue()
  }

  function infowindow(params) {
    const markerList =  []

    markerList.push(
      <InfoWindow
        position={{lat: selected[0], lng: selected[1]}}
        onCloseClick = {() => {
          setSelected(null)
        }}
      >
        <div>
          <div className="topside">
            <div className="mercedes-logo"></div>
            <h4>{dealerDetails[indexDetails].name}</h4>
            <i>Şuanda Açık</i>
          </div>
          <div className="info">
            <b>Adres</b> <p> {dealerDetails[indexDetails].name}</p>
            <b>E-Posta</b> <a href={"mailto:"+dealerDetails[indexDetails].email}>{dealerDetails[indexDetails].email}</a>
            <b>Telefon</b> <a href={"tel:"+dealerDetails[indexDetails].phone}>{dealerDetails[indexDetails].phone}</a>
            <b>Faks</b> <a href={"fax:"+dealerDetails[indexDetails].fax}>{dealerDetails[indexDetails].fax}</a>

            <a href="javascript:void(0)" className="details-map" onClick={(e) => updateDetails(dealerDetails[indexDetails].id)}>Detaylar</a>
          </div>
        </div>
      </InfoWindow>
    )

    return markerList
  }

  async function changeDisplayFalse (a) {
    setactivate(false)  }
  async function changeDisplayTrue(a) {
    setactivate(true)
  }

  if(loadError) return "Error"
  if(!isLoaded) return "Loading Error"

  return (
    <div className="MapLocation">
      <div className="col-lg-3 float-left pl-0 pr-0 result-details">
        
        
        { 
          activate === true ?
            <MapMarkerDetails data={dealer} func={changeDisplayFalse} />
          :
            ''
        }

        <a className="backside" href="/" >Back</a>
        <MapFilterDetails update={updateMapDetails} updateDetails={updateDetails}  />
      </div>
      <div className="col-lg-9 float-left pl-0 pr-0 map-details">
        {
          markers !== null
          ?
          <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={10} 
        center={currentPosition}
        options={opt}
        onLoad={onMapLoad}
        >

          {
            markers.map((marker, index) => (
              <div>
                <Marker 
                  position={{lat: marker[0], lng: marker[1]}}
                  key={index}
                  icon={{
                    url: mapIco,
                    scaledSize: new window.google.maps.Size(25,33),
                    origin: new window.google.maps.Point(0,0)
                  }}
                  onClick={() => {
                    setIndexDetails(index)
                    setSelected(marker)
                  }}
                />
              </div>
            ))
          }

          {selected ? 
              infowindow()
            :
            null
          }

        </GoogleMap>
    
      
          :
          ''
        }
      </div>
    </div>
  )
}

function SearchComplete({panTo}) {
  const {
    ready, 
    value, 
    suggestions: {status,data}, 
    setValue, 
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 43.653225, lng: () => -79.383186},
      radius: 200 * 1000

    }
  });

  return (
    <div>
      <Combobox onSelect={async (address) =>{
        setValue(address, false)
        clearSuggestions()

        try {
          const results = await getGeocode({address})
          const {lat, lng} = await getLatLng(results[0])
          
          panTo({lat, lng})
        } catch {
          console.log('error')
        }

        console.log(address)
      }}>

        <ComboboxInput  
          value={value} 
          onChange={(e) => {
            setValue(e.target.value)
          }}
          disabled={!ready}
          placeholder="MRY" />
        
        <ComboboxPopover>
          {status === "OK" && data.map(({id, description}) =>(
            <ComboboxOption key={id} value={description} />
          ))}
        </ComboboxPopover>

      </Combobox>
    </div>
  )
}