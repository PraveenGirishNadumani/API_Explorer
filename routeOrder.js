const Razorpay = require('razorpay');

const rzp= new Razorpay({
	key_id:"rzp_test_DSfAaZAnXaWp0j",
	key_secret:"RGuZ13jfNC98ro7yh0Mpnilj"
	});

var options={
	"amount":"100000",
	"currency":"INR",
	"receipt":"xyz123",
	"payment_capture":"true",
	"notes":{
		"description":"fromNodejsProject"
		},
	"transfers": [
  		{
		"account": "acc_Dq3svYEkCH3LGd",
		"amount": 2000,
		"currency": "INR"
		}
 	]
};
rzp.orders.create(options).then((data)=>{

		console.log(data);

	}).catch((data)=>{

		console.log(data);
	});