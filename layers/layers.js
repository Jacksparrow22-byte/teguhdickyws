var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_OUTLINE_2 = new ol.format.GeoJSON();
var features_OUTLINE_2 = format_OUTLINE_2.readFeatures(json_OUTLINE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OUTLINE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OUTLINE_2.addFeatures(features_OUTLINE_2);
var lyr_OUTLINE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OUTLINE_2, 
                style: style_OUTLINE_2,
                popuplayertitle: "OUTLINE",
                interactive: true,
                title: '<img src="styles/legend/OUTLINE_2.png" /> OUTLINE'
            });
var format_FASILITAS_KESEHATAN_3 = new ol.format.GeoJSON();
var features_FASILITAS_KESEHATAN_3 = format_FASILITAS_KESEHATAN_3.readFeatures(json_FASILITAS_KESEHATAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITAS_KESEHATAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITAS_KESEHATAN_3.addFeatures(features_FASILITAS_KESEHATAN_3);
var lyr_FASILITAS_KESEHATAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FASILITAS_KESEHATAN_3, 
                style: style_FASILITAS_KESEHATAN_3,
                popuplayertitle: "FASILITAS_KESEHATAN",
                interactive: true,
    title: 'FASILITAS_KESEHATAN<br />\
    <img src="styles/legend/FASILITAS_KESEHATAN_3_0.png" /> APOTEK<br />\
    <img src="styles/legend/FASILITAS_KESEHATAN_3_1.png" /> PUSKESMAS<br />\
    <img src="styles/legend/FASILITAS_KESEHATAN_3_2.png" /> RUMAH SAKIT<br />\
    <img src="styles/legend/FASILITAS_KESEHATAN_3_3.png" /> <br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_OUTLINE_2.setVisible(true);lyr_FASILITAS_KESEHATAN_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_JALAN_1,lyr_OUTLINE_2,lyr_FASILITAS_KESEHATAN_3];
lyr_JALAN_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_OUTLINE_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'Luas_Ha': 'Luas_Ha', });
lyr_FASILITAS_KESEHATAN_3.set('fieldAliases', {'No': 'No', 'Long': 'Long', 'Lat': 'Lat', 'Nama': 'Nama', 'Ket': 'Ket', 'Buka_24_JA': 'Buka_24_JA', 'PARKIR': 'PARKIR', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', });
lyr_JALAN_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_OUTLINE_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_FASILITAS_KESEHATAN_3.set('fieldImages', {'No': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Nama': 'TextEdit', 'Ket': 'TextEdit', 'Buka_24_JA': 'TextEdit', 'PARKIR': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_JALAN_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_OUTLINE_2.set('fieldLabels', {'WADMKC': 'no label', 'Luas_Ha': 'no label', });
lyr_FASILITAS_KESEHATAN_3.set('fieldLabels', {'No': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Nama': 'header label - always visible', 'Ket': 'header label - always visible', 'Buka_24_JA': 'header label - always visible', 'PARKIR': 'header label - always visible', 'Alamat': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kota': 'header label - always visible', 'Provinsi': 'header label - always visible', });
lyr_FASILITAS_KESEHATAN_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});