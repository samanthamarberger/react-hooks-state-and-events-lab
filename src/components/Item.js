import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAdd() {
    setInCart(inCart => ! inCart);
  }
  const cartStatus = inCart ? "in-cart" : ""
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{!inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
