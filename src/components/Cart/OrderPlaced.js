import React from "react";
import Modal from "../UI/Modal";
import styles from "./OrderPlaced.module.css";
import OrderPlacedIcon from "./OrderPlacedIcon";

const OrderPlaced = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles["cart-items"]}>
      <div className={styles.placed}>
        <OrderPlacedIcon/>
        <h1>Order Placed Successfully!</h1>
        <strong>
          <p>Your food is on the way :)</p>
        </strong>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClick}>
          Close
        </button>
      </div>
      </div>
    </Modal>
  );
};

export default OrderPlaced;
