import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import OrderPlaced from "./OrderPlaced";

const Cart = (props) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cartItemsModal, setCartItemsModal] = useState(true);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderPlacedHandler = () => {
    setOrderPlaced(true);
    setCartItemsModal(false);
    // alert("Order Placed Successfully!")
  };

  return (
    <React.Fragment>
      {orderPlaced && (
        <OrderPlaced onClick={props.onClose} onClose={props.onClose} />
      )}

      {cartItemsModal && (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItem && (
              <button className={classes.button} onClick={orderPlacedHandler}>
                Order
              </button>
            )}
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
