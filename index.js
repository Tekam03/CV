window.onload = load;

function load(){
    document.getElementById("aboutmebtn").addEventListener("click", showAboutMe);
    document.getElementById("homebtn").addEventListener("click", showIndex);
    document.getElementById("skillsbtn").addEventListener("click", showSkills);
    document.getElementById("experiencebtn").addEventListener("click", showExperience);
    document.getElementById("educationbtn").addEventListener("click", showEducation);
}

function hideall(){
    document.getElementById("index").classList.add("is-hidden");
    document.getElementById("aboutme").classList.add("is-hidden");
    document.getElementById("skills").classList.add("is-hidden");
    document.getElementById("experience").classList.add("is-hidden");
    document.getElementById("education").classList.add("is-hidden");


    for (let backgroundimgs of document.getElementsByClassName("hero-background")) {
        backgroundimgs.classList.add("is-transparent");
    }
    for (let btns of document.getElementsByClassName("btn")) {
        btns.classList.remove("is-active");
    }
}

function showAboutMe(){
    hideall();
    document.getElementById("aboutmeImg").classList.remove("is-transparent");
    document.getElementById("aboutme").classList.remove("is-hidden");
    document.getElementById("aboutmebtn").classList.add("is-active");
    
}


function showIndex(){
    hideall();
    document.getElementById("indexImg").classList.remove("is-transparent");
    document.getElementById("index").classList.remove("is-hidden");
    document.getElementById("homebtn").classList.add("is-active");
}

function showSkills(){
    hideall();
    document.getElementById("skillsImg").classList.remove("is-transparent");
    document.getElementById("skills").classList.remove("is-hidden");
    document.getElementById("skillsbtn").classList.add("is-active");
}


function showExperience(){
    hideall();
    document.getElementById("experienceImg").classList.remove("is-transparent");
    document.getElementById("experience").classList.remove("is-hidden");
    document.getElementById("experiencebtn").classList.add("is-active");
}

function showEducation(){
    hideall();
    document.getElementById("educationImg").classList.remove("is-transparent");
    document.getElementById("education").classList.remove("is-hidden");
    document.getElementById("educationbtn").classList.add("is-active");
}