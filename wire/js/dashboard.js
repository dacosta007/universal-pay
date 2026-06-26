function selected (picked) {

    //FOR COUNTRIES

    if (picked === 'nigeria') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "nigeria/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'usa') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "usa/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'sa') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "sa/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'uk') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "uk/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    }

    // FOR OTHERS CLICKED

    else if (picked === 'gcash') {
        document.querySelector('.loading').style.display = "block"

        setInterval(() => {
            window.location.href = "gcash/index.html";
            document.querySelector('.loading').style.display = "none"
        }, 5000);

    } else if (picked === 'cashapp') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "cashapp/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'paypal') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "paypal/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'wallet') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "wallet/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'chipper') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "chipper/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    } else if (picked === 'zelle') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "zelle/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    }  else if (picked === 'wire') {
        document.querySelector('.loading').style.display= "block"

        setInterval(() => {
            window.location.href = "wire/index.html";
            document.querySelector('.loading').style.display= "none"
        },5000);

    }
};

//MENU SECTION

function openMenu() {
    document.querySelector('.mobile-menu').style.display="block";
};

function closeMenu() {
    document.querySelector('.mobile-menu').style.display="none";
};

function home() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}

function buyToken() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="buy-token.html";
}

function contact() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#contact";
}

function about() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}

function youtube() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href ="https://www.youtube.com/@Heis_LuxuryFox"
}

function facebook() {
    document.querySelector('.mobile-menu').style.display="none";
    alert('PLEASE JOIN THE WHATSAPP CHANNEL FOR NOW');
}

function whatsapp() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href ="https://whatsapp.com/channel/0029Vb1rn8jDp2QFwmSGy71r";
}

function whatsappChannel() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="https://whatsapp.com/channel/0029Vb1rn8jDp2QFwmSGy71r";
}