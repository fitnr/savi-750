$(document).ready(function () {
  cartodb.createVis('map', 'https://eichnersara.cartodb.com/api/v2/viz/83b96ef2-13b1-11e6-953b-0e787de82d45/viz.json', {
    cartodb_logo: false
  })
  .done(function (vis, layers) {
    // layers and sublayers not available outside of this createVus().done() function)
    var map = vis.getNativeMap();
    brooklynTaxLotLayer = layers[1].getSubLayer(0);
            sublayer.setInteraction(true);
              sublayer.on('featureOver', function(e) {
                $("#hover").css({'display':'none','cursor': 'pointer'});
              });
              
    queensTaxLotLayer = layers[1].getSubLayer(1);
            sublayer.setInteraction(true);
              sublayer.on('featureOver', function(e) {
                $("#hover").css({'display':'none','cursor': 'pointer'});
              });

    brooklynOddLotLayer= layers[1].getSubLayer(2);
            sublayer.setInteraction(true);
           
    queensOddLotLayer= layers[1].getSubLayer(3);
            sublayer.setInteraction(true);
             // sublayer.on('featureOver', function(e, latlng, pos, data, layerNumber) {
             //            cartodb.log.log(e, latlng, pos, data, layerNumber);
             //            $("#hover").css({'display':'none','left':pos.x-75,'bottom':($(window).height()-pos.y+20), 'cursor': 'pointer'});
             //            $("#hover").find('p').text(data.place);
             //        });
  });
});