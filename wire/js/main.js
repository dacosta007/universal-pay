setInterval(() => {
    document.querySelector('.loading').style.display= "flex"

    setInterval(() => {
        window.location.href = "dashboard.html";
        document.querySelector('.loading').style.display= "none"
    },5000);
},3000)