var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <!DOCTYPE html>
    <head>
        <title>
            ${title}
        </title>
         <meta name ="viewport" content="width=device-width, initial-scale=1"/>
          <link href="/ui/style.css" rel "stylesheet" />
         <h2> ${heading}</h2>
    </head>
    <body>
   <a href="/">Home</a>
   <div class="container">
   <p>
   ${content}
    </p>
    </div>
    </body>
</html>`;
    return htmlTemplate;
}

var articles = {
    'article-one': { 
        title: "First Article",
        heading: "First page",
        content: 
        `This is a content for the first article.
        We will just write something.
        We can modify later.
        `
    },
    'article-two': {title: "Second Article",
        heading: "Second article page",
        content: 
        `This is a content for the second article.
        We will just write something.
        We can modify later.
        `},
     'article-three' : {
         title: "Third Article",
        heading: "Third article page",
        content: 
        `This is a content for the third article.
        We will just write something.
        We can modify later.
        `
     }
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter',function(rq, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
var names =[];
//app.get('/submit-name/:name', function (req,res) {
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
   //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   //res.send("Article one will be served soon!"); 
});
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));    
   //res.send("Article two will be served soon!"); 
});
app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));    
   //res.send("Article three will be served soon!"); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
