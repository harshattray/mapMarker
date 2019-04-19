/**
 * @Author: harsha
 * @Date:   2019-04-20T03:14:15+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-20T03:59:50+05:30
 */

export const mapObjectBuilder = (mapObj, geoCoords) => {
  debugger;
  const marker = new window.google.maps.Marker({
    map: mapObj,
    position: geoCoords.location
  });
  return marker;
};
