import React from "react";
import Creates from "./components/Creates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";


const App = () => {
  return (
    <><div className="container">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Creates />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

    </>

  );




};
export default App;