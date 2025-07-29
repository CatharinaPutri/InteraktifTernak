ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([443435.472856, 9191515.538685, 450094.734036, 9194716.471957]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Gsat_1 = new ol.layer.Tile({
            'title': 'Gsat',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiRW_2 = new ol.format.GeoJSON();
var features_BatasAdministrasiRW_2 = format_BatasAdministrasiRW_2.readFeatures(json_BatasAdministrasiRW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdministrasiRW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiRW_2.addFeatures(features_BatasAdministrasiRW_2);
var lyr_BatasAdministrasiRW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiRW_2, 
                style: style_BatasAdministrasiRW_2,
                popuplayertitle: "Batas Administrasi RW",
                interactive: false,
    title: 'Batas Administrasi RW<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_0.png" /> RW1<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_1.png" /> RW2<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_2.png" /> RW3<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_3.png" /> RW4<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_4.png" /> RW5<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_5.png" /> RW6<br />\
    <img src="styles/legend/BatasAdministrasiRW_2_6.png" /> RW7<br />'
        });
var format_KandangHewanTernak_3 = new ol.format.GeoJSON();
var features_KandangHewanTernak_3 = format_KandangHewanTernak_3.readFeatures(json_KandangHewanTernak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KandangHewanTernak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KandangHewanTernak_3.addFeatures(features_KandangHewanTernak_3);
var lyr_KandangHewanTernak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KandangHewanTernak_3, 
                style: style_KandangHewanTernak_3,
                popuplayertitle: "Kandang Hewan Ternak",
                interactive: true,
                    title: '<img src="styles/legend/KandangHewanTernak_3.png" /> Kandang Hewan Ternak'
                });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Gsat_1.setVisible(true);lyr_BatasAdministrasiRW_2.setVisible(true);lyr_KandangHewanTernak_3.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Gsat_1,lyr_BatasAdministrasiRW_2,lyr_KandangHewanTernak_3];
lyr_BatasAdministrasiRW_2.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_KandangHewanTernak_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_BatasAdministrasiRW_2.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_KandangHewanTernak_3.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', });
lyr_BatasAdministrasiRW_2.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_KandangHewanTernak_3.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_KandangHewanTernak_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});