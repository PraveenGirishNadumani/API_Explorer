const express=require('express');
const api=require('./Razorpay_key');
const app=express.Router();
const bodyParser=require('body-parser');
const Razorpay = require('razorpay');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const rzp= new Razorpay({
	key_id:api.key,
	key_secret:api.secrete
	});

//Routes start from here
//for Order creation and payment age rendering.
app.get('/order/:id',(req,resp)=>{

	var options={
		"amount":"100",
		"currency":"INR",
		"receipt":"xyz123",
		"payment_capture":"true",
		"notes":{
			"description":"fromNodejsProject"
			}
		};
		console.log(req.params.id);
		options.amount=req.params.id;
	
	
		rzp.orders.create(options).then((data)=>{
	
			resp.render('checkout.ejs',{orderID:data.id,key:"rzp_test_Bc7pOvh6Z4niGG"});
	
		}).catch((data)=>{
	
			resp.status(400).send(data);
		});

});

//For payment response validation and signature verification.
app.post('/sucess',(req,resp)=>{

const payment_id=req.body.razorpay_payment_id;

if(payment_id!=null){
	const order_id=req.body.razorpay_order_id;
	const signature=req.body.razorpay_signature;
	console.log(`payment_id:${payment_id} order_id:${order_id} signature:${signature}`);
	console.log(req.body);
	resp.send(`payment sucessful`);
}
else{
	const error_code=req.body.error.code;
	const description=req.body.error.description;
	console.log(req.body);
	resp.send(`Payment failed, Code:${error_code}, Description:${description}`);
}

});

module.exports = app;