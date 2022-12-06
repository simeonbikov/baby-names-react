import ListOfNames from "./components/ListOfNames";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ListOfNames list={babyNamesData} />
      </div>
    </div>
  );
}

export default App;
