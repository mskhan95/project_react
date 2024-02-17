import Home from "./Components/Home_Page/Home";
import Navbar from "./Components/Navbar_Page/Navbar";
import AllRoute from "./Components/Routes/AllRoute";
import "./App.css";
import Banner from "./Components/Banner_Page/Banner";

function App() {
  return (
    <div className="MainPage">
      <Navbar />
      <Banner />
      <AllRoute />
    </div>
  );
}

export default App;
