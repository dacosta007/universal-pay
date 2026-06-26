
const cashappName = document.querySelector('.cashapp-receiver-name');
const cashappAmount = document.querySelector('.cashapp-amount');

cashappName.innerHTML = `${localStorage.getItem('cashappReceiver')}`;
cashappAmount.innerHTML = `${Number(localStorage.getItem('cashappAmount')).toLocaleString()}.00`;
