import React, { useState } from 'react'

function App() {

    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert('Enter amount')
        } else {
            // alert(amount)
            var options = {
                key: "rzp_test_dkj84s6oh1OfJK",
                kay_secret: "PyL9G1FKZvzcQJzCd691W1MV",
                amount: amount * 100,
                currency: "INR",
                name: "Test_Project",
                description: "For testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: 'Arunkumar K',
                    email: 'arun08kalichamy@gmail.com',
                    contact: "6383504650"
                },
                notes: {
                    address: "AK Transport"
                },
                theme: {
                    color: '#ddd'
                }
            };

            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    return (
        <div className='App' style={{ marginLeft: '500px' }}>
            <h2> RazorPay Payment Gateway Using React </h2>
            <input type='text' placeholder='Enter amount' value={amount} onChange={(e) => { setAmount(e.target.value) }}></input>
            <div style={{ marginTop: '6px', }}>
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    )
}

export default App