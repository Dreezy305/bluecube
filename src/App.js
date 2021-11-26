import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.scss";
import LeftSideBar from "./components/leftSideBar";

function App() {
  return (
    <div className="d-flex flex-row justify-content-between">
      <LeftSideBar />
    </div>
  );
}

export default App;
