var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Informations_1 = new ol.format.GeoJSON();
var features_Informations_1 = format_Informations_1.readFeatures(json_Informations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Informations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informations_1.addFeatures(features_Informations_1);
var lyr_Informations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informations_1, 
                style: style_Informations_1,
                popuplayertitle: 'Informations :',
                interactive: true,
    title: 'Informations :<br />\
    <img src="styles/legend/Informations_1_0.png" /> Manuel<br />\
    <img src="styles/legend/Informations_1_1.png" /> Auto<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Informations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Informations_1];
lyr_Informations_1.set('fieldAliases', {'id': 'id', 'Chantier': 'Chantier', 'Commune': 'Commune', 'Dep': 'Dep', 'Début': 'Début', 'Durée (m)': 'Durée (m)', 'Sonde pié': 'Sonde pié', 'Sonde baro': 'Sonde baro', 'Type': 'Type', 'Nb piezos': 'Nb piezos', 'Sonde pi_2': 'Sonde pi_2', 'Sonde pi_3': 'Sonde pi_3', 'Visite_1': 'Visite_1', 'Nb sondes': 'Nb sondes', });
lyr_Informations_1.set('fieldImages', {'id': 'TextEdit', 'Chantier': 'TextEdit', 'Commune': 'TextEdit', 'Dep': 'TextEdit', 'Début': 'DateTime', 'Durée (m)': 'TextEdit', 'Sonde pié': 'TextEdit', 'Sonde baro': 'TextEdit', 'Type': 'TextEdit', 'Nb piezos': 'TextEdit', 'Sonde pi_2': 'TextEdit', 'Sonde pi_3': 'TextEdit', 'Visite_1': 'DateTime', 'Nb sondes': 'TextEdit', });
lyr_Informations_1.set('fieldLabels', {'id': 'inline label - always visible', 'Chantier': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Dep': 'hidden field', 'Début': 'inline label - always visible', 'Durée (m)': 'hidden field', 'Sonde pié': 'inline label - always visible', 'Sonde baro': 'inline label - visible with data', 'Type': 'inline label - always visible', 'Nb piezos': 'inline label - always visible', 'Sonde pi_2': 'inline label - visible with data', 'Sonde pi_3': 'inline label - visible with data', 'Visite_1': 'hidden field', 'Nb sondes': 'hidden field', });
lyr_Informations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});