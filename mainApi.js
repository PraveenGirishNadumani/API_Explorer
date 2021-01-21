const express=require('express');
const app=express();
app.set('view engine','ejs');

//index route of the server:
app.get('/',function(req,resp){
	resp.render('index.ejs',null);
});

//Payment route:
app.use('/payment',require('./paymentsApi'));


const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log(`localhost started on the PORT:${PORT}`);
