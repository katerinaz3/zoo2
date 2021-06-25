let shadow = document.getElementById('shadow');

let last_highlighted = null;

function buy(id) {
    id = id > 3 ? id - 1 : id;
    shadow.style.visibility = 'visible';
    document.getElementById(`buy${id}`).style.visibility = 'visible';
}

function close_modal(e) {
    last_highlighted.style.visibility = 'hidden';
    e.parentElement.style.visibility = 'hidden';
    shadow.style.visibility = 'hidden';
}

function hover(e, yes, direction) {
    if (yes) {
        last_highlighted = e.parentElement.getElementsByClassName('rectangle-92')[0];
        last_highlighted.style.visibility = direction ? 'visible' : 'hidden';
    } else {
        last_highlighted = e.parentElement.getElementsByClassName('rectangle-93')[0];
        last_highlighted.style.visibility = direction ? 'visible' : 'hidden';
    }
}