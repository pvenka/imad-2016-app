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
//var counter = 0;
button.onclick = function() {
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status == 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
//button.onclick = function() {
    
  //  counter = counter +1;
//    var span = document.getElementById('count');
  //  span.innerHTML = counter.toString();
    request.open('GET', 'http://pvenka.imad.hasura-app.io/counter',true);
    request.send(null);
};

//var nameInput = document.getElementById('name');
//var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status == 200) {
            var names = req.responseText;
            names = JSON.parse(names);
            var list = '';
    for (i=0;i<names.length;i++) {
        list += '<li>'+names[i]+'</li>';
    }
    ul = document.getElementById('namelist');
    ul.innerHTML = list;
        }
    }
};
//button.onclick = function() {
    
  //  counter = counter +1;
//    var span = document.getElementById('count');
  //  span.innerHTML = counter.toString();
  var nameInput = document.getElementById('name');
var name = nameInput.value;
    request.open('GET', 'http://pvenka.imad.hasura-app.io/submit-name/?name=' + name,true);
    request.send(null);
    
    //var names = ['Name1','Name2','Name3'];
   
};



