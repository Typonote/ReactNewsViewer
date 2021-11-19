import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:category" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
