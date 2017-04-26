// This jquery plugin comes from https://github.com/atlefren/storymap
// licensed under the MIT license

    (function ($) {
    'use strict';


    $.fn.storymap = function(options) {

        var defaults = {
            selector: '[data-place]',
            breakpointPos: '33.333%',
            createMap: function () {
                // create a map in the "map" div, set the view to a given place and zoom
                var map = L.map('map').setView([42.77, -77.39], 5);

                // add an OpenStreetMap tile layer (I did not use this map, it was called in the cartodb framework from Mapbox Studio)
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                return map;
            }
        };

        var settings = $.extend(defaults, options);


        if (typeof(L) === 'undefined') {
            throw new Error('Storymap requires Laeaflet');
        }
        if (typeof(_) === 'undefined') {
            throw new Error('Storymap requires underscore.js');
        }

        function getDistanceToTop(elem, top) {
            var docViewTop = $(window).scrollTop();

            var elemTop = $(elem).offset().top;

            var dist = elemTop - docViewTop;

            var d1 = top - dist;

            if (d1 < 0) {
                return $(window).height();
            }
            return d1;

        }

        function highlightTopPara(paragraphs, top) {

            var distances = _.map(paragraphs, function (element) {
                var dist = getDistanceToTop(element, top);
                return {el: $(element), distance: dist};
            });

            var closest = _.min(distances, function (dist) {
                return dist.distance;
            });

            _.each(paragraphs, function (element) {
                var paragraph = $(element);
                if (paragraph[0] !== closest.el[0]) {
                    paragraph.trigger('notviewing');
                }
            });

            if (!closest.el.hasClass('viewing')) {
                closest.el.trigger('viewing');
            }
        }

        function watchHighlight(element, searchfor, top) {
            var paragraphs = element.find(searchfor);
            highlightTopPara(paragraphs, top);
            $(window).scroll(function () {
                highlightTopPara(paragraphs, top);
            });
        }

        var makeStoryMap = function (element, markers) {

            var topElem = $('<div class="breakpoint-current"></div>')
                .css('top', settings.breakpointPos);
            $('body').append(topElem);

            var top = topElem.offset().top - $(window).scrollTop();

            var searchfor = settings.selector;

            var paragraphs = element.find(searchfor);

            paragraphs.on('viewing', function () {
                $(this).addClass('viewing');
            });

            paragraphs.on('notviewing', function () {
                $(this).removeClass('viewing');
            });

            watchHighlight(element, searchfor, top);
            

            // changes made to plug in file: changed create map function so that plugin will work with the cartodb createVis because it needs a leaflet map, needed to create map from cartodb before plugin functions run. 
            // moved variables to outside of the .done function, and functions that recenter the map to inside the .done function so that data is loaded before function is called

            var initPoint;
            var initZoom;
            var fg;
            var map;

            cartodb.createVis('map', 'https://lpullen.carto.com/api/v2/viz/0af58d2e-2a13-11e7-9e6d-0e05a8b3e3d7/viz.json', {
                cartodb_logo: false
            })
        
            .done(function (vis, layers) {
                map = vis.getNativeMap();
                initPoint = map.getCenter();
                initZoom = map.getZoom();
                fg  = L.featureGroup().addTo(map);
            });


            function showMapView(key) {

                fg.clearLayers();
                if (key === 'overview') {
                    map.setView(initPoint, initZoom, true);
                } else if (markers[key]) {
                    var marker = markers[key];
                    var layer = marker.layer;
                    if(typeof layer !== 'undefined'){
                      fg.addLayer(layer);
                    };
                    fg.addLayer(L.marker([marker.lat, marker.lon]));

                    map.setView([marker.lat, marker.lon], marker.zoom, 1);
                }

            }

            paragraphs.on('viewing', function () {
                showMapView($(this).data('place'));
            });
        };

        makeStoryMap(this, settings.markers);

        return this;
    }

}(jQuery));
