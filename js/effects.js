particlesJS("particles-js", {
    particles: {
        number: { value: 25 },
        color: { value: "#00c9ff" },
        line_linked: { enable:true },
        move: { speed:0.7 }
    }
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
    ".card, .hero, .stat-box"
);

function showLevelUp(level){
    const popup = document.createElement("div");
    popup.className = "level-popup";
    popup.innerHTML = `
        🎉 LEVEL UP! <br>
        ${level}
    `;
    document.body.appendChild(popup);

    setTimeout(()=>{
        popup.remove();
    },3000);
}

function updateBadge(score){
    let badge =
    document.getElementById("badge");
    if(score >= 90){
        badge.innerHTML =
        "👑 Master Speaker";
        confetti();
    }else if(score >= 70){
        badge.innerHTML =
        "🔥 Advanced Speaker";
    }else if(score >= 50){
        badge.innerHTML =
        "🎯 Intermediate Speaker";
    }else{
        badge.innerHTML =
        "🌱 Beginner";
    }
}