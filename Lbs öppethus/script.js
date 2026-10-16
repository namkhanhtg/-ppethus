const floor1 = document.getElementById("floor1");
const floor2 = document.getElementById("floor2");



if (floor1 && floor2) {
    floor1.style.display = "block";
    floor2.style.display = "none";
}




function switchFloor1() {
    floor1.style.display = "block";
    floor2.style.display = "none";
}

function switchFloor2() {
    floor1.style.display = "none";
    floor2.style.display = "block";
}





