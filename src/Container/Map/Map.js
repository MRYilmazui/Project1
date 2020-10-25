import React, { useState } from 'react';
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
    navigator.geolocation.getCurrentPosition(success);
  })
  
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })


  const [markers, setMarkers] = React.useState([
    [43.653225,-79.383186],
    [42.653225,-79.383186],
    [41.653225,-79.383186]

  ]);
  const [selected, setSelected] = React.useState(null);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(14)
  }, [])

  if(loadError) return "Error"
  if(!isLoaded) return "Loading Error"
 
  return (
    <div className="MapLocation">
      <div className="col-lg-3 float-left pl-0 pr-0 result-details">
        <NavLink className="backside" exact to="/" >Back</NavLink>
        <MapFilterDetails />
      </div>
      <div className="col-lg-9 float-left pl-0 pr-0 map-details">
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
                    setSelected(marker)
                  }}
                />
              </div>
            ))
          }

          {selected ? (
              <InfoWindow
                position={{lat: selected[0], lng: selected[1]}}
                onCloseClick = {() => {
                  setSelected(null)
                }}
              >
                <div>
                  <div className="topside">
                    <div className="mercedes-logo"></div>
                    <h4>Mergerler İstanbul Etiler</h4>
                    <i>Şuanda Açık</i>
                  </div>
                  <div className="info">
                    <b>Adres</b> <p> Etiler Mahallesi Ahular Sokak No: 10 34337 İstanbul</p>
                    <b>E-Posta</b> <a href="mailto:istanbul@avm.com.tr">istanbul@avm.com.tr</a>
                    <b>Telefon</b> <a href="tel:+902124843300">+90 212 484 33 00</a>
                    <b>Faks</b> <a href="tel:+902124843300">+90 212 484 33 00</a>

                    <a href="" className="details-map">Detaylar</a>
                  </div>
                </div>
              </InfoWindow>
            ):null}

        </GoogleMap>
    
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