import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Views/Main";
import Detail from "./Views/Detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/products/"
          render={(routeProps) => <Main {...routeProps} />}
        />
        <Route
          path="products/:id"
          render={(routeProps) => <Detail {...routeProps} />}
        />
      </BrowserRouter>
    </div>
  );
}
export default App;
