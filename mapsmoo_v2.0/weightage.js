function resetWeight(){
    sessionStorage.clear();
    location.reload();
}

function populateValue(){
    if(sessionStorage.getItem("availPublic") !== null){
        document.getElementById('s1-1').setAttribute("value", sessionStorage.getItem('availPublic'))
        document.getElementById('s1-2').setAttribute("value", sessionStorage.getItem('availAlt'))
        document.getElementById('s1-3').setAttribute("value", sessionStorage.getItem('roadInt'))
        document.getElementById('s2-1').setAttribute("value", sessionStorage.getItem('divesityLand'))
        document.getElementById('s2-2').setAttribute("value", sessionStorage.getItem('proximityFacil'))
        document.getElementById('s3-1').setAttribute("value", sessionStorage.getItem('endMile'))
        document.getElementById('s3-2').setAttribute("value", sessionStorage.getItem('shelter'))
        document.getElementById('s4-1').setAttribute("value", sessionStorage.getItem('carLots'))
        document.getElementById('s4-2').setAttribute("value", sessionStorage.getItem('carPricing'))
        document.getElementById('s5-1').setAttribute("value", sessionStorage.getItem('safety'))

        document.getElementById("connectivity-weight").innerHTML = "<b>" + sessionStorage.getItem('connectivity') + "%</b>";
        document.getElementById("facil-weight").innerHTML = "<b>" + sessionStorage.getItem('facilities') + "%</b>";
        document.getElementById("landuse-weight").innerHTML = "<b>" + sessionStorage.getItem('landUse') + "%</b>";
        document.getElementById("safety-weight").innerHTML = "<b>" + sessionStorage.getItem('safety') + "%</b>";
        document.getElementById("parking-weight").innerHTML = "<b>" + sessionStorage.getItem('parking') + "%</b>";
    }
}

// -----------------------------------------------------------

function validation(e) {
    // console.log(this.value);
    let reNumbers = /^[0-9]+$|^[0-9]+[\.]?[0-9]+$/;

    console.log(reNumbers.test(this.value));
    if (this.value.match(reNumbers)) {
        if (this.classList.contains("is-invalid")) {
            this.classList.remove("is-invalid");
        }
        this.classList.add("is-valid");
    }
    else {
        if (this.classList.contains("is-valid")) {
            this.classList.remove("is-valid");
        }
        this.classList.add("is-invalid");
    }
}

function weigh_connectivity() {
    var circle = document.getElementById("connectivity-weight")  
    if ( document.getElementById("s1-1").classList.contains("is-invalid") || document.getElementById("s1-2").classList.contains("is-invalid") || document.getElementById("s1-3").classList.contains("is-invalid") ) {
        circle.innerHTML = '-';
    } else {
        var total = parseFloat(document.getElementById("s1-1").value) + parseFloat(document.getElementById("s1-2").value) + parseFloat(document.getElementById("s1-3").value);
        circle.innerHTML = "<b>" + total + "%</b>";
    }            
}

function weigh_landuse() {
    var circle = document.getElementById("landuse-weight")
    if ( document.getElementById("s2-1").classList.contains("is-invalid") || document.getElementById("s2-2").classList.contains("is-invalid") ) {
        circle.innerHTML = '-';
    } else {
        var total = parseFloat(document.getElementById("s2-1").value) + parseFloat(document.getElementById("s2-2").value);
        circle.innerHTML = "<b>" + total + "%</b>";
    }            
}

function weigh_facil() {
    var circle = document.getElementById("facil-weight")
    if ( document.getElementById("s3-1").classList.contains("is-invalid") || document.getElementById("s3-2").classList.contains("is-invalid") ) {
        circle.innerHTML = '-';
    } else {
        var total = parseFloat(document.getElementById("s3-1").value) + parseFloat(document.getElementById("s3-2").value);
        circle.innerHTML = "<b>" + total + "%</b>";
    }            
}

function weigh_parking() {
    var circle = document.getElementById("parking-weight")
    if ( document.getElementById("s4-1").classList.contains("is-invalid") || document.getElementById("s4-2").classList.contains("is-invalid") ) {
        circle.innerHTML = '-';
    } else {
        var total = parseFloat(document.getElementById("s4-1").value) + parseFloat(document.getElementById("s4-2").value);
        circle.innerHTML = "<b>" + total + "%</b>";
    }            
}

function weigh_safety() {
    var circle = document.getElementById("safety-weight")
    if ( document.getElementById("s5-1").classList.contains("is-invalid") ) {
        circle.innerHTML = '-';
    } else {
        circle.innerHTML = "<b>" + parseFloat(document.getElementById("s5-1").value) + "%</b>";
    }            
}

