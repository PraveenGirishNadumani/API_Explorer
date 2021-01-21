
const Razorpay = require('razorpay');
// const export= require('module.export');

const rzp= new Razorpay({
	key_id:"rzp_test_Bc7pOvh6Z4niGG",
	key_secret:"40R99oNgJdhMXG5FhuCwpXLi"});


var options={
	"amount":"1000",
	"currency":"INR",
	"receipt":"xyz123",
	"payment_capture":"true"
};

function createOrder(Orderamount){
	var options={
	"amount":"100",
	"currency":"INR",
	"receipt":"xyz123",
	"payment_capture":"true",
	"notes":{
		"description":"fromNodejsProject"
	}
};
	options.amount=Orderamount;

	rzp.orders.create(options).then((data)=>{
		return data.id;
	}).catch((data)=>{
		throw data;
	})
}

exports.createAnOrder= amount => createOrder(amount);