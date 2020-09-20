import {
  LOCATE_SUCCESSFUL,
  LOCATE_FAILED,
  LOCATE_RUNNING,
  LOCATE_COMPLETE
} from './'
import { fetchLocation } from '../services/LocationAPIService';

export const LocateAction = () => {
  return (dispatch) => {
    fetchLocation()
    .then(response => response.json())
    .then(response => {
      console.log(response);
      dispatch(locationFound(LOCATE_SUCCESSFUL, response['ip'], `${response['city']}, ${response['state_prov']}, ${response['country_name']}, ${response['continent_name']}`))
    })
    .catch((error) => {
      dispatch(locationFound(LOCATE_FAILED, null, null))
    });
  }
}
/*
EXAMPLE RESPONSE:
{"ip":"50.68.190.118","continent_code":"NA","continent_name":"North America","country_code2":"CA",
"country_code3":"CAN","country_name":"Canada","country_capital":"Ottawa","state_prov":"British Columbia",
"district":"North Vancouver","city":"North Vancouver District","zipcode":"V7N","latitude":"49.32700",
"longitude":"-123.07300","is_eu":false,"calling_code":"+1","country_tld":".ca","languages":"en-CA,fr-CA,iu",
"country_flag":"https://ipgeolocation.io/static/flags/ca_64.png","geoname_id":"6090785","isp":"Shaw Communications Inc.",
"connection_type":"cable","organization":"Shaw Communications Inc.","currency":{"code":"CAD","name":"Canadian Dollar","symbol":"C$"},
"time_zone":{"name":"America/Regina","offset":-6,"current_time":"2020-09-19 18:51:36.991-0600","current_time_unix":1600563096.991,
"is_dst":false,"dst_savings":0}}
*/

const locationFound = (payload, ip, location) => {
  switch (payload) {
    case LOCATE_SUCCESSFUL:
      return {
        type: payload,
        data: { ip: ip , location: location}
      }
    default:
      return {
        type: payload,
        data: { ip: '-', location: '-' }
      }
  }
}
