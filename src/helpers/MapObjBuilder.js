/**
 * @Author: harsha
 * @Date:   2019-04-20T03:14:15+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T02:58:13+05:30
 */

/**
 * [editMarkersArray helper function to inject amrkers array into the store]
 * @param  {Number} index        [Index value of the marker list ]
 * @param  {[Array]} coords       [Coords of the market list]
 * @param  {[Array]} markersArray [markersArray pulled from state]
 * @param  {Object} mapData      [maoObject]
 * @param  {Object} marker       [marker object generated in the action call]
 * @return {[type]}              [description]
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

/**
 * [editPositionCoords helper function to update coords stack]
 * @param  {[Array]} coords [coords array pulled from state]
 * @param  {Number} index  [index value of the markerList]
 * @param  {Object} object [payload object]
 * @return {[type]}        [description]
 */

export const editPositionCoords = (coords, index, object) => {
  return [...coords.slice(0, index), object, ...coords.slice(index + 1)];
};

/**
 * [deleteMarkersArray helper function to delete markers from the current markeArray stack to be displayed on the map]
 * @param  {Number} index        [index value of marker array to be deleted]
 * @param  {[Array]} markersArray [markers Array pulled from state object]
 * @return {[type]}              [description]
 */

export const deleteMarkersArray = (index, markersArray) => {
  markersArray[index].setMap(null);
  const markerArrayBlock = [
    ...markersArray.slice(0, index),
    ...markersArray.slice(index + 1)
  ];
  return markerArrayBlock;
};

/**
 * [deleteCoords helper function to delete card from the current coords stack to be displayed on the markerslist]
 * @param  {Number} index  [index value of the card to be deleted]
 * @param  {[Array]} coords [coords array pulled from state object]
 * @return {[type]}        [description]
 */

export const deleteCoords = (index, coords) => {
  return [...coords.slice(0, index), ...coords.slice(index + 1)];
};
