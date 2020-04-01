function popupOpen() {

    if (sessionStorage.getItem("availPublic") !== null) {
        document.getElementById("availPublic").innerHTML = sessionStorage.getItem('availPublic');
        document.getElementById("availAlt").innerHTML = sessionStorage.getItem('availAlt');
        document.getElementById("roadInt").innerHTML = sessionStorage.getItem('roadInt');

        document.getElementById("divesityLand").innerHTML = sessionStorage.getItem('divesityLand');
        document.getElementById("proximityFacil").innerHTML = sessionStorage.getItem('proximityFacil');

        document.getElementById("endMile").innerHTML = sessionStorage.getItem('endMile');
        document.getElementById("shelter").innerHTML = sessionStorage.getItem('shelter');

        document.getElementById("carLots").innerHTML = sessionStorage.getItem('carLots');
        document.getElementById("carPricing").innerHTML = sessionStorage.getItem('carPricing');

        document.getElementById("safetys").innerHTML = sessionStorage.getItem('safety');
    }

    $(".popup-container").css('display','block');
    document.getElementById("for-wrap").setAttribute("class", "fadeMe");
}

function popupClose() {
    $('.popup-container').css('display','none');
    document.getElementById("for-wrap").classList.remove("fadeMe");
}