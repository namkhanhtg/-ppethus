function menuToggle()
{
    var x = document.getElementById("navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const map = document.getElementById("mapPic");

const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");


let zoom = 1;

let positionX = 0;
let positionY = 0;

let isDragging = false;

let startX = 0;
let startY = 0;


const minZoom = 1;
const maxZoom = 4;




function updateMap() {

    map.style.transform =
        "translate(" + positionX + "px, " + positionY + "px) " +
        "scale(" + zoom + ")";
}




zoomInButton.addEventListener("click", function() {

    zoom += 0.25;

    if (zoom > maxZoom) {
        zoom = maxZoom;
    }

    updateMap();
});




zoomOutButton.addEventListener("click", function() {

    zoom -= 0.25;

    if (zoom < minZoom) {
        zoom = minZoom;
    }



    if (zoom === 1) {
        positionX = 0;
        positionY = 0;
    }

    updateMap();
});




map.addEventListener("pointerdown", function(event) {

    isDragging = true;

    startX = event.clientX - positionX;
    startY = event.clientY - positionY;

    map.setPointerCapture(event.pointerId);
});




map.addEventListener("pointermove", function(event) {

    if (!isDragging) {
        return;
    }

    positionX = event.clientX - startX;
    positionY = event.clientY - startY;

    updateMap();
});




map.addEventListener("pointerup", function() {

    isDragging = false;
});




map.addEventListener("pointercancel", function() {

    isDragging = false;
});

const floor1 = document.getElementById("floor1");
const floor2 = document.getElementById("floor2");