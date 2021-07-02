//DEPENDENCIES
const express=require('express');
const path = require('path'); 
//INSTATNTIATION
const app= express();



//CONFIGURATION FOR TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', './views');

//MIDDLE WARE
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public'))); 

//ROUTES
  app.get('/register', (req, res) => {
    res.render('registerform',{ title:'registeration Form' });
  });

  app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted");
})

  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});



//listening on server
app.listen(3400, () => console.log('Our project is working vwalla!!!'));