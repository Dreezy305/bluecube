import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.scss";
import "./App.css";
import LeftSideBar from "./components/leftSideBar";
import TopBar from "./components/topBar";

function App() {
  return (
    <div className="d-flex flex-row justify-content-start App">
      <LeftSideBar />
      <TopBar />
    </div>
  );
}

export default App;
