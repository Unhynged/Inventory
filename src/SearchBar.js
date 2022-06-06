import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.callback({ name: name, price: price, type: type, brand: brand });
    };

    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field">Name:</label>
                    <input 
                        id="name-field" 
                        type="text" 
                        value={name} 
                        onChange={ (e) => setName(e.target.value)}
                    />
                <label htmlFor="price-field">Max Price:</label>
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
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;

// The idea here is to create a search bar that has a few different fields. One field to look for the name of a product, one for maximum price and a few other things that can be done. 
// <button type="button">Search</button> made a regular button rather than type="Submit" which will help avoid refreshing the page.
//
// Controlled Components
// What we want to do is actually have some state for each of these fields. Ideally what we want to happen is when we press the search button we're able to get access to whatever is inside of all of these fields. We want to return that to app.js where we could render some different data depending on what we searched for. 
//
// Onchange Event
// Whenever we start updating this input field, there actually an event that will be triggered called onChange. So if you say onChange you can make this equal to a function. onChange={ (e) => }    (e) is the event that occurred that cause this onChange thing to be triggered and (e) will allow us to access what the user typed into this input field. onChange={ (e) => setName(e.target.value)} 
// This is what you do when you want to update the input field that is using state to control it's value, you put an onChange and then you take a parameter (e), (e) will automatically be passed to this from the on change event handler. Then we will call setName and we will update our state to be equal to whatever the user typed in which we're getting from e.target.value
//
// Onclick Event
// Add const searchButtonPressed function. Then call on the function in <button type="button" onClick={searchButtonPressed}>Search</button> and then display the <p>Name: {name}</p> <p>Max Price: {price}</p> <p>Type: {type}</p> <p>Brand: {brand}</p> and such below the form element.
//
// Updating Parent Components State
//
//
//