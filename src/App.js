import React, { useState } from "react";
import Header from "./components/Header";
import FormSearch from "./components/FormSearch";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <FormSearch />
        </div>

      </div>
    </>
  );
};

export default App;