const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const paypalAmount = document.querySelector('.paypal-amount').value;
    const paypalReceiver = document.querySelector('.paypal-receiver-name').value;
    const currency = document.querySelector('.currency').value;

    localStorage.setItem('paypalAmount', paypalAmount);
    localStorage.setItem('paypalReceiver', paypalReceiver);
    localStorage.setItem('currency', currency);

    document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = 'receipt.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);
}); 