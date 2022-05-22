var rating = 0;

function recoverColor() {
    var options = document.getElementsByClassName("option");

    for (let i = 0; i < options.length; i++) {    
        options[i].style.backgroundColor = 'hsla(216, 12%, 8%, 0.4)';
    }
}

var colors = ['orange', 'violet', "greenyellow", "blue", "green"];

function onOption(x) {
    recoverColor();
    document.getElementById("option" + String(x)).style.backgroundColor = colors[x-1];
    rating = x;
}

function onSubmit() {
    // redirect
    if (rating > 0) {
        localStorage.rating = String(rating);
        window.location.href = "submit.html";
    }

    else {
        alert("Please give your rating!");
    }
}
