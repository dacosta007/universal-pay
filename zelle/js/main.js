const firstClicked = document.querySelector('.first-receipt');
firstClicked.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.loading-access').style.display="block";
    setInterval(() => {
        window.location.href="receipt-one/index.html";
        document.querySelector('.loading-access').style.display="none";
    },3000)
});

const secondClicked = document.querySelector('.second-receipt');
secondClicked.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.loading-access').style.display="block";
    setInterval(() => {
        window.location.href="receipt-two/index.html";
        document.querySelector('.loading-access').style.display="none";
    },3000)
});