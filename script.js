let title = document.getElementById("title");
let rules = document.getElementById("rules");
let begin = document.getElementById("begin");

/**
 * Hide the homepage for begin the game
 */
function game(){
    title.style.display = "none";
    rules.style.display = "none";
    begin.style.display = "none";
}


begin.addEventListener("click", game);