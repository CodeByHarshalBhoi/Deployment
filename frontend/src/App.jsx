import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
