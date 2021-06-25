document.addEventListener('DOMContentLoaded', ()=> {
    let buy_modal = document.getElementById('buy-modal');
    let buy_ticket = document.getElementById('buy-ticket');
    let shadow = document.getElementById('shadow');
    let yes_inactive = document.getElementById('yes-inactive');
    let no_inactive = document.getElementById('no-inactive');
    let yes_text = document.getElementById('yes-text');
    let no_text = document.getElementById('no-text');

    function close_buy_modal() {
        no_inactive.classList.remove('rectangle-95-XBxoxj-hover');
        yes_inactive.classList.remove('rectangle-94-XBxoxj-hover');
        no_text.classList.remove('clickable');
        buy_modal.style.visibility = 'hidden';
        shadow.style.visibility = 'hidden';
    }


    // показать тень
    buy_ticket.addEventListener('click', (e) => {
        buy_modal.style.visibility = 'visible';
        shadow.style.visibility = 'visible';
    })


    // Обработка hover кнопки "да"
    yes_text.addEventListener('mouseover', (e) => {
        yes_inactive.classList.add('rectangle-94-XBxoxj-hover');
        yes_text.classList.add('clickable');
    });
    yes_text.addEventListener('mouseleave', () => {
        yes_inactive.classList.remove('rectangle-94-XBxoxj-hover');
        yes_text.classList.remove('clickable');
    });


    // Обработка hover кнопки "нет"
    no_text.addEventListener('mouseover', (e) => {
        no_inactive.classList.add('rectangle-95-XBxoxj-hover');
        no_text.classList.add('clickable');
    });
    no_text.addEventListener('mouseleave', () => {
        no_inactive.classList.remove('rectangle-95-XBxoxj-hover');
        no_text.classList.remove('clickable');
    });


    // Нажали на кнопку "нет"
    no_text.addEventListener('click', () => {
        close_buy_modal();
    })


    // Нажали на кнопку "да"
    yes_text.addEventListener('click', () => {
        close_buy_modal();
    })

});