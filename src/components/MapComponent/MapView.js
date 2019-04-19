/**
 * @Author: harsha
 * @Date:   2019-04-17T12:37:29+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-17T12:37:36+05:30
 */
import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.defaultLat, lng: props.defaultLng }}
      onClick={props.onClick}
    >
      {props.locations.map(location => (
        <Marker
          position={{ lat: location.lat, lng: location.lng }}
          key={location.id}
          icon={
            location.isDraftModeOn
              ? process.env.PUBLIC_URL + "/marker_draft.png"
              : ""
          }
          draggable={location.isDraftModeOn}
          onDragEnd={props.onDragEnd}
          animation={window.google.maps.Animation.DROP}
        />
      ))}
    </GoogleMap>
  ))
);

export default Map;
