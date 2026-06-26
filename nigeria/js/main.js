function selected (picked) {

    //FOR COUNTRIES

    if (picked === 'access') {
        document.querySelector('.loading-access').style.display= "block"

        setInterval(() => {
            window.location.href = "access/index.html";
            document.querySelector('.loading-access').style.display= "none"
        },5000);

    } else if (picked === 'fidelity') {
        document.querySelector('.loading-fidelity').style.display= "block"

        setInterval(() => {
            window.location.href = "fidelity/index.html";
            document.querySelector('.loading-fidelity').style.display= "none"
        },5000);

    } else if (picked === 'first') {
        document.querySelector('.loading-first').style.display= "block"

        setInterval(() => {
            window.location.href = "first/index.html";
            document.querySelector('.loading-first').style.display= "none"
        },5000);

    } else if (picked === 'gt') {
        document.querySelector('.loading-gt').style.display= "block"

        setInterval(() => {
            window.location.href = "gtb/index.html";
            document.querySelector('.loading-gt').style.display= "none"
        },5000);

    } else if (picked === 'stanbic') {
        document.querySelector('.loading-stanbic').style.display= "block"

        setInterval(() => {
            window.location.href = "stanbic/index.html";
            document.querySelector('.loading-stanbic').style.display= "none"
        },5000);

    } else if (picked === 'uba') {
        document.querySelector('.loading-uba').style.display= "block"

        setInterval(() => {
            window.location.href = "uba/index.html";
            document.querySelector('.loading-uba').style.display= "none"
        },5000);

    } else if (picked === 'zenith') {
        document.querySelector('.loading-zenith').style.display= "block"

        setInterval(() => {
            window.location.href = "zenith/index.html";
            document.querySelector('.loading-zenith').style.display= "none"
        },5000);

    } 

    // FOR MICRO-FINANCE BANK CLICKED

    else if (picked === 'opay') {
        document.querySelector('.loading-opay').style.display= "block"

        setInterval(() => {
            window.location.href = "opay/index.html";
            document.querySelector('.loading-opay').style.display= "none"
        },5000);

    } else if (picked === 'palmpay') {
        document.querySelector('.loading-palmpay').style.display= "block"

        setInterval(() => {
            window.location.href = "palmpay/palmpay-dashboard.html";
            document.querySelector('.loading-palmpay').style.display= "none"
        },5000);

    } else if (picked === 'monie') {
        document.querySelector('.loading-monie').style.display= "block"

        setInterval(() => {
            window.location.href = "monie/index.html";
            document.querySelector('.loading-monie').style.display= "none"
        },5000);

    } else if (picked === 'kuda') {
        document.querySelector('.loading-kuda').style.display= "block"

        setInterval(() => {
            window.location.href = "kuda/index.html";
            document.querySelector('.loading-kuda').style.display= "none"
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
    window.location.href="../dashboard.html";
}

function buyToken() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="../buy-token.html";
}

function contact() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="../dashboard.html";
}

function about() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="../about.html";
}

function youtube() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}

function facebook() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}

function whatsapp() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}

function whatsappChannel() {
    document.querySelector('.mobile-menu').style.display="none";
    window.location.href="#home";
}