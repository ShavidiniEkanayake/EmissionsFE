import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route excat path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
