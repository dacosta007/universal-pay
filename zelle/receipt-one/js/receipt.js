const zelleName = document.querySelector('.zelle-receiver');
const zelleAmount = document.querySelector('.zelle-amount');
const zelleBank = document.querySelector('.zelle-bank');

zelleName.innerHTML = `${localStorage.getItem('zelleReceiver')}`;
zelleAmount.innerHTML = `${Number(localStorage.getItem('zelleAmount')).toLocaleString()}.00`;

const bankValue = localStorage.getItem('zellleBank');

if (!bankValue) {
    zelleBank.innerHTML = 'Adv plus Banking - 1747';
} else {
    zelleBank.innerHTML = bankValue;
}
 