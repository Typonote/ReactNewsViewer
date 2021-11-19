import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return <Route path="/:category?" element={<NewsPage />} />;
}

export default App;
