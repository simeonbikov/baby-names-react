import ListOfNames from "./components/ListOfNames";
import SearchInput from "./components/SearchInput";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";



function App() {

  return (
    <div className="App">
      <div className="container">
        <SearchInput />
        <ListOfNames list={babyNamesData} />
      </div>
    </div>
  );
}

export default App;