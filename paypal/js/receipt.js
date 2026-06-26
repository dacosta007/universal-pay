
const paypalName = document.querySelector('.paypal-receiver');
const paypalAmount = document.querySelector('.paypal-amount');

paypalName.innerHTML = `${localStorage.getItem('paypalReceiver')}`;
paypalAmount.innerHTML = `${Number(localStorage.getItem('paypalAmount')).toLocaleString()}.00`;

const sign = document.querySelector('.sign');
const curerencyStored = document.querySelector('.currency');

const selectedCurrency = localStorage.getItem('currency');
if(selectedCurrency === 'usd') {
    sign.innerHTML = '$';
    curerencyStored.innerHTML = 'USD'
} else if(selectedCurrency === 'euro') {
    sign.innerHTML = '£';
    curerencyStored.innerHTML = 'EURO'
}
