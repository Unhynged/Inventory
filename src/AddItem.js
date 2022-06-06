import { useState } from "react";

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
            brand: brand 
        }); // calling the addItem button pressed, then callback function that was passed to us in the props from app.js and then we're going to pass the name, type, price and brand (search filters/parameters) and we set the filters to be equal to whatever was passed to the callback function so this will change the state here. Then we have add item to data, this is the callback function we pass to our addItem.
            setName("");
            setPrice(0);
            setType("");
            setBrand("");
    };

    return (
        <div>
            <h2>Add a Item</h2>
            <form>
                <label htmlFor="name-field">Name:</label>
                    <input 
                        id="name-field" 
                        type="text" 
                        value={name} 
                        onChange={ (e) => setName(e.target.value)}
                    />
                <label htmlFor="price-field">Price:</label>
                    <input 
                        id="price-field" 
                        type="number" 
                        value={price}
                        onChange={ (e) => setPrice(e.target.value)}
                    />
                <label htmlFor="type-field">Type:</label>
                    <input 
                        id="type-field" 
                        type="text" 
                        value={type}
                        onChange={ (e) => setType(e.target.value)}
                    />
                <label htmlFor="brand-field">Brand:</label>
                    <input 
                        id="brand-field" 
                        type="text" 
                        value={brand}
                        onChange={ (e) => setBrand(e.target.value)}
                    />
                <button type="button" onClick={addItemButtonPressed}>Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;