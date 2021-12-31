const url = "https://restcountries.com/v2";
// const accessKey = "f17716ce57a848213f2cb494006efe2d";
//prueba-tecnica-2b8f9
function getAllCountries() {
  return fetch(`${url}/all`).then((res) => res.json());
}

// EU (European Union)
// EFTA (European Free Trade Association)
// CARICOM (Caribbean Community)
// PA (Pacific Alliance)
// AU (African Union)
// USAN (Union of South American Nations)
// EEU (Eurasian Economic Union)
// AL (Arab League)
// ASEAN (Association of Southeast Asian Nations)
// CAIS (Central American Integration System)
// CEFTA (Central European Free Trade Agreement)
// NAFTA (North American Free Trade Agreement)
// SAARC (South Asian Association for Regional Cooperation)
function getRegion(region) {
  return fetch(`${url}/regionalbloc/${region}`).then((res) => res.json());
}

// function getAsset(coin) {
//   return fetch(`${url}/assets/${coin}`)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

// function getAssetHistory(coin) {
//   const now = new Date(); //instancia de date
//   const end = now.getTime(); //obtener el momento actual
//   now.setDate(now.getDate() - 1); //setear now con un dia antes
//   const start = now.getTime();
//   //star debe ser menor o igual que end
//   return fetch(
//     `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
//   )
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

// function getMarkets(coin) {
//   return fetch(`${url}/assets/${coin}/markets?limit=5`)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

// function getExchange(id) {
//   return fetch(`${url}/exchanges/${id}`)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

export default {
  getAllCountries,
  getRegion,
};
