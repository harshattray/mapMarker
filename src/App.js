/**
 * @Author: harsha
 * @Date:   2019-03-21T12:32:56+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-18T02:37:44+05:30
 */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setMapObject } from "./actions/MapActions";
import MapComponent from "./components/MapComponent/MapComponent";
import InputComponent from "./components/InputComponent/InputComponent";

console.log(InputComponent);

class App extends Component {
  componentDidMount() {
    const API_KEY = "AIzaSyBO1dKtjJHzpgKLy2vidAWtSr8SMbxAFPM";
    if (!window.google) {
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=${API_KEY}&libraries=places`;
      let x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener("load", e => {
        onScriptLoad();
      });
    } else {
      onScriptLoad();
    }
    const onScriptLoad = () => {
      const options = {
        center: {
          lat: 52.527784,
          lng: 13.403117000000066
        },
        zoom: 6
      };
      const mapObj = new window.google.maps.Map(
        document.getElementById("mapComponent"),
        options
      );
      this.props.setMapObject(mapObj);
    };
  }

  render() {
    const { mapStackObject } = this.props;
    return (
      <div className="App">
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="map-wrapper col col-xs-12 col-sm-6">
                <div className="mapComponent" id="mapComponent" />
              </div>
              {mapStackObject && <MapComponent googleMaps={mapStackObject} />}
              <InputComponent />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps({ mapData }) {
  return {
    mapStackObject: mapData.initialMapData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMapObject }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
