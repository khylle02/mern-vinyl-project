import {Container } from "react-bootstrap";
import Header from "./components/Header";
import React  from 'react';
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const products = [
  {
    _id: '1',
    name: 'ALL TIME LOW Don’t Panic: It’s Longer Now Orange Vinyl',
    image: '/images/ALL-TIME-LOW-Dont-Panic-Its-Longer-Now-Orange-Vinyl.webp',
    description:
      'This is a legit, original, officially licensed merchandise All Time Low purchased directly from the band’s record label, online store, or licensed distributor.',
    brand: 'Hopeless Records',
    category: 'Pop-Punk',
    price: 595.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'ALL TIME LOW Last Young Renegade (Young Renegades Version) Teal Vinyl',
    image: '/images/ALL-TIME-LOW-Last-Young-Renegade-Alternate-Cover-Teal-Vinyl.webp',
    description:
      'This is a legit, original, officially licensed merchandise All Time Low purchased directly from the band’s record label, online store, or licensed distributor.',
    brand: 'Hopeless Records',
    category: 'Pop-Punk',
    price: 895.00,
    countInStock: 1,
    rating: 4.5,
    numReviews: 12,
  }
];



const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen products={products} />
      </Container>
      </main>
      <Footer />
    </>
  )
};

export default App