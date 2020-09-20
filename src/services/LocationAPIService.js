export function fetchLocation() {
    return fetch("https://api.ipgeolocation.io/ipgeo?apiKey=63054a8fbb534faa98d442f4a2991a8a", {
      mode: 'cors',
      headers: {
      'Access-Control-Allow-Origin':'*'
      }
    });
}