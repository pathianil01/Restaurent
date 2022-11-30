import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Components/home";
import QueryRoute from "./Components/queryRoute";
import QueryExecution from "./Components/queryExecution";
import ExecutionRoute from "./Components/ExecutionRoute";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/query" element={<QueryRoute />}>
          {" "}
        </Route>
        <Route path="/queryExecution" element={<QueryExecution />}>
          {" "}
        </Route>
        <Route path="/Execution" element={<ExecutionRoute />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
