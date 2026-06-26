const cashappIcon = document.querySelector('.cashapp-icon');
const cashappName = document.querySelector('.cashapp-receiver-name');
const cashappAmount = document.querySelector('.cashapp-amount');
const cashappTag = document.querySelector('.tag');
const cashappNarration = document.querySelector('.narration');
const cashappTime = document.querySelector('.time');
const cashappAmpm = document.querySelector('.ampm');

const storedCashappName = localStorage.getItem('cashappReceiver');

cashappName.innerHTML = `${storedCashappName}`;
cashappIcon.innerHTML = storedCashappName.charAt(0).toUpperCase();
cashappAmount.innerHTML = `${Number(localStorage.getItem('cashappAmount')).toLocaleString()}.00`;
cashappTag.innerHTML = `${localStorage.getItem('cashappTag')}`;
cashappNarration.innerHTML = `${localStorage.getItem('cashappNarration')}`;
cashappTime.innerHTML = `${localStorage.getItem('cashappTime')}`;

const ampmStored = localStorage.getItem('cashappAmpm');
if(ampmStored === 'am') {
    cashappAmpm.innerHTML = `AM`;

} else if (ampmStored === 'pm') {
    cashappAmpm.innerHTML = `PM`;

};



const colors = ['#3498db', '#e91e63', '#2ecc71']; 

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    cashappIcon.style.backgroundColor = getRandomColor();
