"use strict";
// const currpts = () =>
// const input = () =>
// const respts = () =>

// let currentpts = 0



// respts.innerHTML = currentpts

function calc() {
    let history = document.getElementById('history')
    let lastpts = document.getElementById("lastpt");
    let currentpts = Number(document.getElementById('input').value);
    console.log(currentpts);
    let respts = document.getElementById('respt');
    // alert (typeof(Number(lastpts.innerHTML)))
    let numlastpts = Number(lastpts.innerHTML)
    // if (!isNaN(currentpts)){
    let oldparty = document.getElementById('party');
    console.log('cum: ', party.checked)
    if (currentpts !== 0 && !isNaN(currentpts) && currentpts >= 10 && (currentpts ^ 0) === currentpts){
    oldparty.checked ? oldparty = 20 : oldparty = 30;
        if (numlastpts > currentpts) {
        
            respts.style.color = '#FF0000';
            // isNaN(currentpts) ? respts.innerHTML = "введите свои эмэмэры" :
            respts.innerHTML =  `-${numlastpts - currentpts}`;
            if (respts.innerHTML != 0) {
            history.insertAdjacentHTML('afterbegin', `<p><font color='#FF0000'>before:${lastpts.innerHTML} 
            after:${currentpts} difference ${respts.innerHTML} old: -${oldparty}</font></p>`)
            }
        }
        else {
            respts.style.color = '#00FF00';
            // isNaN(currentpts) ? respts.innerHTML = "введите свои эмэмэры" :
            respts.innerHTML = `+${currentpts - numlastpts}`;
            if (respts.innerHTML != 0) {
            history.insertAdjacentHTML('afterbegin', `<p><font color='#00FF00'>before:${lastpts.innerHTML} 
            after:${currentpts} difference ${respts.innerHTML} old: +${oldparty}</font></p>`)
            }
        }

        
        // history.insertAdjacentHTML('afterbegin', `<p>before:${lastpts.innerHTML} after:${currentpts} </p>`)
        lastpts.innerHTML = currentpts

    }
    else{
        respts.style.color = '#999999';
        respts.innerHTML = "введите свои эмэмэры"}

    document.getElementById('input').value = ''
    document.cookie = "element=" + document.getElementById("history").innerHTML;
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
    }
    if (cookie.indexOf("element=") == 0) {
        let element = cookie.substring("element=".length, cookie.length);
        console.log(element);
    }
}


}



