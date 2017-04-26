var map = L.map('map').setView([40.76,-66.942], 15);


// CHANGE MAPBOX API KEY HERE ->
L.tileLayer('https://api.mapbox.com/styles/v1/eichners/cinw030m3001mb1maj9859kvm/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWljaG5lcnMiLCJhIjoiY2lrZzVneDI4MDAyZ3VkbTZmYWlyejUzayJ9.vEGckM-D3AjV4jXmdibXyw',{
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
maxZoom: 19
}).addTo(map);

var getStreetView;
var lotStyle;
var lotClick;


// FOLLOWING EXAMPLE FOR SARA'S MAP - BROOKLYN ODD LOTS - CHANGE CARTO LINK HERE ->
var lotDatageoJSON;
$.getJSON('https://eichnersara.cartodb.com/api/v2/sql?q=SELECT * FROM oddlots_brooklyn&format=GeoJSON')
.done(function (data) {

	var lotDataset = data;
    //plotDataset(lotDataset);
    console.log(data);
    //create the sidebar with links to fire polygons on the map
    //createDropdown(lotDataset);

lotStyle = function (feature, geometry){
 	//console.log(feature, geometry);
	var lottype = feature.properties.lottype;
 	var style = { 
		weight: 1,
        opacity: 0.9,
       	color: lotColor(lottype),
        //fillOpacity: fillOpacity(lottype),
        fillColor: lotFillColor(lottype),
        fillOpacity:1
	};	 
return style;
}

////////////// CHANGE STREET VIEW FUNCTION TO OCEAN VIEW HERE ->
lotClick = function (feature, layer) {

	layer.on(layer, function (){
		console.log(feature.geometry);
		var $content = $('<div></div>');
		$content.text("<strong>" + feature.properties.address + "<br/" + "</strong>" + 
        "owner: " + "<strong>" + feature.properties.ownername + "</strong>");
        
        /*function getStreetView(latlng) {
        	console.log(lat, lng);
        		var lat = feature.geometry.coordinates[1];
                var lng = feature.geometry.coordinates[0];
                console.log(feature.geometry.coordinates);
                var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?' + $.param({
                    size: '300x200',
                    location: lat + ',' + lng
                });
	    		var $image = $('<img></img>');
                    console.log(streetviewUrl);
                    $image.attr('src', streetviewUrl);
                    $content.append($image)                
                }
                getStreetView(layer.getLatLng());
                layer.bindPopup ($content.html()).openPopup();
            });  */
      }
L.geoJson(lotDataset, {
	onEachFeature: lotClick,
	style: lotStyle
}).addTo(map); 
});



// GORDON MATTA-CLARK FAKE ESTATE LOTS
var gmclotDatageoJSON;
//var gmclotStyle;
$.getJSON('https://eichnersara.cartodb.com/api/v2/sql?q=SELECT * FROM matta_clark_lots_queens&format=GeoJSON', function(data){
	var oddLots = data;
    plotDataset(oddLots);
    console.log(data);
    //create the sidebar with links to fire polygons on the map
    //createDropdown(oddLots);
});

function plotDataset(oddLots) {
	gmclotDatageoJSON = L.geoJson(oddLots, {
		style: lotStyle,
		onEachFeature: lotClick
	}).addTo(map); 
}



function lotColor (lottype) {
	return  lottype === '0' ? 'black':
			lottype === '1' ? '#FF2900':
			lottype === '6' ? '#FF2900':
			lottype === '7' ? '#FF2900':
			lottype === '8' ? '#229A00':
			lottype === '9' ? '#3E7BB6':
							  '#FF2900';
}
function lotFillColor (lottype) {
	return  lottype === '0' ? 'black':
			lottype === '1' ? '#FF2900':
			lottype === '6' ? '#FF2900':
			lottype === '7' ? '#FF2900':
			lottype === '8' ? '#229A00':
			lottype === '9' ? '#3E7BB6':
							  '#FF2900';
}

// ON EACH FEATURE FUNCTION
// lotClick = function (feature, layer) {
//     layer.bindPopup("This odd lot address is " + 
//         "<strong>" + feature.properties.address + "</strong>" + 
//         " and it is owned by " + 
//         "<strong>" + feature.properties.ownername + "</strong>");
// }

