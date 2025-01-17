var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_couche_piezos_1 = new ol.format.GeoJSON();
var features_couche_piezos_1 = format_couche_piezos_1.readFeatures(json_couche_piezos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couche_piezos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couche_piezos_1.addFeatures(features_couche_piezos_1);
cluster_couche_piezos_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_couche_piezos_1
});
var lyr_couche_piezos_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_couche_piezos_1, 
                style: style_couche_piezos_1,
                popuplayertitle: 'couche_piezos',
                interactive: true,
    title: 'couche_piezos<br />\
    <img src="styles/legend/couche_piezos_1_0.png" /> A venir<br />\
    <img src="styles/legend/couche_piezos_1_1.png" /> Auto<br />\
    <img src="styles/legend/couche_piezos_1_2.png" /> Manuel<br />\
    <img src="styles/legend/couche_piezos_1_3.png" /> En Pause<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_couche_piezos_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_couche_piezos_1];
lyr_couche_piezos_1.set('fieldAliases', {'id': 'id', 'Nb_sondes': 'Nb_sondes', 'Nb_baro': 'Nb_baro', 'Type': 'Type', 'Ville': 'Ville', 'Dep': 'Dep', 'Projet': 'Projet', 'Nb_piezos': 'Nb_piezos', 'Début': 'Début', 'Fin': 'Fin', 'Durée (m)': 'Durée (m)', });
lyr_couche_piezos_1.set('fieldImages', {'id': 'TextEdit', 'Nb_sondes': 'TextEdit', 'Nb_baro': 'TextEdit', 'Type': 'TextEdit', 'Ville': 'TextEdit', 'Dep': 'TextEdit', 'Projet': 'TextEdit', 'Nb_piezos': 'TextEdit', 'Début': 'DateTime', 'Fin': 'DateTime', 'Durée (m)': 'TextEdit', });
lyr_couche_piezos_1.set('fieldLabels', {'id': 'hidden field', 'Nb_sondes': 'inline label - visible with data', 'Nb_baro': 'inline label - visible with data', 'Type': 'hidden field', 'Ville': 'inline label - visible with data', 'Dep': 'hidden field', 'Projet': 'inline label - visible with data', 'Nb_piezos': 'inline label - visible with data', 'Début': 'inline label - visible with data', 'Fin': 'hidden field', 'Durée (m)': 'inline label - visible with data', });
lyr_couche_piezos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});