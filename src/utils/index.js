export { getContacts, createContact } from "./network/lib/Contact"
export { getDevicesPosition } from "./network/lib/Map"
export { getLocation, createLocation, updateLocation } from "./network/lib/Location"
export { default as Store } from "./redux/Store"
export { setSelectedMarker, clearSelectedMarker } from "./redux/reducers/MarkerSlice"
export { toogleLocationForm, setLocationData, clearLocationData } from "./redux/reducers/FormLocationSlice"
export { setAllLocation } from "./redux/reducers/LocationSlice"
export { setContact } from "./redux/reducers/ContactSlice"
export { getHistory } from "./network/lib/History"
export { setActivityHistories } from "./redux/reducers/ActivityHistory"
export { setDevice } from "./redux/reducers/DeviceSlice"