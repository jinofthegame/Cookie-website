"use client"
import React from 'react';
import './styles.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <div className="menu-icon">Menu</div> {/* Replace with actual icon/dropdown */}
      <div className="logo">crumbl</div>
      <button className="order-now">Order Now</button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img src="path/to/featured-cookie.jpg" alt="Featured Cookie" /> 
      {/* Or implement a carousel here */}
      <button className="order-now">Order Now</button> {/* Hero order button */}
    </section>
  );
}

function WeeklyFlavors() {
  const cookies = [
    { image: 'path/to/cookie1.jpg', name: 'Chocolate Chip' },
    { image: 'path/to/cookie2.jpg', name: 'Oatmeal Raisin' },
    // ... more cookies
  ];

  return (
    <section className="weekly-flavors">
      <h2>Weekly Flavors</h2>
      <div className="cookie-grid">
        {cookies.map((cookie, index) => (
          <div key={index} className="cookie-item"> {/* Important: Add a key */}
            <img src={cookie.image} alt={cookie.name} />
            <h3>{cookie.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="week-date">Week of Jan 28 - Feb 2</div>
      {/* Other footer content */}
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <WeeklyFlavors />
      <Footer />
    </div>
  );
}

export default App;