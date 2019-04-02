mapboxgl.accessToken = 'pk.eyJ1IjoiY3NjaG1pZC16aGRrIiwiYSI6ImNqb2oxNXMyZTAwY3kzcXBoeGZ3MnlvOXoifQ.dcxa3bz9-6M-7F7aL_Yrtw'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cschmid-zhdk/cjtzn1c3w4rij1fozb3o2czfp',
    center: [-87.661557, 41.893748],
    zoom: 10.7

})

map.on('click', function(e) {
    const features = map.queryRenderedFeatures(e.point, {
        layers: ['chicago-parks']
    })

    if(!features.length) {
        return
    }

    const feature = features[0]

    const popup = new mapboxgl.Popup({offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map)
})
