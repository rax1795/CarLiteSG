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

var subzone = $.ajax({
    url: "http://127.0.0.1:5000/data/subzone_metrics.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded1."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
// var centroids = $.ajax({
//     url: "http://127.0.0.1:5000/data/subzone_metrics_centroid.geojson",
//     dataType: "json",
//     success: console.log(" data successfully loaded1."),
//     error: function (xhr) {
//         console.log(xhr.statusText)
//     }
// });
var bicycle = $.ajax({
    url: "http://127.0.0.1:5000/data/bicyclerack.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded2."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var bustop = $.ajax({
    url: "http://127.0.0.1:5000/data/busstop.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded3."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var linkway = $.ajax({
    url: "http://127.0.0.1:5000/data/covered_linkway.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded4."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var cycling = $.ajax({
    url: "http://127.0.0.1:5000/data/cyclingpath.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded5."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var carpark = $.ajax({
    url: "http://127.0.0.1:5000/data/hdb_carpark.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded6."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var mrt = $.ajax({
    url: "http://127.0.0.1:5000/data/mrt_lrt_station.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded7."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var park = $.ajax({
    url: "http://127.0.0.1:5000/data/park_connector_loop.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded8."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var roadcross = $.ajax({
    url: "http://127.0.0.1:5000/data/road_crossing.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded9."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var schoolzone = $.ajax({
    url: "http://127.0.0.1:5000/data/schoolzone.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded10."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var silver = $.ajax({
    url: "http://127.0.0.1:5000/data/silverzone.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var roadhumps = $.ajax({
    url: "http://127.0.0.1:5000/data/road_hump.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var schools = $.ajax({
    url: "http://127.0.0.1:5000/data/schools_pri_sec.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var supermarkets = $.ajax({
    url: "http://127.0.0.1:5000/data/supermarkets.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var residences = $.ajax({
    url: "http://127.0.0.1:5000/data/residences_centroid.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var preschools = $.ajax({
    url: "http://127.0.0.1:5000/data/preschools.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var polyclinics = $.ajax({
    url: "http://127.0.0.1:5000/data/polyclinics.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var nationalpark = $.ajax({
    url: "http://127.0.0.1:5000/data/nationalparks.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var hopitals = $.ajax({
    url: "http://127.0.0.1:5000/data/hospitals.shp.geojson",
    dataType: "json",
    success: console.log(" data successfully loaded11."),
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var eldercare = $.ajax({
    url: "http://127.0.0.1:5000/data/eldercare_centre.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var hawker = $.ajax({
    url: "http://127.0.0.1:5000/data/hawker.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var chas = $.ajax({
    url: "http://127.0.0.1:5000/data/CHAS_clinics.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});

var speedstrips = $.ajax({
    url: "http://127.0.0.1:5000/data/speed_regulating_strip.shp.geojson",
    dataType: "json",
    error: function (xhr) {
        console.log(xhr.statusText)
    }
});
var grey = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    subdomains: 'abcd',
});
var mapb = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoieGlhb3Jvbmd3IiwiYSI6ImNrNXR1aHRhZDBuZDAzbXA0YzI0a2RiN2IifQ.ox_6BG-45OzGVzzMXVY1IA'
});

var map = new L.map('map', {
    layers: [grey, mapb],
    zoomControl: false
}).setView([1.3521, 103.8198], 11);
$.when(subzone, speedstrips, roadhumps, chas, linkway, hawker, hopitals, park, silver, roadcross, roadhumps, supermarkets, schools, residences, preschools, polyclinics, nationalpark).done(function () {
    var linkway4 = L.geoJSON()
    var roadcross9 = L.geoJSON(),
        schoolzone10 = L.geoJSON(),
        silver11 = L.geoJSON(),
        roadhump1 = L.geoJSON(),
        speedstrips1 = L.geoJSON()

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }
    
    function selectDropdown(z) {
        var layer = z.target;
        var xCoord = layer.feature.properties.X_COORD;
        var yCoord = layer.feature.properties.Y_COORD;
        var array = [xCoord, yCoord];

        // $('select').select2().select2('val', array)
        $('.map1').val([array]).trigger('change');
    }

    function getColor(d) {
        console.log(d)
        return d >= 80 ? '#1a9641' :
            d >= 60 ? '#a6d96a' :
                d >= 40 ? '#ffffbf' :
                    d >= 20 ? '#fdae61' :
                        '#d7191c';
    }

    function style(feature) {
        if(sessionStorage.getItem("availPublic") === null){
            var final_score = feature.properties.FIN_SCORE;
        }else{
            var availPublic = parseInt(sessionStorage.getItem('availPublic')),
                availAlt = parseInt(sessionStorage.getItem('availAlt')),
                roadInt = parseInt(sessionStorage.getItem('roadInt')),
                connectivity = (feature.properties.NLEN_PSQM * availAlt) + (feature.properties.PERC_HOMEC * availPublic) + (feature.properties.XTION_PSQM * roadInt),

                divesityLand = parseInt(sessionStorage.getItem('divesityLand')),
                proximityFacil = parseInt(sessionStorage.getItem('proximityFacil')),
                landUse = parseInt((feature.properties.PERC_USE * divesityLand) + (feature.properties.PERC_FACIL * proximityFacil)),

                endMile = parseInt(sessionStorage.getItem('endMile')),
                shelter = parseInt(sessionStorage.getItem('shelter')),
                facilities = (feature.properties['BIKERACKS?'] * endMile) + (feature.properties.NPERC_SHEL * shelter),

                carLots = parseInt(sessionStorage.getItem('carLots')),
                carPricing = parseInt(sessionStorage.getItem('carPricing')),
                parking = ((1 - feature.properties.NLOTS_PHH) * carLots) + ((1 - feature.properties.CP_SCORE) * carPricing),
                
                safetys = parseInt(sessionStorage.getItem('safety'))
                if(feature.properties["SCHOOL?"]==1 && feature.properties["ELDERZONE?"]==1){
                    var safety = ((feature.properties.NRDSTY_PM + feature.properties["ELD_FRNLY?"] + feature.properties["SCH_FRNLY?"])/3)*safetys
                } else if (feature.properties["SCHOOL?"]==1 && feature.properties["ELDERZONE?"]==0){
                    var safety = ((feature.properties.NRDSTY_PM +  feature.properties["SCH_FRNLY?"])/2)*safetys
                } else if (feature.properties["SCHOOL?"]==0 && feature.properties["ELDERZONE?"]==1){
                    var safety = ((feature.properties.NRDSTY_PM +  feature.properties["ELD_FRNLY?"])/2)*safetys
                } else{
                    var safety = feature.properties.NRDSTY_PM*safetys
                }

            var final_score = Math.round((connectivity+landUse+facilities+parking+safety));
        }

        return {
            fillColor: getColor(final_score),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    // function style(feature) {
    //     var availPublic = localStorage.getItem('availPublic'),
    //     availAlt =localStorage.getItem('availAlt'),
    //     roadInt =localStorage.getItem('roadInt'),
    //     connectivity = (feature.properties.NLEN_PSQM*availAlt) + (feature.properties.PERC_HOMEC*availPublic) +(feature.properties.XTION_PSQM*roadInt),
    //     divesityLand =localStorage.getItem('divesityLand'),
    //     proximityFacil =localStorage.setItem('proximityFacil'),
    //     landUse = (feature.properties.PERC_USE*divesityLand)+(feature.properties.PERC_FACIL*proximityFacil),
    //     endMile =localStorage.getItem('endMile'),
    //     shelter =localStorage.getItem('shelter'),
    //     facilities = (feature.properties['BIKERACKS?'] * endMile) +  (  feature.properties.NPERC_SHEL  * shelter)
    //     carLots =localStorage.getItem('carLots'),
    //     carPricing =localStorage.getItem('carPricing'),
    //     parking = (  (1 - feature.properties.NLOTS_PHH)  * carLots) +  (  (1 - feature.properties.CP_SCORE)  * carPricing),
    //     safetys =localStorage.getItem('safety'),
    //     safety = jj;
    //     return {
    //         fillColor: getColor(connectivity+landUse+facilities+safety),
    //         weight: 2,
    //         opacity: 1,
    //         color: 'white',
    //         dashArray: '3',
    //         fillOpacity: 0.7
    //     };
    // }

    function populateTable(x) {
        var layer = x.target;

        var label = document.getElementById("subzone-selected");
        label.innerHTML = layer.feature.properties.SUBZONE_N;

        if(sessionStorage.getItem("availPublic") === null){
            var row1 = document.getElementById("metrictable").rows[1].cells;
            row1[1].innerHTML = layer.feature.properties.CONNECT + " / 40";

            var row2 = document.getElementById("metrictable").rows[2].cells;
            row2[1].innerHTML = layer.feature.properties.LANDUSE + " / 25";

            var row3 = document.getElementById("metrictable").rows[3].cells;
            row3[1].innerHTML = layer.feature.properties.FACILITIES + " / 15";

            var row4 = document.getElementById("metrictable").rows[4].cells;
            row4[1].innerHTML = parseFloat(layer.feature.properties.PARKING) + " / 10";

            var row5 = document.getElementById("metrictable").rows[5].cells;
            row5[1].innerHTML = layer.feature.properties.SAFETY + " / 10";

            var row6 = document.getElementById("metrictable").rows[6].cells;
            var final_score = layer.feature.properties.FIN_SCORE;
            sessionStorage.setItem('score', final_score)
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

            var row1 = document.getElementById("metrictable").rows[1].cells;
            row1[1].innerHTML = Math.round(connectivity) + " / "+ sessionStorage.getItem('connectivity');

            var row2 = document.getElementById("metrictable").rows[2].cells;
            row2[1].innerHTML = Math.round(landUse) + " / " +  sessionStorage.getItem('landUse');

            var row3 = document.getElementById("metrictable").rows[3].cells;
            row3[1].innerHTML = Math.round(facilities) + " / " + sessionStorage.getItem('facilities');

            var row4 = document.getElementById("metrictable").rows[4].cells;
            row4[1].innerHTML = Math.round(parking) + " / " + sessionStorage.getItem('parking');

            var row5 = document.getElementById("metrictable").rows[5].cells;
            row5[1].innerHTML = Math.round(safety) + " / " + sessionStorage.getItem('safety');

            var row6 = document.getElementById("metrictable").rows[6].cells;
            var final_score = Math.round((connectivity+landUse+facilities+parking+safety));
            sessionStorage.setItem('score', final_score);
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

    function highlightFeature(e) {
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

    function resetHighlight(e) {
        subzone2.resetStyle(e.target);
        // info.update();
    }

    var legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 20, 40, 60, 80],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '-100');
        }

        return div;
    };

    legend.addTo(map);
    function onEachSubzone(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            map.getZoom() >= 15
                ? layer.bindTooltip(feature.properties.SUBZONE_N, { permanent: true, direction: "center" })
                : layer.bindTooltip(feature.properties.SUBZONE_N, { permanent: false, direction: "center" })
        }
        layer.on({
            click: zoomToFeature,
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
        layer.on({
            click: populateTable,
        });

        if (feature.properties) {
            var x = document.getElementById("firstList");
            var option = document.createElement("option");
            option.text = feature.properties.SUBZONE_N;
            option.value = ([feature.properties.X_COORD, feature.properties.Y_COORD])
            x.add(option);
        };

        layer.on({
            click: selectDropdown
        });
    }

    var subzone2 = L.geoJSON(subzone.responseJSON, {
        onEachFeature: onEachSubzone,
        style: style
    })

    subzone2.addTo(map);

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
        iconUrl: 'static/icons/bikerack.png',
        iconSize: [45, 45],
        popupAnchor: [-5, -14],
    });

    function onEachBicycle(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup("<b>Number of Bicycle Racks: </b>" + feature.properties.RACK_CNT);
        }
        if (layer instanceof L.Marker) {
            layer.setIcon(bikerackIcon)
        }
    }
    
    var bicycle2 = L.geoJSON(bicycle.responseJSON, {
        onEachFeature: onEachBicycle
    })

    var bicycle1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-bicycle mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    bicycle1.addLayer(bicycle2);
    var busIcon = L.icon({
        iconUrl: 'static/icons/bus.png',
        iconSize: [45, 45],
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
    var bustop3 = L.geoJSON(bustop.responseJSON, {
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

    var bustop2 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-bus mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    bustop2.addLayer(bustop3);

    function onEachLinkway(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup('SHELTERED WALKWAY');
        }
    }
    var linkway4 = L.geoJSON(linkway.responseJSON, {
        onEachFeature: onEachLinkway,
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
    var cycling5 = L.geoJSON(cycling.responseJSON, {
        onEachFeature: onEachCycling,
        style: function (feature) {
            return {color: '#087353',
                    weight: 3};
        }
    })

    var carparkIcon = L.icon({
        iconUrl: 'static/icons/carpark.png',
        iconSize: [45, 45],
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

    var carpark6 = L.geoJSON(carpark.responseJSON, {
        onEachFeature: onEachCarpark
    })

    var carpark5 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-car mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    carpark5.addLayer(carpark6);

    var MRTicon = L.icon({
        iconUrl: 'static/icons/train.png',
        iconSize: [45, 45],
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

    var mrt7 = L.geoJSON(mrt.responseJSON, {
        onEachFeature: onEachMRT,
    })

    var mrt6 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-train mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    mrt6.addLayer(mrt7);

    function onEachroad(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            layer.bindPopup('ROAD CROSSING');
        }
    }
    var roadcross9 = L.geoJSON(roadcross.responseJSON, {
        onEachFeature: onEachroad,
        style: function (feature) {
            return {color: 'rgb(2,42,122)',
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

    var schoolzone10 = L.geoJSON(schoolzone.responseJSON, {
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

    var silver11 = L.geoJSON(silver.responseJSON, {
        onEachFeature: onEachSilverzone,
        style: function (feature) {
            return {color: 'rgb(93, 111, 243)',
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

    var roadhump1 = L.geoJSON(roadhumps.responseJSON, {
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

    var speedstrips1 = L.geoJSON(speedstrips.responseJSON, {
        onEachFeature: onEachSpeedstrip,
        style: function (feature) {
            return {color: '#ee6b3b',
                    weight: 3};
        }
    })


    var schoolIcon = L.icon({
        iconUrl: 'static/icons/school.png',
        iconSize: [45, 45],
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
    var schools2 = L.geoJSON(schools.responseJSON, {
        onEachFeature: onEachSchool
    })

    var schools1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-graduation-cap mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    schools1.addLayer(schools2);


    var supermarketIcon = L.icon({
        iconUrl: 'static/icons/supermarket.png',
        iconSize: [45, 45],
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
    var supermarkets2 = L.geoJSON(supermarkets.responseJSON, {
        onEachFeature: onEachSupermarket
    })

    var supermarkets1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-shopping-cart mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    supermarkets1.addLayer(supermarkets2);


    var residenceIcon = L.icon({
        iconUrl: 'static/icons/residence.png',
        iconSize: [35, 35],
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

    var residences2 = L.geoJSON(residences.responseJSON, {
        // onEachFeature: onEachResidence
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: residenceIcon}).bindPopup("RESIDENCE");
        }
    })

    var residences1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        // disableClusteringAtZoom: 17,
        // spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-home mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    residences1.addLayer(residences2);


    var preschIcon = L.icon({
        iconUrl: 'static/icons/preschool.png',
        iconSize: [45, 45],
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

    var preschools2 = L.geoJSON(preschools.responseJSON, {
        onEachFeature: onEachPreschool
    })

    var preschools1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-child mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    preschools1.addLayer(preschools2);


    var polyclinicIcon = L.icon({
        iconUrl: 'static/icons/polyclinic.png',
        iconSize: [45, 45],
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
    var polyclinics2 = L.geoJSON(polyclinics.responseJSON, {
        onEachFeature: onEachPolyclinic
    })

    var polyclinics1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-clinic-medical mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    polyclinics1.addLayer(polyclinics2);


    var parkIcon = L.icon({
        iconUrl: 'static/icons/park.png',
        iconSize: [45, 45],
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

    var nationalpark2 = L.geoJSON(nationalpark.responseJSON, {
        onEachFeature: onEachNationalpark
    })

    var nationalpark1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-tree mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    nationalpark1.addLayer(nationalpark2);


    var hospitalIcon = L.icon({
        iconUrl: 'static/icons/hospital.png',
        iconSize: [45, 45],
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
    var hopitals2 = L.geoJSON(hopitals.responseJSON, {
        onEachFeature: onEachHospital
    })

    var hopitals1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-hospital mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    hopitals1.addLayer(hopitals2);


    var eldercareIcon = L.icon({
        iconUrl: 'static/icons/eldercare.png',
        iconSize: [45, 45],
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

    var eldercare2 = L.geoJSON(eldercare.responseJSON, {
        onEachFeature: onEachEldercare
    })

    var eldercare1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-blind mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    eldercare1.addLayer(eldercare2);


    var hawkerIcon = L.icon({
        iconUrl: 'static/icons/hawkercentre.png',
        iconSize: [45, 45],
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

    var hawker2 = L.geoJSON(hawker.responseJSON, {
        onEachFeature: onEachHawker
    })

    var hawker1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-utensils mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    hawker1.addLayer(hawker2);


    var chasclinicIcon = L.icon({
        iconUrl: 'static/icons/chasclinics.png',
        iconSize: [45, 45],
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
    var chas2 = L.geoJSON(chas.responseJSON, {
        onEachFeature: onEachChas
    })

    var chas1 = L.markerClusterGroup({
        showCoverageOnHover: false,
        disableClusteringAtZoom: 16,
        spiderfyOnMaxZoom: false,
        maxClusterRadius: 120,
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: '<b> ' + cluster.getChildCount() + ' </b>',
                className: 'fas fa-prescription-bottle-alt mycluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    chas1.addLayer(chas2);

    var options = {
        container_width: "300px",
        container_maxHeight: "450px",
        group_maxHeight: "200px",
        exclusive: false
    };

    var overlaymaps = [{
        groupName: "Subzone",
        expanded: true,
        layers: {
            'Subzones': subzone2,
        }
    }, {
        groupName: "Connectivity",
        expanded: true,
        layers: {
            "Bus Stops": bustop2,
            "MRT Stations": mrt6,
            "Cycling Paths": cycling5,
        }
    }, {
        groupName: "Supporting Facilities",
        expanded: true,
        layers: {
            'Bicycle Racks': bicycle1,
            "Sheltered Areas": linkway4,
        }
    }, {
        groupName: "Land Use",
        expanded: true,
        layers: {
            'Residences': residences1,
            'Parks': nationalpark1,
            'Schools (Pri, Sec)': schools1,
            'Supermarkets': supermarkets1,
            'Hawker Centres': hawker1,
            'Polyclinics': polyclinics1,
            'Hospitals': hopitals1,
            'CHAS Clinics': chas1,
            'Preschools': preschools1,
            'Eldercare Centres': eldercare1,
        }
    }, {
        groupName: "Safety",
        expanded: true,
        layers: {
            "Road Crossings": roadcross9,
            "Speed Regulating Strips": speedstrips1,
            'Road Humps': roadhump1,
            "School Zones": schoolzone10,
            "Silver Zones": silver11,
        }
    }, {
        groupName: "Parking Management",
        expanded: true,
        layers: {
            "Carparks": carpark5,
        }
    }];

    var basemap = [
        {
            groupName: "Base Maps",
            expanded: true,
            layers: {
                "Grayscale": grey,
                "Default": mapb
            }
        }
    ];
    var scale = L.control.scale({
        position: 'bottomright'
    });
    // Adding scale control to the map
    scale.addTo(map);
    L.Control.styledLayerControl(basemap, overlaymaps, options).addTo(map);
    L.control.zoom({
        position: 'bottomleft'
    }).addTo(map);

    map.on('load', sortSelect(document.getElementById('firstList')));
    
    if (document.getElementById("right-compare")) {
        console.log('wait for right compare');
    }
    else {
        map.on('load', $(".loader-wrapper").fadeOut(100))
    }
   
    // $(window).on("load",function(){
    //     $(".loader-wrapper").delay(1000).fadeOut(100)
    //         console.log('end')
    // });
});

function zoomTo() {
    var e = document.getElementById("firstList");
    var latlng = e.options[e.selectedIndex].value;
    if (latlng == "103.8198,1.3521") {
        var latlng_arr = latlng.split(',')
        map.setView(new L.LatLng(latlng_arr[1], latlng_arr[0]), 11);
    } else {
        var latlng_arr = latlng.split(',')
        map.setView(new L.LatLng(latlng_arr[1], latlng_arr[0]), 15);

    };

    // $('select').val(null).trigger('change');
    // var subzone = e.options[e.selectedIndex].text;
}

function clearTable() {

    var label = document.getElementById("subzone-selected");
    label.innerHTML = "";

    var row1 = document.getElementById("metrictable").rows[1].cells;
    row1[1].innerHTML = "-";

    var row2 = document.getElementById("metrictable").rows[2].cells;
    row2[1].innerHTML = "-";

    var row3 = document.getElementById("metrictable").rows[3].cells;
    row3[1].innerHTML = "-";

    var row4 = document.getElementById("metrictable").rows[4].cells;
    row4[1].innerHTML = "-";

    var row5 = document.getElementById("metrictable").rows[5].cells;
    row5[1].innerHTML = "-";

    var row6 = document.getElementById("metrictable").rows[6].cells;
    row6[1].innerHTML = "-";
};


function reset() {
    map.setView([1.3521, 103.8198], 11);
    clearTable();
    $('select').val(0).trigger('change');
}

