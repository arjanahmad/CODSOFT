
// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");


darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    }
    else{
        darkBtn.innerHTML = "🌙";
    }
});


// Welcome Message

window.addEventListener("load", () => {
    console.log("ArJaaN Landing Page Loaded Successfully 🔥");
});
