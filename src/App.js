// react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import { Home, AddActor, EditActor, Test } from "./pages";

// components
import { Header, Footer } from "./components";

// styles
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddActor />} />
          <Route path="/edit/:id" element={<EditActor />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
