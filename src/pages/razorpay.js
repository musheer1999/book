

import axios from "axios";
import React, { Component }  from 'react';
import C from '../resource/values';
import {logo} from  "../assets/images/logo.png"
function loadscript(src){
  return new Promise(resolve=>{   const script = document.createElement('script')
   script.src =src

  script.onload = ()=>{

    resolve(true)
  }
script.onerror=()=>{
  resolve(false)
}
document.body.appendChild(script)
})
 
 
}
const __Dev__ = document.domain=="localhost";


async function pay (prop){
    console.log("pay clicked")
    let prcedPay = await axios.post(C.SERVER_CALL + "/cart/order/push", {
      address: prop.state.address,
      totalPrice: prop.value,
      modeOfPayment: "online",
    });
    console.log(prcedPay)
    if (prcedPay) prop.tran.push("/orderPlaced");
  };

function App(props) {

console.log(props)
 async function displayRazorpay(){
    const res = await loadscript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("razorpay sdk failed to load")
    }

    const data  = await axios.get(C.SERVER_CALL + "/products/razorpay")

    const options = {
      "key": __Dev__?"rzp_test_xvXyAQbQI40Bsy":"na", // Enter the Key ID generated from the Dashboard
"currency":data.data.currency,
"amount":props.value.toString(),
"order_id":data.data.id,
      "name": "IQRA",
      "description": "Test Transaction",
      "image": {logo},   //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
       pay(props)
     props.tran.push("/orderPlaced")
      },
      "prefill": {
      
      },
   
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.open()
  }



  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
         Proceed to Pay
        </a>
      </header>
    </div>
  );
}

export default App;


