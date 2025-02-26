var wms_layers = [];


        var lyr_GoogleSatellit_0 = new ol.layer.Tile({
            'title': 'Google Satellit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_survey_1 = new ol.format.GeoJSON();
var features_survey_1 = format_survey_1.readFeatures(json_survey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_1.addFeatures(features_survey_1);
var lyr_survey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_1, 
                style: style_survey_1,
                popuplayertitle: 'survey',
                interactive: true,
    title: 'survey<br />\
    <img src="styles/legend/survey_1_0.png" /> <br />\
    <img src="styles/legend/survey_1_1.png" /> <br />\
    <img src="styles/legend/survey_1_2.png" /> <br />\
    <img src="styles/legend/survey_1_3.png" /> <br />' });

lyr_GoogleSatellit_0.setVisible(true);lyr_survey_1.setVisible(true);
var layersList = [lyr_GoogleSatellit_0,lyr_survey_1];
lyr_survey_1.set('fieldAliases', {'fid': 'fid', 'Nr': 'Nr', 'notes': 'Art', 'unique-id': 'unique-id', 'höjd': 'Höjd', 'dbh': 'Stamdiameter', 'vitalitet': 'Vitalitet', 'rotskador': 'Rotskador', 'stamskador': 'Stamskador', 'kronskador': 'Kronskador', 'svamp': 'Svamp', 'risk': 'Risk', 'skadegörare': 'Skadegörare', 'biologiskt_värde': 'Biologiskt värde', 'bevarandevärde': 'Bevarandevärde', 'skyddsvärt_träd': 'Skyddsvärt Träd', 'åtgärd': 'Åtgärd', 'tidsåtgång': 'Tidsåtgång', });
lyr_survey_1.set('fieldImages', {'fid': 'Hidden', 'Nr': 'TextEdit', 'notes': 'TextEdit', 'unique-id': 'Hidden', 'höjd': 'Range', 'dbh': 'Range', 'vitalitet': 'ValueMap', 'rotskador': 'ValueMap', 'stamskador': 'ValueMap', 'kronskador': 'ValueMap', 'svamp': 'ValueMap', 'risk': 'ValueMap', 'skadegörare': 'TextEdit', 'biologiskt_värde': 'ValueMap', 'bevarandevärde': 'Hidden', 'skyddsvärt_träd': 'ValueMap', 'åtgärd': 'TextEdit', 'tidsåtgång': 'Range', });
lyr_survey_1.set('fieldLabels', {'Nr': 'inline label - always visible', 'notes': 'inline label - always visible', 'höjd': 'hidden field', 'dbh': 'hidden field', 'vitalitet': 'hidden field', 'rotskador': 'hidden field', 'stamskador': 'hidden field', 'kronskador': 'hidden field', 'svamp': 'hidden field', 'risk': 'hidden field', 'skadegörare': 'hidden field', 'biologiskt_värde': 'hidden field', 'skyddsvärt_träd': 'hidden field', 'åtgärd': 'inline label - visible with data', 'tidsåtgång': 'inline label - visible with data', });
lyr_survey_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});