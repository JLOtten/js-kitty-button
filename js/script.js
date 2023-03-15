var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(button);
//console.log(cat);

//upon button click, function shows cat image
button.addEventListener("click", function() {
cat.classList.add("show");
});