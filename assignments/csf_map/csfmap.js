var map = L.map('map').setView([40.76,-66.942], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/lucylovitt.22fb20a9/cinw030m3001mb1maj9859kvm/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVjeWxvdml0dCIsImEiOiJjaXZhOGRzOTAwMDNtMnVsdmxuYWZpdmhjIn0.3u6AnQffrJrp1rvahhyeTQ',{
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
maxZoom: 10
}).addTo(map);

var getStreetView;
var fishStyle;
var fishClick;





var fishDatageoJSON;  // get json from folder instead of carto->
$.getJSON('csf_fish.json')
.done(function (data) {

	var fishDataset = data;
    //plot fish point data(fishDataset);
    console.log(data);
    //create the sidebar with links to fire polygons on the map
    //createDropdown(fishDataset);

fishStyle = function (feature, geometry){
 	//console.log(feature, geometry);
	var fishtype = feature.properties.fishtype;
 	var style = { 
		weight: 1,
        opacity: 0.9,
       	color: fishColor(fishtype),
        //fillOpacity: fillOpacity(fishtype),
        fillColor: fishFillColor(fishtype),
        fillOpacity:1
	};	 
return style;
}

////////////// CHANGE STREET VIEW FUNCTION TO OCEAN VIEW HERE ->
fishClick = function (feature, layer) {

	layer.on(layer, function (){
		console.log(feature.geometry);
		var $content = $('<div></div>');
		$content.text("<strong>" + feature.properties.common_name + "<br/" + "</strong>");
        
        /*function getStreetView(latlng) {
        	console.log(lat, lng);
        		var lat = coords.x1[1];
                var lng = coords.x2[0];
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
L.geoJson(fishDataset, {
	onEachFeature: fishClick,
	style: fishStyle
}).addTo(map); 
});



// REPLACE GORDON MATTA-CLARK FAKE ESTATE LOTS WITH FISH DATA
var fishDatageoJSON;
//var fishStyle;
$.getJSON('csf_fish.json', function(data){
	var csf_fish = data;
    plotDataset(csf_fish);
    console.log(data);
    //create the sidebar with links to fire polygons on the map
    //createDropdown(csf_fish);
});

function plotDataset(csf_fish) {
	fishDatageoJSON = L.geoJson(csf_fish, {
		style: fishStyle,
		onEachFeature: fishClick
	}).addTo(map); 
}



function fishColor (fishtype) {
	return  fishtype === '0' ? 'black':
			fishtype === '1' ? '#E8DF1E':
			fishtype === '2' ? '#C0E81E':
			fishtype === '3' ? '#E8A81E':
			fishtype === '4' ? '#E18227':
			fishtype === '5' ? '#EC1B03':
			fishtype === '6' ? '#FF6704':
			fishtype === '7' ? '#C2FF04':
			fishtype === '8' ? '#22FF04':
			fishtype === '9' ? '#30D199':
			fishtype === '10' ? '#03B2EE':
			fishtype === '11' ? '#EE7903':
			fishtype === '12' ? '#EC4062':
			fishtype === '13' ? '#BC7792':
			fishtype === '14' ? '#BC7792':
			fishtype === '15' ? '#C5326B':
			fishtype === '16' ? '#3E7BB6':
			fishtype === '17' ? '#EE0303':
			fishtype === '18' ? '#EF6868':
							  '#FF2900';
}
function fishFillColor (fishtype) {
	return  fishtype === '0' ? 'black':
			fishtype === '1' ? '#E8DF1E':
			fishtype === '2' ? '#C0E81E':
			fishtype === '3' ? '#E8A81E':
			fishtype === '4' ? '#E18227':
			fishtype === '5' ? '#EC1B03':
			fishtype === '6' ? '#FF6704':
			fishtype === '7' ? '#C2FF04':
			fishtype === '8' ? '#22FF04':
			fishtype === '9' ? '#30D199':
			fishtype === '10' ? '#03B2EE':
			fishtype === '11' ? '#EE7903':
			fishtype === '12' ? '#EC4062':
			fishtype === '13' ? '#BC7792':
			fishtype === '14' ? '#BC7792':
			fishtype === '15' ? '#C5326B':
			fishtype === '16' ? '#3E7BB6':
			fishtype === '17' ? '#EE0303':
			fishtype === '18' ? '#EF6868':
							  '#FF2900';
}

// ON EACH FEATURE FUNCTION
// fishClick = function (feature, layer) {
//     layer.bindPopup("This odd lot address is " + 
//         "<strong>" + feature.properties.address + "</strong>" + 
//         " and it is owned by " + 
//         "<strong>" + feature.properties.ownername + "</strong>");
// }

