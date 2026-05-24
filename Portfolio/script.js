// website open hote hi popup

alert("Welcome To My Portfolio Website");


/* typing effect */

let text = "Frontend Developer";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

    }

}

setInterval(typingEffect , 140);


/* hire me button */

function hireMe(){

    alert("Thanks For Visiting My Portfolio");

}


/* skills info */

function showSkill(message){

    alert(message);

}


/* project details */

function projectInfo(data){

    alert(data);

}


/* contact button */

function contactMsg(){

    alert("Message Feature Coming Soon");

}


/* navbar hover effect */

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

    link.addEventListener("mouseenter", function(){

        link.style.color = "#60a5fa";

    });

});


/* project card hover */

let cards = document.querySelectorAll(".project-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)";

    });

});


cards.forEach(function(card){

    card.addEventListener("mouseleave", function(){

        card.style.boxShadow = "0px 5px 10px rgba(0,0,0,0.1)";

    });

});