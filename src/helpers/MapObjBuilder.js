/**
 * @Author: harsha
 * @Date:   2019-04-20T03:14:15+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-23T23:44:07+05:30
 */

export const editMarkersArray = (
  index,
  coords,
  markersArray,
  mapData,
  marker
) => {
  markersArray[index].setMap(null);
  const markerArrayBlock = [
    ...markersArray.slice(0, index),
    marker,
    ...markersArray.slice(index + 1)
  ];
  return markerArrayBlock;
};

export const editPositionCoords = (coords, index, object) => {
  return [...coords.slice(0, index), object, ...coords.slice(index + 1)];
};

export const deleteMarkersArray = (index, markersArray) => {
  markersArray[index].setMap(null);
  const markerArrayBlock = [
    ...markersArray.slice(0, index),
    ...markersArray.slice(index + 1)
  ];
  return markerArrayBlock;
};

export const deleteCoords = (index, coords) => {
  return [...coords.slice(0, index), ...coords.slice(index + 1)];
};
