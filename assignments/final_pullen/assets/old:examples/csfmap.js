$(document).ready(function () {
  createVis('map', 'csf_fish.json', {
  })
//  .done(function (vis, layers) {
    // layers and sublayers not available outside of this createVus().done() function)

    //commenting out layers
//    var map = vis.getNativeMap();

//    brooklynTaxLotLayer = layers[1].getSubLayer(0);
//            sublayer.setInteraction(true);
//              sublayer.on('featureOver', function(e) {
//                $("#hover").css({'display':'none','cursor': 'pointer'});
//              });
//    //this layer.......          
//    queensTaxLotLayer = layers[1].getSubLayer(1);
//            sublayer.setInteraction(true);
//              sublayer.on('featureOver', function(e) {
//                $("#hover").css({'display':'none','cursor': 'pointer'});
//              });
    //this layer.........
//    brooklynOddLotLayer= layers[1].getSubLayer(2);
//            sublayer.setInteraction(true);
     //and this layer.....      
//    queensOddLotLayer= layers[1].getSubLayer(3);
//           sublayer.setInteraction(true);
             // sublayer.on('featureOver', function(e, latlng, pos, data, layerNumber) {
             //            cartodb.log.log(e, latlng, pos, data, layerNumber);
             //            $("#hover").css({'display':'none','left':pos.x-75,'bottom':($(window).height()-pos.y+20), 'cursor': 'pointer'});
             //            $("#hover").find('p').text(data.place);
             //        });
  });
});