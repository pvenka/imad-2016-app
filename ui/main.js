//console.log('Loaded!');
//var element = document.getElementById("main-text");
//element.innerHTML = "New Value";
var img = document.getElementById("maldi");
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft +2;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() {
    //img.style.marginLeft = "100px";
    var interval = setInterval(moveRight,50);
};

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function() {
    
    counter = counter +1;
    var span = document.getElementById('count');
    span.InnerHTML = counter.toString();
    
};