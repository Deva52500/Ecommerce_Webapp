import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../src/Content.css';
import PaymentForm from './PaymentForm';

const Cart = ({ selectedOrderItem, onDelete, onPlaceOrder }) => {
  const [hasOrders, setHasOrders] = useState(false);

  useEffect(() => {
    setHasOrders(selectedOrderItem.length > 0);
  }, [selectedOrderItem]);

  return (
    <div>
      <h3>{hasOrders ? "Your Orders" : "No Orders"}</h3>

      {selectedOrderItem?.map((order) => (
        <div key={order.id}>
          <img className= "content_img" alt="Product Image" src={order.image} height="180px" width="150px"></img>
          <div className="order">
          <h4>
            {order.title}<FaTimes
              style={{ color: 'red', cursor: 'pointer'}}
              onClick={() => onDelete(order.title)}
            />
          </h4>
          </div>
        </div>
      ))}

      {hasOrders && <PaymentForm placeOrder={onPlaceOrder}/>}
    </div>
  );
}

export default Cart;
