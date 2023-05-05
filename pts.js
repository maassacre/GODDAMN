"use strict";
// const currpts = () =>
// const input = () =>
// const respts = () =>

// let currentpts = 0



// respts.innerHTML = currentpts

function calc() {
    let lastpts = document.getElementById("lastpt");
    let currentpts = Number(document.getElementById('input').value);
    console.log(currentpts);
    let respts = document.getElementById('respt');
    // alert (typeof(Number(lastpts.innerHTML)))
    let numlastpts = Number(lastpts.innerHTML)
    let numrespts = Number(currentpts.innerHTML)

    if (numlastpts > currentpts) {
        respts.style.color = '#FF0000'
        respts.innerHTML = `- ${numlastpts - currentpts}`
    }
    else {
        respts.style.color = '#00FF00'
        respts.innerHTML = `+ ${currentpts - numlastpts}`
    }
    lastpts.innerHTML = currentpts
    // respts.innerHTML = currentpts;
}
