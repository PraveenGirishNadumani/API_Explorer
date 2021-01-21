const Razorpay = require('razorpay');

const rzp= new Razorpay({
    key_id:"rzp_test_Bc7pOvh6Z4niGG",
    key_secret:"40R99oNgJdhMXG5FhuCwpXLi"
});

let options= {
    "amount":"0",
    "currency":"INR",
    "method":"nach",
    "payment_capture":"1",
    "customer_id": "cust_Dkt2ClKrNJ5zsT",
    "receipt":"Receipt No. 1",
    "token":{
      "auth_type":"physical",
      "max_amount":10000000,
      "expire_at":1597850603,
      "bank_account": {
        "bank_name": "HDFC",
        "account_number": "33097495100",
        "ifsc_code": "SBIN0000254",
        "beneficiary_name": "Praveen Girish Nadumani"
      },
      "nach":{
        "form_reference1":"Recurring Payment for Gaurav Kumar",
        "form_reference2":"Method Paper NACH",
        "description":"Paper NACH Gaurav Kumar"
      }
    }
  };

// let options={
//     "amount":"100",
//     "currency":"INR",
//     "receipt":"xyz123",
//     "payment_capture":"true",
//     "notes":{
//         "description":"fromNodejsProject"
//         }
//     };

  rzp.orders.create(options).then((data)=>{
      console.log('order creation sucessful');
      console.log(data);
  }).catch((data)=>{
      console.log("order creation failed ");
      console.log(data);
  })