function weigh_total() {
    // remove all alerts on keyup
    $(".alert").hide();
    $(".alert").removeClass("shown");
    // end

    var circle = document.getElementById("total-weight")
    var connectivity = document.getElementById("connectivity-weight").textContent;
    var landuse = document.getElementById("landuse-weight").textContent;
    var facil = document.getElementById("facil-weight").textContent;
    var parking = document.getElementById("parking-weight").textContent;
    var safety = document.getElementById("safety-weight").textContent;

    if ( connectivity == "-" || 
        landuse == "-" || 
        facil == "-" || 
        parking == "-" ||
        safety == "-") {
            circle.innerHTML = "-";
    } else {
        var total = parseFloat(connectivity) + parseFloat(landuse) + parseFloat(facil) + parseFloat(parking) + parseFloat(safety);
        circle.innerHTML = "<b>" + total + "%</b>";
    }

    if ( circle.textContent != "100%" ) {
        document.getElementById("apply-weightage").classList.add("disabled");
    }
    else {
        document.getElementById("apply-weightage").classList.remove("disabled");
    }
}

function check_apply() {
    $(".alert").hide();
    $(".alert").removeClass("shown");

    if (document.getElementById("apply-weightage").classList.contains("disabled")) {
        $('#error-alert').show();
        document.getElementById("error-alert").classList.add("shown");
    } else {
        $('#success-alert').show();
        document.getElementById("success-alert").classList.add("shown");

        // Setting session storage
        sessionStorage.setItem('availPublic', parseInt(document.getElementById('s1-1').value));
        sessionStorage.setItem('availAlt', parseInt(document.getElementById('s1-2').value));
        sessionStorage.setItem('roadInt', parseInt(document.getElementById('s1-3').value));
        sessionStorage.setItem('divesityLand', parseInt(document.getElementById('s2-1').value));
        sessionStorage.setItem('proximityFacil', parseInt(document.getElementById('s2-2').value));
        sessionStorage.setItem('endMile', parseInt(document.getElementById('s3-1').value));
        sessionStorage.setItem('shelter', parseInt(document.getElementById('s3-2').value));
        sessionStorage.setItem('carLots', parseInt(document.getElementById('s4-1').value));
        sessionStorage.setItem('carPricing', parseInt(document.getElementById('s4-2').value));
        sessionStorage.setItem('safety', parseInt(document.getElementById('s5-1').value));

        var connectivity = parseInt(document.getElementById('s1-1').value) + parseInt(document.getElementById('s1-2').value) + parseInt(document.getElementById('s1-3').value);
        var landUse = parseInt(document.getElementById('s2-1').value) + parseInt(document.getElementById('s2-2').value) 
        var facilities = parseInt(document.getElementById('s3-1').value) + parseInt(document.getElementById('s3-2').value) 
        var parking = parseInt(document.getElementById('s4-1').value) + parseInt(document.getElementById('s4-2').value) 

        sessionStorage.setItem('connectivity',connectivity);
        sessionStorage.setItem('landUse',landUse);
        sessionStorage.setItem('facilities',facilities);
        sessionStorage.setItem('parking',parking);
        // end
    }
}

// To hide alert upon clicking close button
$(function(){
    $("[data-hide]").on("click", function(){
        $(this).closest("." + $(this).attr("data-hide")).hide();
        $(this).closest("." + $(this).attr("data-hide")).removeClass("shown");
        /*
         * $("." + $(this).attr("data-hide")).hide();
         * The snippet above will hide all elements with the class specified in data-hide,
         * i.e: data-hide="alert" will hide all elements with the alert property.
         *
         * Alternatively,
         * $(this).closest("." + $(this).attr("data-hide")).hide();
         * Use this if are using multiple alerts with the same class since it will only find the closest element
         * 
         * (From jquery doc: For each element in the set, get the first element that matches the selector by
         * testing the element itself and traversing up through its ancestors in the DOM tree.)
        */
    });
});

document.getElementById("s1-1").addEventListener("keyup", validation);
document.getElementById("s1-2").addEventListener("keyup", validation);
document.getElementById("s1-3").addEventListener("keyup", validation);
document.getElementById("s2-1").addEventListener("keyup", validation);
document.getElementById("s2-2").addEventListener("keyup", validation);
document.getElementById("s3-1").addEventListener("keyup", validation);
document.getElementById("s3-2").addEventListener("keyup", validation);
document.getElementById("s4-1").addEventListener("keyup", validation);
document.getElementById("s4-2").addEventListener("keyup", validation);
document.getElementById("s5-1").addEventListener("keyup", validation);

document.getElementById("s1-1").addEventListener("keyup", weigh_connectivity);
document.getElementById("s1-2").addEventListener("keyup", weigh_connectivity);
document.getElementById("s1-3").addEventListener("keyup", weigh_connectivity);

document.getElementById("s2-1").addEventListener("keyup", weigh_landuse);
document.getElementById("s2-2").addEventListener("keyup", weigh_landuse);

document.getElementById("s3-1").addEventListener("keyup", weigh_facil);
document.getElementById("s3-2").addEventListener("keyup", weigh_facil);

document.getElementById("s4-1").addEventListener("keyup", weigh_parking);
document.getElementById("s4-2").addEventListener("keyup", weigh_parking);

document.getElementById("s5-1").addEventListener("keyup", weigh_safety);

$('#cards input[type=text]').on('keyup', weigh_total);