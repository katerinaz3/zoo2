let shadow = document.getElementById('shadow');
let alert = document.getElementById('alert');

const windows = [];
    
[
    'giraffe-chameleon',
    'yellow-duck',
    'deerfish',
    'water-rabbit',
    'pink-rat',
    'red-gorilla',
    'green-hippo',

].forEach((e) => {
    windows.push(document.getElementById(e));
});;

function open_window(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function help() {
    shadow.style.visibility = 'visible';
    alert.style.visibility = 'visible';
    windows.forEach((e) => {
        e.style.visibility = 'hidden';
    })
}

function close_alert(e) {
    e.parentElement.style.visibility = 'hidden';
    shadow.style.visibility = 'hidden';
}