import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/main" element={<ProductList />}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <Form />
      <ProductList /> */}
    </div>
  );
}

export default App;
