console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
var img = document.getElementById("maldi");
img.onclick = function() {
    img.style.marginleft = "100px";
};