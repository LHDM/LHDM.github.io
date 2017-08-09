function toMetersSquared(input) {
    let linFeet = input.value;

    let mSquared = document.getElementById("mSquared");
    mSquared.value = linFeet;
};

function toLinearFeet(input) {
    let m = input.value;

    let linFeet = document.getElementById("linFeet");
    linFeet.value = m;
};