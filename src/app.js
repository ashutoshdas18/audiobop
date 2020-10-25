const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const lyricsClass = require('./assets/partials/lyricsparser');
const { stat } = require('fs');
const state={};

 
const app=express();

const port = process.env.PORT || 5000;
const dirname= path.join(__dirname,'/assets/views/hbs');
const partialPath=path.join(__dirname,'/assets/partials');


app.set('view engine','hbs')
app.set('views', dirname);
hbs.registerPartials(partialPath);
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',(req,res,next)=>{
    console.log('Hello');
    next();
});

app.use(express.static(path.join(__dirname,'/assets')));

app.get('/', (req, res) => {
   res.render('index')
});

app.use('/search',(req,res,next)=>{
    console.log('app.send works fine')
    next();
})
app.post('/search', (req, res) => {
    ;(async function(){
    const newText = req.body.data.replace(/ /g, "").toLowerCase();
    const newTextData=newText.split(',')
    state.search=new lyricsClass.hello(newTextData[0],newTextData[1]);
    await state.search.getLyricss();
   res.render('lyrics',{
       lyrics:state.search.lyrics
   })
    })();	
});

app.use('/login',(req,res,next)=>{
    next()
});
app.get('/login', (req, res) => {
        res.render('404')
});
app.get('/membership', (req, res) => {
        res.render('404')
});
app.get('/help', (req, res) => {
        res.render('404')
});
app.get('/about', (req, res) => {
        res.render('404')
});
app.get('/api', (req, res) => {
        res.render('404')
});
app.get('/Contact', (req, res) => {
        res.render('404')
});

app.listen(port, () => {
    console.log(`Server started on port`);
});