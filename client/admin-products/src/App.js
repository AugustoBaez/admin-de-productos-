import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //usa el latest para funcionar
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
