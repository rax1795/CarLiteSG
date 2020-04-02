function sortSelect(selElem) {
    var tmpAry = new Array();
    for (var i = 0; i < selElem.options.length; i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i = 0; i < tmpAry.length; i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }

    //Add SG option at the top of sorted list
    // var option = document.createElement("option");
    // option.text = "SINGAPORE"
    // option.value = [103.8198, 1.3521]
    // option.setAttribute('selected', true);
    // selElem.add(option, 0);
    $('.select2').val([]);
    return;
}

var subzone23 = $.ajax({
    url: "http://127.0.0.1:5000/data/subzone_metrics.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded1555."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
// var centroids = $.ajax({
//     url: "http://127.0.0.1:5000/data/subzone_metrics_centroid.geojson",
//     dataType: "json",
//     success: console.log(" data successfully loaded1."),
//     error: function (xhr) {
//         alert(xhr.statusText)
//     }
// });
var bicycle0 = $.ajax({
    url: "http://127.0.0.1:5000/data/bicyclerack.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded2."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var bustop0 = $.ajax({
    url: "http://127.0.0.1:5000/data/busstop.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded3."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var linkway0 = $.ajax({
    url: "http://127.0.0.1:5000/data/covered_linkway.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded4."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var cycling0 = $.ajax({
    url: "http://127.0.0.1:5000/data/cyclingpath.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded5."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var carpark0 = $.ajax({
    url: "http://127.0.0.1:5000/data/hdb_carpark.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded6."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var mrt0 = $.ajax({
    url: "http://127.0.0.1:5000/data/mrt_lrt_station.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded7."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var park0 = $.ajax({
    url: "http://127.0.0.1:5000/data/park_connector_loop.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded8."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var roadcross0 = $.ajax({
    url: "http://127.0.0.1:5000/data/road_crossing.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded9."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var schoolzone0 = $.ajax({
    url: "http://127.0.0.1:5000/data/schoolzone.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded10."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var silver0 = $.ajax({
    url: "http://127.0.0.1:5000/data/silverzone.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var roadhumps0 = $.ajax({
    url: "http://127.0.0.1:5000/data/road_hump.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var schools0 = $.ajax({
    url: "http://127.0.0.1:5000/data/schools_pri_sec.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var supermarkets0 = $.ajax({
    url: "http://127.0.0.1:5000/data/supermarkets.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var residences0 = $.ajax({
    url: "http://127.0.0.1:5000/data/residences_centroid.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var preschools0 = $.ajax({
    url: "http://127.0.0.1:5000/data/preschools.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var polyclinics0 = $.ajax({
    url: "http://127.0.0.1:5000/data/polyclinics.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var nationalpark0 = $.ajax({
    url: "http://127.0.0.1:5000/data/nationalparks.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var hopitals0 = $.ajax({
    url: "http://127.0.0.1:5000/data/hospitals.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var eldercare0 = $.ajax({
    url: "http://127.0.0.1:5000/data/eldercare_centre.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var hawker0 = $.ajax({
    url: "http://127.0.0.1:5000/data/hawker.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var chas0 = $.ajax({
    url: "http://127.0.0.1:5000/data/CHAS_clinics.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        alert(xhr.statusText)
    }
});

var speedstrips0 = $.ajax({
    url: "http://127.0.0.1:5000/data/speed_regulating_strip.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
var grey2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    subdomains: 'abcd',
});

var mapb2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoieGlhb3Jvbmd3IiwiYSI6ImNrNXR1aHRhZDBuZDAzbXA0YzI0a2RiN2IifQ.ox_6BG-45OzGVzzMXVY1IA'
});

var map2 = new L.map('map2', {
    layers: [grey2, mapb2],
    zoomControl: false
}).setView([1.3521, 103.8198], 11);
$.when(subzone23, speedstrips0, roadhumps0, chas0, linkway0, hawker0, hopitals0, park0, silver0, roadcross0, roadhumps0, supermarkets0, schools0, residences0, preschools0, polyclinics0, nationalpark0).done(function () {
    var linkway16 = L.geoJSON()
    var roadcross16 = L.geoJSON(),
        schoolzone16 = L.geoJSON(),
        silver16 = L.geoJSON(),
        roadhump16 = L.geoJSON(),
        speedstrips16 = L.geoJSON()

    function zoomToFeature1(e) {
        map2.fitBounds(e.target.getBounds());
    }
    
    function selectDropdown1(z) {
        var layer = z.target;
        var xCoord = layer.feature.properties.X_COORD;
        var yCoord = layer.feature.properties.Y_COORD;
        var array = [xCoord, yCoord];

        // $('select').select2().select2('val', array)
        $('.map2').val([array]).trigger('change');
    }

    function getColor1(d) {
        console.log(d)
        return d >= 81 ? '#1a9641' :
            d >= 61 ? '#a6d96a' :
                d >= 41 ? '#ffffbf' :
                    d >= 21 ? '#fdae61' :
                        '#d7191c';
    }

    function style1(feature) {
        return {
            fillColor: getColor1(feature.properties.FIN_SCORE),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    // function populateTable(x) {
    //     var layer = x.target;

    //     var label = document.getElementById("subzone-selected");
    //     label.innerHTML = layer.feature.properties.SUBZONE_N;

    //     var row1 = document.getElementById("metrictable2").rows[1].cells;

    //     var row2 = document.getElementById("metrictable2").rows[2].cells;

    //     var row3 = document.getElementById("metrictable2").rows[3].cells;

    //     var row4 = document.getElementById("metrictable2").rows[4].cells;

    //     var row5 = document.getElementById("metrictable2").rows[5].cells;

    //     var row6 = document.getElementById("metrictable2").rows[6].cells;

    //     if(parseInt(row1[2].innerHTML)+parseInt(row2[2].innerHTML)+parseInt(row3[2].innerHTML)+parseInt(row4[2].innerHTML)+parseInt(row5[2].innerHTML)!=100){
    //         row6[2].innerHTML = parseInt(row1[2].innerHTML)+parseInt(row2[2].innerHTML)+parseInt(row3[2].innerHTML)+parseInt(row4[2].innerHTML)+parseInt(row5[2].innerHTML) + " - Not equal to hundred  ";
    //         row1[1].innerHTML = "-";
    //         row2[1].innerHTML = "-";
    //         row3[1].innerHTML = "-";
    //         row4[1].innerHTML = "-";
    //         row5[1].innerHTML = "-";
    //         row6[1].innerHTML = "-";
    //     }else{
    //         row6[2].innerHTML = "100";
    //     var row1 = document.getElementById("metrictable2").rows[1].cells;
    //     row1[1].innerHTML = layer.feature.properties.CONNECT + " / " + row1[2].innerHTML;

    //     var row2 = document.getElementById("metrictable2").rows[2].cells;
    //     row2[1].innerHTML = layer.feature.properties.LANDUSE + " / " + row2[2].innerHTML;

    //     var row3 = document.getElementById("metrictable2").rows[3].cells;
    //     row3[1].innerHTML = layer.feature.properties.FACILITIES + " / " + row3[2].innerHTML;

    //     var row4 = document.getElementById("metrictable2").rows[4].cells;
    //     row4[1].innerHTML = layer.feature.properties.PARKING + " / " + row4[2].innerHTML;

    //     var row5 = document.getElementById("metrictable2").rows[5].cells;
    //     row5[1].innerHTML = layer.feature.properties.SAFETY + " / " + row5[2].innerHTML;

    //     var row6 = document.getElementById("metrictable2").rows[6].cells;
    //     row6[1].innerHTML = layer.feature.properties.FIN_SCORE + "%";
    //     }
    // };

    function populateTable1(x) {
        var layer = x.target;

        var label = document.getElementById("subzone-selected2");
        label.innerHTML = layer.feature.properties.SUBZONE_N;

        if(sessionStorage.getItem("availPublic") === null){
            var row1 = document.getElementById("metrictable2").rows[1].cells;
            row1[1].innerHTML = layer.feature.properties.CONNECT + " / 40";

            var row2 = document.getElementById("metrictable2").rows[2].cells;
            row2[1].innerHTML = layer.feature.properties.LANDUSE + " / 25";

            var row3 = document.getElementById("metrictable2").rows[3].cells;
            row3[1].innerHTML = layer.feature.properties.FACILITIES + " / 15";

            var row4 = document.getElementById("metrictable2").rows[4].cells;
            row4[1].innerHTML = parseFloat(layer.feature.properties.PARKING) + " / 10";

            var row5 = document.getElementById("metrictable2").rows[5].cells;
            row5[1].innerHTML = layer.feature.properties.SAFETY + " / 10";

            var row6 = document.getElementById("metrictable2").rows[6].cells;
            var final_score = layer.feature.properties.FIN_SCORE;
        }else{
            var availPublic = parseInt(sessionStorage.getItem('availPublic')),
                availAlt = parseInt(sessionStorage.getItem('availAlt')),
                roadInt = parseInt(sessionStorage.getItem('roadInt')),
                connectivity = (layer.feature.properties.NLEN_PSQM * availAlt) + (layer.feature.properties.PERC_HOMEC * availPublic) + (layer.feature.properties.XTION_PSQM * roadInt),

                divesityLand = parseInt(sessionStorage.getItem('divesityLand')),
                proximityFacil = parseInt(sessionStorage.getItem('proximityFacil')),
                landUse = parseInt((layer.feature.properties.PERC_USE * divesityLand) + (layer.feature.properties.PERC_FACIL * proximityFacil)),

                endMile = parseInt(sessionStorage.getItem('endMile')),
                shelter = parseInt(sessionStorage.getItem('shelter')),
                facilities = (layer.feature.properties['BIKERACKS?'] * endMile) + (layer.feature.properties.NPERC_SHEL * shelter),

                carLots = parseInt(sessionStorage.getItem('carLots')),
                carPricing = parseInt(sessionStorage.getItem('carPricing')),
                parking = ((1 - layer.feature.properties.NLOTS_PHH) * carLots) + ((1 - layer.feature.properties.CP_SCORE) * carPricing),
                
                safetys = parseInt(sessionStorage.getItem('safety'))
            if(layer.feature.properties["SCHOOL?"]==1 && layer.feature.properties["ELDERZONE?"]==1){
                var safety = ((layer.feature.properties.NRDSTY_PM + layer.feature.properties["ELD_FRNLY?"] + layer.feature.properties["SCH_FRNLY?"])/3)*safetys
            } else if (layer.feature.properties["SCHOOL?"]==1 && layer.feature.properties["ELDERZONE?"]==0){
                var safety = ((layer.feature.properties.NRDSTY_PM +  layer.feature.properties["SCH_FRNLY?"])/2)*safetys
            } else if (layer.feature.properties["SCHOOL?"]==0 && layer.feature.properties["ELDERZONE?"]==1){
                var safety = ((layer.feature.properties.NRDSTY_PM +  layer.feature.properties["ELD_FRNLY?"])/2)*safetys
            } else{
                var safety = layer.feature.properties.NRDSTY_PM*safetys
            }

            var row1 = document.getElementById("metrictable2").rows[1].cells;
            row1[1].innerHTML = Math.round(connectivity) + " / "+ sessionStorage.getItem('connectivity');

            var row2 = document.getElementById("metrictable2").rows[2].cells;
            row2[1].innerHTML = Math.round(landUse) + " / " +  sessionStorage.getItem('landUse');

            var row3 = document.getElementById("metrictable2").rows[3].cells;
            row3[1].innerHTML = Math.round(facilities) + " / " + sessionStorage.getItem('facilities');

            var row4 = document.getElementById("metrictable2").rows[4].cells;
            row4[1].innerHTML = Math.round(parking) + " / " + sessionStorage.getItem('parking');

            var row5 = document.getElementById("metrictable2").rows[5].cells;
            row5[1].innerHTML = Math.round(safety) + " / " + sessionStorage.getItem('safety');

            var row6 = document.getElementById("metrictable2").rows[6].cells;
            var final_score = Math.round((connectivity+landUse+facilities+parking+safety));
        }

        if (final_score <= 20) {
            row6[1].innerHTML = final_score + "%" + "&nbsp;&nbsp; <img src='/static/icons/scoring-red.png' width='15px'>";
        }
        else if (final_score <= 40) {
            row6[1].innerHTML = final_score+ "%" + "&nbsp;&nbsp; <img src='/static/icons/scoring-orange.png' width='15px'>";
        }
        else if (final_score <= 60) {
            row6[1].innerHTML = final_score + "%" + "&nbsp;&nbsp; <img src='/static/icons/scoring-yellow.png' width='15px'>";
        }
        else if (final_score <= 80) {
            row6[1].innerHTML = final_score + "%" + "&nbsp;&nbsp; <img src='/static/icons/scoring-lightgreen.png' width='15px'>";
        }
        else {
            row6[1].innerHTML = final_score + "%" + "&nbsp;&nbsp; <img src='/static/icons/scoring-green.png' width='15px'>";
        }
    };

    function highlightFeature1(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        //     layer.bringToFront();
        // }
        // info.update(layer.feature.properties);
    }

    function resetHighlight1(e) {
        subzone3.resetStyle(e.target);
        // info.update();
    }

    var legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function (map2) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 20, 40, 60, 80],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor1(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '-100');
        }

        return div;
    };

    legend.addTo(map2);
    function onEachSubzone1(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            map2.getZoom() >= 15
                ? layer.bindTooltip(feature.properties.SUBZONE_N, { permanent: true, direction: "center" })
                : layer.bindTooltip(feature.properties.SUBZONE_N, { permanent: false, direction: "center" })
        }
        layer.on({
            click: zoomToFeature1,
            mouseover: highlightFeature1,
            mouseout: resetHighlight1,
        });
        layer.on({
            click: populateTable1,
        });

        if (feature.properties) {
            var y = document.getElementById("secondList");
            var option = document.createElement("option");
            option.text = feature.properties.SUBZONE_N;
            option.value = ([feature.properties.X_COORD, feature.properties.Y_COORD])
            y.add(option);
        };

        layer.on({
            click: selectDropdown1
        });
    }

    var subzone3 = L.geoJSON(subzone23.responseJSON, {
        onEachFeature: onEachSubzone1,
        style: style1
    })

    subzone3.addTo(map2);

    // function onEachCentroid(feature, layer) {
    //     // does this feature have a property named popupContent?
    //     if (feature.properties) {
    //         var x = document.getElementById("firstList");
    //         var option = document.createElement("option");
    //         option.text = feature.properties.SUBZONE_N;
    //         option.value = ([feature.geometry.coordinates[0], feature.geometry.coordinates[1]])
    //         x.add(option);
    //     }
    // }
    // var centroid2 = L.geoJSON(centroids.responseJSON, {
    //     onEachFeature: onEachCentroid,
    //     style: style
    // })


    var bikerackIcon = L.icon({
        iconUrl: '/static/icons/bikerack.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachBicycle1(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup("<b>Number of Bicycle Racks: </b>" + feature.properties.RACK_CNT);
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(bikerackIcon)
        }
    }


    var bicycle162 = L.geoJSON(bicycle0.responseJSON, {
        onEachFeature: onEachBicycle1
    })

    var bicycle16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-bicycle mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    bicycle16.addLayer(bicycle162);


    var busIcon = L.icon({
        iconUrl: '/static/icons/bus.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    // function onEachBustop(feature, layer) {
    //     // does this feature have a property named popupContent?
    //     if (feature.properties) {
    //         layer.bindPopup(feature.properties.LOC_DESC);
    //     }
    //     if (layer instanceof L.Marker) {
    //         layer.setIcon(busIcon);
    //     }
    // }
    var bustop162 = L.geoJSON(bustop0.responseJSON, {
        // onEachFeature: onEachBustop,
        pointToLayer: function (feature, latlng) {
            if (feature.properties.LOC_DESC == null) {
                return L.marker(latlng, {icon: busIcon}).bindPopup(
                    "<b>Bus Stop Number: </b>" + feature.properties.BUS_STOP_N
                    );
            }
            else {
                return L.marker(latlng, {icon: busIcon}).bindPopup(
                    "<b>Bus Stop Number: </b>" + feature.properties.BUS_STOP_N +
                    "<br><b>Bus Stop Name: </b>" + feature.properties.LOC_DESC.toUpperCase()
                    );
            }     
        }
    })

    var bustop16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-bus mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    bustop16.addLayer(bustop162);

    function onEachLinkway1(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup('SHELTERED WALKWAY');
        }
    }
    var linkway16 = L.geoJSON(linkway0.responseJSON, {
        onEachFeature: onEachLinkway1,
        style: function (feature) {
            return {color: '#a02c5c',
                    weight: 2};
        }
    })

    function onEachCycling(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Cycling Path: </b>" + feature.properties.CYL_PATH.toUpperCase() +
                "<br><b>Main Agency: </b>" + feature.properties.AGENCY_MAI.toUpperCase()
                );
        }
    }
    var cycling16 = L.geoJSON(cycling0.responseJSON, {
        onEachFeature: onEachCycling,
        style: function (feature) {
            return {color: '#087353',
                    weight: 3};
        }
    })

    var carparkIcon = L.icon({
        iconUrl: '/static/icons/carpark.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachCarpark(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Car Park: </b>" + feature.properties.address.toUpperCase() +
                "<br><b>Type: </b>" + feature.properties.car_park_t.toUpperCase() +
                "<br><b>Parking Type: </b>" + feature.properties.type_of_pa.toUpperCase()
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(carparkIcon)
        }
    }

    var carpark162 = L.geoJSON(carpark0.responseJSON, {
        onEachFeature: onEachCarpark
    })

    var carpark16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-car mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    carpark16.addLayer(carpark162);

    var MRTicon = L.icon({
        iconUrl: '/static/icons/train.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachMRT(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Station Number: </b>" + feature.properties.STN_NO +
                "<br><b>Name: </b>" + feature.properties.STN_NAME.toUpperCase()
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(MRTicon)
        }
    }

    var mrt162 = L.geoJSON(mrt0.responseJSON, {
        onEachFeature: onEachMRT,
    })

    var mrt16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-train mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    mrt16.addLayer(mrt162);

    function onEachroad(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup('ROAD CROSSING');
        }
    }
    var roadcross16 = L.geoJSON(roadcross0.responseJSON, {
        onEachFeature: onEachroad,
        style: function (feature) {
            return {color: '#700460',
                    weight: 3};
        }
    })


    function onEachSchoolzone(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(
                "<b>School Zone Site: </b>" + feature.properties.SITENAME.toUpperCase()
            );
        }
    }

    var schoolzone16 = L.geoJSON(schoolzone0.responseJSON, {
        onEachFeature: onEachSchoolzone,
        style: function (feature) {
            return {color: '#15c285',
                    weight: 3};
        }
    })


    function onEachSilverzone(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(
                "<b>Silver Zone Site: </b>" + feature.properties.SITENAME.toUpperCase()
            );
        }
    }

    var silver16 = L.geoJSON(silver0.responseJSON, {
        onEachFeature: onEachSilverzone,
        style: function (feature) {
            return {color: '#045359',
                    weight: 3};
        }
    })

    
    function onEachRoadhump(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(
                "ROAD HUMP"
            );
        }
    }

    var roadhump16 = L.geoJSON(roadhumps0.responseJSON, {
        onEachFeature: onEachRoadhump,
        style: function (feature) {
            return {color: '#ec0f47',
                    weight: 3};
        }
    })


    function onEachSpeedstrip(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(
                "SPEED REGULATING STRIP"
            );
        }
    }

    var speedstrips16 = L.geoJSON(speedstrips0.responseJSON, {
        onEachFeature: onEachSpeedstrip,
        style: function (feature) {
            return {color: '#ee6b3b',
                    weight: 3};
        }
    })


    var schoolIcon = L.icon({
        iconUrl: '/static/icons/school.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachSchool(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>School: </b>" + feature.properties.PIO_NAME.toUpperCase() + 
                "<br><b>Address: </b>" + feature.properties.POI_ADDRES.toUpperCase() + 
                "<br><b>Postal Code: </b>" + feature.properties.POSTCODE +
                "<br><b>Category: </b>" + feature.properties.POI_CHAR.toUpperCase()
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(schoolIcon)
        }
    }
    var schools162 = L.geoJSON(schools0.responseJSON, {
        onEachFeature: onEachSchool
    })

    var schools16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-graduation-cap mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    schools16.addLayer(schools162);


    var supermarketIcon = L.icon({
        iconUrl: '/static/icons/supermarket.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachSupermarket(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Supermarket: </b>" + feature.properties.LIC_NAME.toUpperCase() +
                "<br><b>Street Name: </b>" + feature.properties.STR_NAME.toUpperCase() +
                "<br><b>Postal Code: </b>" + feature.properties.POSTCODE
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(supermarketIcon)
        }
    }
    var supermarkets162 = L.geoJSON(supermarkets0.responseJSON, {
        onEachFeature: onEachSupermarket
    })

    var supermarkets16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-shopping-cart mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    supermarkets16.addLayer(supermarkets162);


    var residenceIcon = L.icon({
        iconUrl: '/static/icons/residence.png',
        iconsize: [35, 35],
        popupAnchor: [-5, -14],
    });

    // function onEachResidence(feature, layer) {
    //     // does this feature have a property named popupContent?
    //     if (feature.properties) {
    //         layer.bindPopup("Residence");
    //     }
    //     if (layer instanceof L.Marker) {
    //         layer.setIcon(residenceIcon)
    //     }
    // }

    var residences162 = L.geoJSON(residences0.responseJSON, {
        // onEachFeature: onEachResidence
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: residenceIcon}).bindPopup("RESIDENCE");
        }
    })

    var residences16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        // disableClusteringAtZoom: 17,
        // spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-home mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    residences16.addLayer(residences162);


    var preschIcon = L.icon({
        iconUrl: '/static/icons/preschool.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachPreschool(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Preschool: </b>" + feature.properties.CENTRE_NAM.toUpperCase() +
                "<br><b>Address: </b>" + feature.properties.ADDRESS.toUpperCase()
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(preschIcon)
        }
    }

    var preschools162 = L.geoJSON(preschools0.responseJSON, {
        onEachFeature: onEachPreschool
    })

    var preschools16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-child mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    preschools16.addLayer(preschools162);


    var polyclinicIcon = L.icon({
        iconUrl: '/static/icons/polyclinic.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachPolyclinic(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Polyclinic: </b>" + feature.properties.Names.toUpperCase() +
                "<br><b>Address: </b>" + feature.properties.Address.toUpperCase() +
                "<br><b>Postal Code: </b>" + feature.properties.Postal_cod
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(polyclinicIcon)
        }
    }
    var polyclinics162 = L.geoJSON(polyclinics0.responseJSON, {
        onEachFeature: onEachPolyclinic
    })

    var polyclinics16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-clinic-medical mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    polyclinics16.addLayer(polyclinics162);


    var parkIcon = L.icon({
        iconUrl: '/static/icons/park.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachNationalpark(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            if (feature.properties.DESCRIPTIO == null) {
                layer.bindPopup(
                    "<b>Park Name: </b>" + feature.properties.NAME.toUpperCase()
                    );
            }
            else {
                layer.bindPopup(
                    "<b>Park Name: </b>" + feature.properties.NAME.toUpperCase() +
                    "<br><b>Description: </b>" + feature.properties.DESCRIPTIO
                    );
            }
            if (feature.properties.NAME == "Sisters3267500e+004") {
                layer.bindPopup(
                    "<b>Park Name: </b>" + "SISTERS' ISLAND MARINE PARK"
                    );
            }
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(parkIcon)
        }
    }

    var nationalpark162 = L.geoJSON(nationalpark0.responseJSON, {
        onEachFeature: onEachNationalpark
    })

    var nationalpark16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-tree mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    nationalpark16.addLayer(nationalpark162);


    var hospitalIcon = L.icon({
        iconUrl: '/static/icons/hospital.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachHospital(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Hospital: </b>" + (feature.properties.name).split("\n")[0].toUpperCase() +
                "<br><b>Address: </b>" + feature.properties.Address.toUpperCase() +
                "<br><b>Postal Code: </b>" + feature.properties.Postal_Cod
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(hospitalIcon)
        }
    }
    var hopitals162 = L.geoJSON(hopitals0.responseJSON, {
        onEachFeature: onEachHospital
    })

    var hopitals16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-hospital mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    hopitals16.addLayer(hopitals162);


    var eldercareIcon = L.icon({
        iconUrl: '/static/icons/eldercare.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachEldercare(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>Eldercare: </b>" + feature.properties.NAME.toUpperCase() +
                "<br><b>Address: </b>" + feature.properties.ADDRESSSTR.toUpperCase() +
                "<br><b>Postal Code: </b>" + feature.properties.ADDRESSPOS
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(eldercareIcon)
        }
    }

    var eldercare162 = L.geoJSON(eldercare0.responseJSON, {
        onEachFeature: onEachEldercare
    })

    var eldercare16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-blind mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    eldercare16.addLayer(eldercare162);


    var hawkerIcon = L.icon({
        iconUrl: '/static/icons/hawkercentre.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachHawker(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            var url = feature.properties.PHOTOURL;
            if (feature.properties.ADDRESS_MY == null) {
                if (url == null) {
                    layer.bindPopup(
                        "<b>Hawker Centre: </b>" + feature.properties.Name.toUpperCase() +
                        "<br><b>Number of Food Stalls: </b>" + feature.properties.NO_OF_FOOD
                        );
                }
                else {
                    layer.bindPopup(
                        "<b>Hawker Centre: </b>" + feature.properties.Name.toUpperCase() +
                        "<br><b>Number of Food Stalls: </b>" + feature.properties.NO_OF_FOOD +
                        // "<br><b>Description: </b>" + feature.properties.DESCRIPT_1 +
                        "<br><img src='" + url + "' width=300px>"  
                        );
                }
            }
            else {
                if (url == null) {
                    layer.bindPopup(
                        "<b>Hawker Centre: </b>" + feature.properties.Name.toUpperCase() +
                        "<br><b>Address: </b>" + feature.properties.ADDRESS_MY.toUpperCase() +
                        "<br><b>Number of Food Stalls: </b>" + feature.properties.NO_OF_FOOD
                        );
                }
                else {
                    layer.bindPopup(
                        "<b>Hawker Centre: </b>" + feature.properties.Name.toUpperCase() +
                        "<br><b>Address: </b>" + feature.properties.ADDRESS_MY.toUpperCase() +
                        "<br><b>Number of Food Stalls: </b>" + feature.properties.NO_OF_FOOD +
                        // "<br><b>Description: </b>" + feature.properties.DESCRIPT_1 +
                        "<br><img src='" + url + "' width=300px>"  
                        );
                }
            }
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(hawkerIcon)
        }
    }

    var hawker162 = L.geoJSON(hawker0.responseJSON, {
        onEachFeature: onEachHawker
    })

    var hawker16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-utensils mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    hawker16.addLayer(hawker162);


    var chasclinicIcon = L.icon({
        iconUrl: '/static/icons/chasclinics.png',
        iconsize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachChas(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup(
                "<b>CHAS Clinic: </b>" + feature.properties.HCI_NAME.toUpperCase() +
                "<br><b>Street Name: </b>" + feature.properties.STREET_NAM.toUpperCase() +
                "<br><b>Postal Code: </b>" + feature.properties.POSTAL_CD
                );
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(chasclinicIcon)
        }
    }
    var chas162 = L.geoJSON(chas0.responseJSON, {
        onEachFeature: onEachChas
    })

    var chas16 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-prescription-bottle-alt mycluster',
                iconsize: L.point(40, 40)
            });
        }
    });

    chas16.addLayer(chas162);

    var options2 = {
        container_width: "300px",
        container_maxHeight: "450px",
        group_maxHeight: "200px",
        exclusive: false
    };

    var overlaymaps2 = [{
        groupName: "Subzone",
        expanded: true,
        layers: {
            'Subzones': subzone3,
        }
    }, {
        groupName: "Connectivity",
        expanded: true,
        layers: {
            "Bus stops": bustop16,
            "MRT": mrt16,
            "Cycling paths": cycling16,
        }
    }, {
        groupName: "Supporting Facilities",
        expanded: true,
        layers: {
            'Bicycle racks': bicycle16,
            "Sheltered areas": linkway16,
        }
    }, {
        groupName: "Land Use",
        expanded: true,
        layers: {
            'Residences': residences16,
            'Parks': nationalpark16,
            'Schools (pri, sec)': schools16,
            'Supermarkets': supermarkets16,
            'Hawker centres': hawker16,
            'Polyclinics': polyclinics16,
            'Hospitals': hopitals16,
            'CHAS clinics': chas16,
            'Preschools': preschools16,
            'Eldercare centres': eldercare16,
        }
    }, {
        groupName: "Safety",
        expanded: true,
        layers: {
            "Road crossings": roadcross16,
            "Speed regulating strips": speedstrips16,
            'Road humps': roadhump16,
            "School zones": schoolzone16,
            "Silver zones": silver16,
        }
    }, {
        groupName: "Parking Management",
        expanded: true,
        layers: {
            "Carparks": carpark16,
        }
    }];

    var basemap2 = [
        {
            groupName: "Base Maps",
            expanded: true,
            layers: {
                "Grayscale": grey2,
                "Default": mapb2
            }
        }
    ];
    var scale = L.control.scale({
        position: 'bottomright'
    });
    // Adding scale control to the map
    scale.addTo(map2);
    L.Control.styledLayerControl(basemap2, overlaymaps2, options2).addTo(map2);
    L.control.zoom({
        position: 'bottomleft'
    }).addTo(map2);

    map2.on('load', sortSelect(document.getElementById('secondList')));
});

function zoomTo2() {
    var e = document.getElementById("secondList");
    var latlng = e.options[e.selectedIndex].value;
    if (latlng == "103.8198,1.3521") {
        var latlng_arr = latlng.split(',')
        map2.setView(new L.LatLng(latlng_arr[1], latlng_arr[0]), 11);
    } else {
        var latlng_arr = latlng.split(',')
        map2.setView(new L.LatLng(latlng_arr[1], latlng_arr[0]), 15);

    };

    // $('select').val(null).trigger('change');
    // var subzone = e.options[e.selectedIndex].text;
}

function clearTable2() {

    var label = document.getElementById("subzone-selected2");
    label.innerHTML = "";

    var row1 = document.getElementById("metrictable22").rows[1].cells;
    row1[1].innerHTML = "-";

    var row2 = document.getElementById("metrictable22").rows[2].cells;
    row2[1].innerHTML = "-";

    var row3 = document.getElementById("metrictable22").rows[3].cells;
    row3[1].innerHTML = "-";

    var row4 = document.getElementById("metrictable22").rows[4].cells;
    row4[1].innerHTML = "-";

    var row5 = document.getElementById("metrictable22").rows[5].cells;
    row5[1].innerHTML = "-";

    var row6 = document.getElementById("metrictable22").rows[6].cells;
    row6[1].innerHTML = "-";
};


function reset2() {
    map2.setView([1.3521, 103.8198], 11);
    clearTable2();
    $('select').val(0).trigger('change');
}