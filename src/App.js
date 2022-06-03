import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem></AddItem>
    </div>
  );
}

function Info() {
  return (
    <div>
      <h1>Inventory System</h1>
      <p>Manage your stuff.</p>
    </div>
  );
}

function AddItem() {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form"/>
      <Info />
    </form>
  );
}

export default App;
