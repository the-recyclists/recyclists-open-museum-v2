(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
  key: "AIzaSyCO_f3Iw83Wy3W08SBFzp3VXn6-zIKh6ws"
})

let map

async function initMap() {

  const centraal_position = { lat: 52.379146, lng: 4.899944 }
  const sint_antonies_position = { lat: 52.370621, lng: 4.900634 }
  const frans_halstraat_position = { lat: 52.356530, lng: 4.888691 }
  const alexander_position = { lat: 52.363422, lng: 4.919397 }
  const waterkersweg_position = { lat: 52.383251, lng: 4.868793 }
  const nesciobrug_position = { lat: 52.356444, lng: 4.969338 }
  const gelderlandplein_position = { lat: 52.332056, lng: 4.877833 }
  const lelylaan_position = { lat: 52.357917, lng: 4.834620 }
  const heemstedestraat_position = { lat: 52.357917, lng: 4.834620 }
  const roeterseiland_position = { lat: 52.362313, lng: 4.911250 }

  const { Map } = await google.maps.importLibrary("maps")
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  const map = new Map(document.getElementById("map"), {
    center: { lat: 52.377956, lng: 4.897070 },
    zoom: 12,
    mapId: "RECYCLIST_MAP_ID"
  })

  const infoWindow = new google.maps.InfoWindow({
    content: "Empty... there should be something here.",
    ariaLabel: "infoWindow"
  })

  const centraal_marker = new AdvancedMarkerElement({
    map: map,
    position: centraal_position,
    title: "Centraal Station"
  })

  const centraal_content = `
  <h2> Title </h2>
  <p> content </p>
  <a href="places/centraal">link to page</a>
  `

  centraal_marker.addListener("click", () => {

    infoWindow.setContent(centraal_content)

    infoWindow.open({
      anchor: centraal_marker,
      map
    })
  })

  const sint_antonies_marker = new AdvancedMarkerElement({
    map: map,
    position: sint_antonies_position,
    title: "Sint Antoniesbreestraat"
  })

  const sint_antonies_content = `
  <h2> antonies </h2>
  <p> content </p>
  <a href="places/sint_antonies">link to page</a>
  `

  sint_antonies_marker.addListener("click", () => {

    infoWindow.setContent(sint_antonies_content)

    infoWindow.open({
      anchor: sint_antonies_marker,
      map
    })
  })

  const frans_halstraat_marker = new AdvancedMarkerElement({
    map: map,
    position: frans_halstraat_position,
    title: "Frans Halstraat"
  })

  const frans_halstraat_content = `
  <h2> frans </h2>
  <p> content </p>
  <a href="places/frans_halstraat">link to page</a>
  `

  frans_halstraat_marker.addListener("click", () => {

    infoWindow.setContent(frans_halstraat_content)

    infoWindow.open({
      anchor: frans_halstraat_marker,
      map
    })
  })

  const alenxander_marker = new AdvancedMarkerElement({
    map: map,
    position: alexander_position,
    title: "Alexanderplein"
  })

  const alexander_content = `
  <h2> alexander </h2>
  <p> content </p>
  <a href="places/alexander">link to page</a>
  `

  alenxander_marker.addListener("click", () => {

    infoWindow.setContent(alexander_content)

    infoWindow.open({
      anchor: alenxander_marker,
      map
    })
  })

  const waterkersweg_marker = new AdvancedMarkerElement({
    map: map,
    position: waterkersweg_position,
    title: "Waterkersweg"
  })

  const waterkersweg_content = `
  <h2> waterkersweg </h2>
  <p> content </p>
  <a href="places/waterkersweg">link to page</a>
  `

  waterkersweg_marker.addListener("click", () => {

    infoWindow.setContent(waterkersweg_content)

    infoWindow.open({
      anchor: waterkersweg_marker,
      map
    })
  })

  const nesciobrug_marker = new AdvancedMarkerElement({
    map: map,
    position: nesciobrug_position,
    title: "Nesciobrug"
  })

  const nesciobrug_content = `
  <h2> nesciobrug </h2>
  <p> content </p>
  <a href="places/nesciobrug">link to page</a>
  `

  nesciobrug_marker.addListener("click", () => {

    infoWindow.setContent(nesciobrug_content)

    infoWindow.open({
      anchor: nesciobrug_marker,
      map
    })
  })

  const gelderlandplein_marker = new AdvancedMarkerElement({
    map: map,
    position: gelderlandplein_position,
    title: "Gelderlandplein"
  })

  const gelderlandplein_content = `
  <h2> gelderlandplein </h2>
  <p> content </p>
  <a href="places/gelderlandplein">link to page</a>
  `

  gelderlandplein_marker.addListener("click", () => {

    infoWindow.setContent(gelderlandplein_content)

    infoWindow.open({
      anchor: gelderlandplein_marker,
      map
    })
  })

  const lelylaan_marker = new AdvancedMarkerElement({
    map: map,
    position: lelylaan_position,
    title: "Lelylaan"
  })

  const lelylaan_content = `
  <h2> lelylaan </h2>
  <p> content </p>
  <a href="places/lelylaan">link to page</a>
  `

  lelylaan_marker.addListener("click", () => {

    infoWindow.setContent(lelylaan_content)

    infoWindow.open({
      anchor: lelylaan_marker,
      map
    })
  })

  const heemstedestraat_marker = new AdvancedMarkerElement({
    map: map,
    position: heemstedestraat_position,
    title: "Heemstedestraat"
  })

  const heemstedestraat_content = `
  <h2> heemstedestraat </h2>
  <p> content </p>
  <a href="places/heemstedestraat">link to page</a>
  `

  heemstedestraat_marker.addListener("click", () => {

    infoWindow.setContent(heemstedestraat_content)

    infoWindow.open({
      anchor: heemstedestraat_marker,
      map
    })
  })

  const roeterseiland_marker = new AdvancedMarkerElement({
    map: map,
    position: roeterseiland_position,
    title: "Roeterseiland"
  })

  const roeterseiland_content = `
    <h2> roeterseiland </h2>
    <p> content </p>
    <a href="places/roeterseiland">link to page</a>
    `

  roeterseiland_marker.addListener("click", () => {

    infoWindow.setContent(roeterseiland_content)

    infoWindow.open({
      anchor: roeterseiland_marker,
      map
    })
  })
}




initMap()