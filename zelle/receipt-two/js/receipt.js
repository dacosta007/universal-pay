document.addEventListener('DOMContentLoaded', () => {
    const zelleNameEls = document.querySelectorAll('.js-zelle-receiver');
    const zelleAmount = document.querySelector('.js-zelle-amount');
    const zelleEmail = document.querySelector('.js-zelle-email');
    const zelleBank = document.querySelector('.zelle-bank');
    const iconedEl = document.querySelector('.iconed'); 
    const refEl = document.querySelector('.js-ref');
    const date = document.querySelector('.js-date');  

    const receiverName = localStorage.getItem('zelleReceiver') || '';
    const receiverAmount = Number(localStorage.getItem('zelleAmount') || 0);
    const bankValue = localStorage.getItem('zellleBank');
    const receiverEmail = localStorage.getItem('zelleEmail');

    zelleEmail.innerHTML = receiverEmail;

    zelleNameEls.forEach(el => {
        el.innerHTML = receiverName;
    });

    zelleAmount.innerHTML = `$${receiverAmount.toLocaleString()}.00`;

    zelleBank.innerHTML = bankValue || 'Adv Plus Banking - 9934';

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    console.log('Formatted Date:', formattedDate);

    if (date) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const customFormattedDate = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
        date.innerHTML = customFormattedDate;
    }

    const randomID = Math.random().toString(36).substring(2, 10);
    if (refEl) {
        refEl.innerHTML = randomID;
    }

    let initials = '';
    if (receiverName.trim()) {
        const nameParts = receiverName.trim().split(/\s+/);
        if (nameParts.length >= 2) {
            initials = nameParts[0][0] + nameParts[nameParts.length - 1][0];
        } else {
            initials = nameParts[0][0];
        }
        initials = initials.toUpperCase();
    }
    if (iconedEl) {
        iconedEl.innerHTML = initials;
    }

    console.log({ iconedEl, refEl, zelleEmail });
});
