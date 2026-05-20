function updateProgress(){

    let checkboxes =
    document.querySelectorAll("input[type=checkbox]");

    let checked = 0;

    checkboxes.forEach((cb,index)=>{

        if(cb.checked){

            localStorage.setItem("cb"+index,true);

            checked++;
        }

        else{

            localStorage.removeItem("cb"+index);
        }
    });

    let percent =
    Math.round((checked/checkboxes.length)*100);

    let bar =
    document.getElementById("progressBar");

    if(bar){

        bar.style.width = percent + "%";
        bar.innerText = percent + "%";
    }
}

window.addEventListener("load",()=>{

    let checkboxes =
    document.querySelectorAll("input[type=checkbox]");

    let checked = 0;

    checkboxes.forEach((cb,index)=>{

        if(localStorage.getItem("cb"+index)){

            cb.checked = true;

            checked++;
        }
    });

    let percent =
    Math.round((checked / checkboxes.length) * 100);

    let bar =
    document.getElementById("progressBar");

    if(bar){

        bar.style.width = percent + "%";
        bar.innerText = percent + "%";
    }
});