ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([444802.137956, 9191515.538685, 448728.068936, 9194716.471957]);
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
var format_Ternak_3 = new ol.format.GeoJSON();
var features_Ternak_3 = format_Ternak_3.readFeatures(json_Ternak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Ternak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ternak_3.addFeatures(features_Ternak_3);
var lyr_Ternak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ternak_3, 
                style: style_Ternak_3,
                popuplayertitle: "Ternak",
                interactive: true,
                    title: '<img src="styles/legend/Ternak_3.png" /> Ternak'
                });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Gsat_1.setVisible(true);lyr_BatasAdministrasiRW_2.setVisible(true);lyr_Ternak_3.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Gsat_1,lyr_BatasAdministrasiRW_2,lyr_Ternak_3];
lyr_BatasAdministrasiRW_2.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ternak_3.set('fieldAliases', {'Kandang': 'Kandang', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_BatasAdministrasiRW_2.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ternak_3.set('fieldImages', {'Kandang': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'TextEdit', });
lyr_BatasAdministrasiRW_2.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ternak_3.set('fieldLabels', {'Kandang': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_Ternak_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});