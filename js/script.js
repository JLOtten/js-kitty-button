var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(button);
//console.log(cat);

//upon button click, function shows cat image
button.addEventListener("click", function () {
if (cat.classList.contains("show")) { 
    //console.log("yes");
    //cat image dissapears when button is clicked 2 times
    cat.classList.remove("show");
    //test changes on button to wait, come back! when cat image dissapears 
    button.innerText ="Wait, come back!"; 
    //changes button styling to purple
    button.classList.add("disappear"); 
} else {
    //console.log("no");
    //cat image appears when button pressed
    cat.classList.add("show"); 
    //changes text on button to Shoo, cat!! when button is pressed 1st time and cat image appears
    button.innerText = "Shoo, cat!!"; 
    //changes button style back to how it was
    button.classList.remove("disappear");
}
});