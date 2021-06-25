document.addEventListener('DOMContentLoaded', () => {
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    let leftarrow = document.getElementById('leftarrow');
    let rightarrow = document.getElementById('rightarrow');

    let pictures = document.getElementsByClassName('img')
    const pic_count = pictures.length
    let iter = pic_count - 1;
    
    let line;
    let first, last;

    if (map) {
        line = document.getElementById('line');
        line.style.visibility = 'hidden';
        first = pictures[pic_count-1];
        last = pictures[0];
    }

    left.addEventListener('mouseover', () => {
        leftarrow.style.opacity = '100%';
    });
    left.addEventListener('mouseout', () => {
        leftarrow.style.opacity = '25%';
    });

    left.addEventListener('click', () => {
        pictures[iter % pic_count].style.visibility = 'hidden';
        pictures[++iter % pic_count].style.visibility = 'visible';
        if (map) {
            if (first.style.visibility == 'visible' || last.style.visibility == 'visible') {
                line.style.visibility = 'hidden';
            } else {
                line.style.visibility = 'visible';
            }
        }
    });


    right.addEventListener('mouseover', () => {
        rightarrow.style.opacity = '100%';
    });
    right.addEventListener('mouseout', () => {
        rightarrow.style.opacity = '25%';
    });

    right.addEventListener('click', () => {
        pictures[iter % pic_count].style.visibility = 'hidden';
        iter = --iter < 0 ? pic_count - 1 : iter;
        pictures[iter % pic_count].style.visibility = 'visible';
        if (map) {
            if (first.style.visibility == 'visible' || last.style.visibility == 'visible') {
                line.style.visibility = 'hidden';
            } else {
                line.style.visibility = 'visible';
            }
        }
    });

});