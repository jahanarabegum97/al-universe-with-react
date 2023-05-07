import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <Header></Header>
      {/*ei ta k bole special children props */}
      
      <Card></Card>
    </>
  );
};

export default App;
