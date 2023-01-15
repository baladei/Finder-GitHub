import { Outlet } from "react-router-dom"
import { Search } from "./components/Search";


function App() {

  return (
    <div className="App">
      <h2>GitHub Finder</h2>
      <Outlet />
    </div>
  );
}

export default App
