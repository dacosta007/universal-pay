const reference = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let randomDigits = "";

for (let i = 0; i < 13; i++) {
  const randomIndex = Math.floor(Math.random() * reference.length);
  
  randomDigits += reference[randomIndex];
}

document.querySelector('.reference').innerHTML = randomDigits;




const currentDate = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[currentDate.getMonth()]; 
const year = currentDate.getFullYear();
const day = String(currentDate.getDate()).padStart(2, '0');
const hour24 = currentDate.getHours();
const minute = currentDate.getMinutes();
const amPm = hour24 >= 12 ? 'PM' : 'AM';

  const hours12 = hour24 % 12 || 12;

const date = document.querySelector('.date');

date.innerHTML = `${month} ${day}, ${year} ${hours12}:${minute}:${amPm}`;


//STORED VALUES

const storedName = localStorage.getItem('name');
const storedNumber = localStorage.getItem('number');
const storedAmount = localStorage.getItem('amount');

const name = document.querySelector('.top-name');
const number = document.querySelector('.number');
const amount = document.querySelectorAll('.amount');

if (storedName && storedName.length >= 4) {
   let maskedAccountNumber =
      storedName.substring(0, 2) + '....' + storedName.slice(-3);

   name.innerHTML = maskedAccountNumber.toUpperCase();
}

number.innerHTML = storedNumber;

amount.forEach((element) => {
   element.innerHTML = `${Number(storedAmount).toLocaleString()}.00`;;
});