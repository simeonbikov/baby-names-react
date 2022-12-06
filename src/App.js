import ListOfNames from "./components/ListOfNames";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ListOfNames list={ babyNamesData } />
    </div>
  );
}

export default App;
