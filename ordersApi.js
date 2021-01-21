const express=require('express');
const app=express.Router();
const Razorpay = require('razorpay');

app.set('view engine','ejs');

const rzp= new Razorpay({
	key_id:"rzp_test_Bc7pOvh6Z4niGG",
	key_secret:"40R99oNgJdhMXG5FhuCwpXLi"
	});

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

module.exports = app;