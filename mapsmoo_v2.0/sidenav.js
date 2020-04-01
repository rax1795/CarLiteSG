function openNav(event) {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("for-wrap").setAttribute("class", "fadeMe");
}

function closeNav() {
  var stop = false;
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
  // document.body.style.backgroundColor = "white";
  document.getElementById("for-wrap").classList.remove("fadeMe");
}