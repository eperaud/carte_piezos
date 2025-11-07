var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_couche_piezos2_1 = new ol.format.GeoJSON();
var features_couche_piezos2_1 = format_couche_piezos2_1.readFeatures(json_couche_piezos2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couche_piezos2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couche_piezos2_1.addFeatures(features_couche_piezos2_1);
var lyr_couche_piezos2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_couche_piezos2_1, 
                style: style_couche_piezos2_1,
                popuplayertitle: 'couche_piezos2',
                interactive: true,
    title: 'couche_piezos2<br />\
    <img src="styles/legend/couche_piezos2_1_0.png" /> Auto<br />\
    <img src="styles/legend/couche_piezos2_1_1.png" /> Manuel<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_couche_piezos2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_couche_piezos2_1];
lyr_couche_piezos2_1.set('fieldAliases', {'id': 'id', 'Chantier': 'Chantier', 'Commune': 'Commune', 'Dep': 'Dep', 'Début': 'Début', 'Durée (m)': 'Durée (m)', 'Sonde pié': 'Sonde pié', 'Sonde baro': 'Sonde baro', 'Type': 'Type', 'Nb piezos': 'Nb piezos', 'Sonde pi_1': 'Sonde pi_1', });
lyr_couche_piezos2_1.set('fieldImages', {'id': 'TextEdit', 'Chantier': 'TextEdit', 'Commune': 'TextEdit', 'Dep': 'TextEdit', 'Début': 'DateTime', 'Durée (m)': 'TextEdit', 'Sonde pié': 'TextEdit', 'Sonde baro': 'TextEdit', 'Type': 'TextEdit', 'Nb piezos': 'TextEdit', 'Sonde pi_1': 'TextEdit', });
lyr_couche_piezos2_1.set('fieldLabels', {'id': 'inline label - always visible', 'Chantier': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Dep': 'hidden field', 'Début': 'inline label - always visible', 'Durée (m)': 'hidden field', 'Sonde pié': 'hidden field', 'Sonde baro': 'hidden field', 'Type': 'inline label - always visible', 'Nb piezos': 'inline label - always visible', 'Sonde pi_1': 'hidden field', });
lyr_couche_piezos2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});