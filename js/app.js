function startApp(){

    const start =
    document.getElementById("startScreen");

    start.style.opacity = "0";

    setTimeout(()=>{

        start.style.display = "none";

        document.body.style.overflowY = "auto";

        document.getElementById("mainHeader")
        .classList.remove("hidden-header");

        document.getElementById("menuButton")
        .classList.remove("hidden-header");

        document.querySelectorAll("main section")
        .forEach(section=>{

            section.style.display = "none";

        });

        document.getElementById("home")
        .style.display = "block";

        greeting();

    },500);
}

function playSound(){

    document.getElementById("clickSound").play();
}

function greeting(){

    let hour = new Date().getHours();

    let greet = "";

    if(hour < 12){

        greet = "Good Morning ☀️";
    }

    else if(hour < 18){

        greet = "Good Afternoon 🌤️";
    }

    else{

        greet = "Good Evening 🌙";
    }

    dynamicText =
    `${greet} — Ready to improve your English today? 🚀`;

    typingIndex = 0;

    document.getElementById("typing").innerHTML = "";

    typeGreeting();
}

let typingIndex = 0;
let dynamicText = "";

function typeGreeting(){

    if(typingIndex < dynamicText.length){

        document.getElementById("typing")
        .innerHTML += dynamicText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeGreeting,50);
    }
}