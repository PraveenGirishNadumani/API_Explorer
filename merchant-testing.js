const Razorpay = require('razorpay');



    var instance = new Razorpay({
        key_id: 'rzp_test_Bc7pOvh6Z4niGG',
        key_secret: '40R99oNgJdhMXG5FhuCwpXLi'});
    var paymentId = "pay_EvnwJOuTL5wJep";
    var amount = 600; // In paise
    instance.payments
      .capture(paymentId, amount)
      .then(async function(paymentResponse) {
        if (
          paymentResponse.status === 'captured' &&
          paymentResponse.error_code === null
        ) {
          // Custom logic
        }
      })
      .catch(function(error) {
        console.log('**********error 2 ', error);
        res.status(400).json({ success: false, error: error });
      });