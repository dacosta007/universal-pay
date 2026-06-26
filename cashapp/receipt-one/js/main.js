const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const cashappPayType = document.querySelector('.cashapp-payment-type').value;
    const cashappAmount = document.querySelector('.cashapp-amount').value;
    const cashappReceiver = document.querySelector('.cashapp-receiver-name').value;
    const cashappTag = document.querySelector('.cashapp-tag').value;
    const cashappNarration = document.querySelector('.cashapp-narration').value;
    const cashappTime = document.querySelector('.cashapp-time').value;
    const cashappAmpm = document.querySelector('.cashapp-ampm').value;
   

    localStorage.setItem('cashappPayType', cashappPayType);
    localStorage.setItem('cashappAmount', cashappAmount);
    localStorage.setItem('cashappReceiver', cashappReceiver);
    localStorage.setItem('cashappTag', cashappTag);
    localStorage.setItem('cashappNarration', cashappNarration);
    localStorage.setItem('cashappTime', cashappTime);
    localStorage.setItem('cashappAmpm', cashappAmpm);

    const selectedType = localStorage.getItem('cashappPayType');

    if(selectedType === 'completed') {
        document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = 'receipt.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);
        
    } else if(selectedType === 'pending') {
        document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = 'receipt-pending.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);

    } else if(selectedType === 'failed') {
        document.querySelector('.loading-access').style.display= "block"
        
        setInterval(() => {
            window.location.href = 'receipt-failed.html';
            document.querySelector('.loading-access').style.display= "none"
        },5000);
        
    }
});