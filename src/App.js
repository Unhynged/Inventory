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
  const title = "This is my title.";
  const showTitle = false;

    return (
      <div>
        
        <h1>{showTitle ? title : "No Title."} Inventory System</h1>
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
