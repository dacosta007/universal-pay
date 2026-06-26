document.querySelector('form')
addEventListener('submit', function(e) {
   e.preventDefault();
   
   const name = document.querySelector('.name').value;
   const receiverNumber = document.querySelector('.js-number').value;
   const amount = document.querySelector('.amount').value;
   
   localStorage.setItem('name', name);
   localStorage.setItem('number', receiverNumber);
   localStorage.setItem('amount', amount);
   
   document.querySelector('.loading').style.display = 'block';
   setTimeout(() => {
      document.querySelector('.loading').style.display = 'none';
      window.location.href = 'gcash-receipt.html'
   }, 3000)
});