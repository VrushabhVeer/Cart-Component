import React from "react";
import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const initialData = [
  {
    id: 1,
    name: "Noodles",
    price: 50,
    qty: 1,
  },

  {
    id: 2,
    name: "Biryani",
    price: 150,
    qty: 1,
  },

  {
    id: 3,
    name: "Pizza",
    price: 149,
    qty: 1,
  },

  {
    id: 4,
    name: "Butter Chicken",
    price: 200,
    qty: 1,
  },
];

const calculateTotal = (products) => {
  return products.reduce((acc, current) => acc + (current.qty * current.price), 0);
}

const CartContainer = () => {
  const [data, setData] = useState(initialData);


  const handelQtyChange = (id, amount) => {
    let updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + amount
        }
      }
      else {
        return item
      }
    });
    setData(updatedData);
  }

  return (
    <div className="container">
      <div className="heading">
        <h3>Cart</h3>
      </div>
      <div className="cartItemDiv">
        {data.map((item) => (
          <CartItem
            key={item.id}
            label={item.name}
            price={item.price}
            qty={item.qty}
            handelQtyChange={handelQtyChange}
            id={item.id}
          />
        ))}
      </div>
      <div className="total">
        <Total total={calculateTotal(data)} />
      </div>
    </div>
  );
};

export default CartContainer;
