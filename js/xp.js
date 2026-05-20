let userData = {
    xp: parseInt(localStorage.getItem("xp")) || 0,
    level: "Beginner",
    badge: "🎖️ New Learner"
};

function addXP(amount){

    userData.xp += amount;

    localStorage.setItem("xp", userData.xp);

    updateUserSystem();
}

function updateUserSystem(){

    if(userData.xp >= 1000){

        userData.level = "Master";
        userData.badge = "👑 Master";
    }

    else if(userData.xp >= 600){

        userData.level = "Advanced";
        userData.badge = "🔥 Advanced";
    }

    else if(userData.xp >= 300){

        userData.level = "Intermediate";
        userData.badge = "⭐ Intermediate";
    }

    else{

        userData.level = "Beginner";
        userData.badge = "🎖️ New Learner";
    }

    const xpFill =
    document.getElementById("xpFill");

    if(xpFill){

        let percent =
        Math.min((userData.xp / 1000) * 100,100);

        xpFill.style.width = percent + "%";
    }

    const level =
    document.getElementById("level");

    if(level){

        level.innerText = userData.level;
    }

    const badge =
    document.getElementById("badge");

    if(badge){

        badge.innerText = userData.badge;
    }
}

updateUserSystem();