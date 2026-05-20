function showMenu(event, sectionId){

    document.querySelectorAll("main section")
    .forEach(section=>{

        section.style.display = "none";
        section.classList.remove("active-section");

    });

    const target =
    document.getElementById(sectionId);

    if(target){

        target.style.display = "block";
        target.classList.add("active-section");
    }

    document.querySelectorAll(".sidebar a")
    .forEach(a=>{

        a.classList.remove("active-nav");

    });

    if(event){

        event.currentTarget
        .classList.add("active-nav");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if(window.innerWidth < 768){

        closeSidebar();
    }
}

function showSection(sectionId){

    document.querySelectorAll("main section")
    .forEach(section=>{

        section.style.display = "none";

    });

    document.getElementById(sectionId)
    .style.display = "block";

    document.querySelectorAll(".sidebar a")
    .forEach(a=>{

        a.classList.remove("active-nav");

    });

    const targetBtn =
    document.querySelector(`.${sectionId}`);

    if(targetBtn){

        targetBtn.classList.add("active-nav");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if(window.innerWidth < 768){

        closeSidebar();
    }
}

function toggleSidebar(){

    document.getElementById("sidebar")
    .classList.toggle("active");

    document.getElementById("overlay")
    .classList.toggle("active");
}

function closeSidebar(){

    document.getElementById("sidebar")
    .classList.remove("active");

    document.getElementById("overlay")
    .classList.remove("active");
}

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");
    }

    else{

        localStorage.setItem("theme","light");
    }
}

function toggleMaterial(id){

    const detail =
    document.getElementById(id);

    detail.classList.toggle("show");
}

function toggleDetail(id){

    let el =
    document.getElementById(id);

    if(el.style.display === "" ||
       el.style.display === "none"){

        el.style.display = "block";
    }

    else{

        el.style.display = "none";
    }
}

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

window.onscroll = function(){

    const btn =
    document.getElementById("topBtn");

    if(document.documentElement.scrollTop > 300){

        btn.style.display = "flex";
    }

    else{

        btn.style.display = "none";
    }
};

window.addEventListener("load",()=>{

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.classList.add("fade-out");

        setTimeout(()=>{

            loader.style.display = "none";

        },500);
    }
});