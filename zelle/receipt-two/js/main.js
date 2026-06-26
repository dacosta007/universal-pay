const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const zelleAmount = document.querySelector('.zelle-amount').value;
    const zelleReceiver = document.querySelector('.zelle-receiver-name').value;
    const zelleEmail = document.querySelector('.zelle-receiver-email').value;
    const zellleBank = document.querySelector('.zelle-bank-name').value;

    localStorage.setItem('zelleAmount', zelleAmount);
    localStorage.setItem('zelleReceiver', zelleReceiver);
    localStorage.setItem('zelleEmail', zelleEmail);
    localStorage.setItem('zellleBank', zellleBank);

    document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = 'receipt2.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);
}); 