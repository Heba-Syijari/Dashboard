import "./App.css";
import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
