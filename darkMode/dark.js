let switcher = document.getElementById("press");
let circle = document.getElementById("shape");
let txtprs = document.getElementById("txtprs");
let counter = 0;
let wholePage = document.getElementById("wholePage");
let header = document.getElementById("header");
let txts = document.querySelectorAll(".txts");
let titles = document.querySelectorAll(".titles");
let minReads = document.querySelectorAll(".minRead");


let switchOnOff = () => {
    
    if(counter==0 || counter%2==0){
        counter++;
        circle.className = "circleOn";
        txtprs.className = "txtPressed";
        switcher.className="switcherOn"
        txtprs.innerText = "On";
        wholePage.style.background = "#282c35";
        wholePage.style.transition = "all 0.3s linear";
        header.style.color = "#fff";
        txts[0].style.color = "#fff";
        txts[1].style.color = "#fff";
        txts[2].style.color = "#fff";
        txts[3].style.color = "#fff";
        titles[0].style.color = "#FFA7C4";
        titles[1].style.color = "#FFA7C4";
        titles[2].style.color = "#FFA7C4";
        titles[3].style.color = "#FFA7C4";
        minReads[0].style.color = "#CBD5E1";
        minReads[1].style.color = "#CBD5E1";
        minReads[0].style.color = "#CBD5E1";
        minReads[0].style.color = "#CBD5E1";
    }

    else if(counter%2!=0){
        counter++;
        circle.className = "circle";
        txtprs.className = "txtnotPressed";
        switcher.className ="switcher";
        txtprs.innerText = "Off"
        wholePage.style.background = "white";
        wholePage.style.transition = "all 0.3s linear";
        header.style.color = "#282c35";
        txts[0].style.color = "#282c35";
        txts[1].style.color = "#282c35";
        txts[2].style.color = "#282c35";
        txts[3].style.color = "#282c35";
        titles[0].style.color = "#D23669";
        titles[1].style.color = "#D23669";
        titles[2].style.color = "#D23669";
        titles[3].style.color = "#D23669";
        minReads[0].style.color = "#64748B";
        minReads[1].style.color = "#64748B";
        minReads[2].style.color = "#64748B";
        minReads[3].style.color = "#64748B";
    }

}




switcher.addEventListener("click",switchOnOff);