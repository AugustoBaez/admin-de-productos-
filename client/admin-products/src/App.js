import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //usa el latest para funcionar
import Product from "./components/Product";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/:id" element={<Product />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
