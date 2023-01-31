// import './App.css';
// import Form from './components/Form';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Products from './components/Products';
// import ProductList from './components/ProductList';

// function App() {
//   return (
//     <div className="App">
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Form />}></Route>
//           <Route path="/product/" element={<Products />}></Route>
//         </Routes>
//       </BrowserRouter> */}
//       {/* <Form /> */}
//       <ProductList />
//       {/* <Products /> */}
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Views/Main';
import Detail from './Views/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={(routeProps) => <Main {...routeProps} />} />
        <Route path="product/:id" render={(routeProps) => <Detail {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}
export default App;

