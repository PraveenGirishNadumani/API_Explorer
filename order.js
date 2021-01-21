

// const export= require('module.export');
// exports.createAnOrder= amount => createOrder(amount);
const rzp= new Razorpay({
key_id:"rzp_test_Bc7pOvh6Z4niGG",
key_secret:"40R99oNgJdhMXG5FhuCwpXLi"});


class order{
 createAnOrder(Orderamount){
 	var orderID;
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
		console.log(data.id);
		console.log(`inside the order creations method${data.id}`);
		orderID= data.id;
		console.log(`inside the order creation method orderID:${orderID}`);
		return orderID;
	}).catch((data)=>{
		throw data;
	});
	console.log(`from order creationg method ${orderID}`);
	return orderID;
}

}
let x=new order();
console.log(x.createAnOrder(100));
module.exports = order;
console.log(`from outside the fun ${x.orderID}`);
x.createAnOrder((1000,reps)=>{
	console.log(`from new function: ${orderID}`);
})