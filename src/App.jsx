import "./App.css";
import "./index.css";
import Home from "./home";
import Create from "./create";
import Navbar from "./navbar";
import Login from "./login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  // const user1 = {
  //   userName: "esam",
  //   password: 1111,
  // };
  return (
    <div className="app">
      <div className="login">
        <input type="text" required />
        <input type="password" required />
      </div>
      <BrowserRouter>
        <Navbar />

        <div className="contact">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
