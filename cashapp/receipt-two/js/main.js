const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const cashappAmount = document.querySelector('.cashapp-amount').value;
    const cashappReceiver = document.querySelector('.cashapp-receiver-name').value;

    localStorage.setItem('cashappAmount', cashappAmount);
    localStorage.setItem('cashappReceiver', cashappReceiver);

    document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = 'receipt.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);
});