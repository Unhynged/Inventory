import { useState } from "react";
import styles from "./AddItem.module.css";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    }); // calling the addItem button pressed, then callback function that was passed to us in the props from app.js and then we're going to pass the name, type, price and brand (search filters/parameters) and we set the filters to be equal to whatever was passed to the callback function so this will change the state here. Then we have add item to data, this is the callback function we pass to our addItem.
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add a Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={addItemButtonPressed}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
