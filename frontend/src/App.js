import {Container } from "react-bootstrap";
import Header from "./components/Header";
import React  from 'react';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
      <h1>Welcome to Vinyl Shop</h1>
      </main>
      <Footer />
    </>
  )
};

export default App