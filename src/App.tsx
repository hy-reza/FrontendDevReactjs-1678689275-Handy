import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Detail } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
