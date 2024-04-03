import React from 'react'
import '../../src/Content.css';

const PaymentForm = ({placeOrder}) => {
  return (
    <div>
        <h2 className='d-flex justify-content-center'>Payment & Shipping Details</h2>
    <div className='d-flex justify-content-center'>
        
            <form onSubmit={placeOrder}>
            <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required/>
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Name</label>
            <input type="Name" class="form-control" id="inputPassword4" placeholder="Name" required/>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
        </div>
        <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" required/>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
            </select>
            </div>
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" required/>
            </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputPassword4">Card Number</label>
            <input type="number" class="form-control" id="Card" placeholder="Card Number" required/>
            </div>
            <div class="form-group col-md-6">
            <label for="Expiry">Expiry</label>
            <input type="date" class="form-control" id="Expiry" placeholder="Expiry" required/>
            </div>
         <div/>   
         </div>
         <div class="form-row">
        <div class="form-group col-md-6">
            <label for="CVV">CVV</label>
            <input type="number" class="form-control" id="CVV" placeholder="CVV" required/>
            </div>
         </div>   
        <button class="btn btn-primary place_center">Order</button>
        </form>
    </div>
    </div>
  )
}

export default PaymentForm
