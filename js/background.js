const backgrounds = [
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
"https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
];

let bgIndex = 0;

function changeBackground(){

    const heroes =
    document.querySelectorAll(".hero");

    heroes.forEach(hero=>{

        hero.style.backgroundImage = `
            linear-gradient(
                rgba(0,0,0,0.55),
                rgba(0,0,0,0.65)
            ),
            url(${backgrounds[bgIndex]})
        `;

        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";
        hero.style.backgroundRepeat = "no-repeat";
    });

    bgIndex++;

    if(bgIndex >= backgrounds.length){
        bgIndex = 0;
    }
}

changeBackground();

setInterval(changeBackground,7000);