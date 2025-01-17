import React, { useState, useEffect } from "react";
import './App.css';
import { saveToFirebase } from './firebase';
import logo from './assets/Logo.png';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Show popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      saveToFirebase(name, phone);
      alert("Your data has been submitted!");
      setShowPopup(false); // Close the popup after submission
    } else {
      alert("Please fill in both fields.");
    }
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {/* Header Section with Navigation */}
      <header className="header">
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Surgeet Travel Logo" className="logo-image" /> {/* Add the logo image */}
      <div>Surgeet Travels</div>
    </div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Surgeet Travel Agency</h1>
          <p>Explore the World with Our Expert Travel Solutions</p>
          <a href="#services" className="btn">Discover Services</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Surgeet Travel Agency</h2>
          <p>
            Surgeet Travel Agency is your perfect partner to explore the world! 
            We offer personalized travel experiences, guided tours, and tailored packages that suit all types of travelers. 
            Whether you're traveling for leisure or business, we ensure a seamless and unforgettable journey.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Flight Tickets</h3>
            <p>We provide the best deals on flight tickets, ensuring you travel with comfort and convenience at the best prices.</p>
          </div>
          <div className="service">
            <h3>Train Tickets & Cab/Bus Booking</h3>
            <p>Book train tickets, cabs, and buses seamlessly through our platform for a comfortable journey.</p>
          </div>
          <div className="service">
            <h3>Hotel & Accommodation</h3>
            <p>We offer a wide range of hotel options, from budget to luxury, to suit your accommodation needs.</p>
          </div>
          <div className="service">
            <h3>Tourist Visa Assistance</h3>
            <p>Get expert assistance for obtaining tourist visas for various countries with our hassle-free services.</p>
          </div>
          <div className="service">
            <h3>Travel Insurance</h3>
            <p>Protect your trip with our reliable travel insurance packages, covering medical emergencies and trip cancellations.</p>
          </div>
          <div className="service">
            <h3>Passport Services</h3>
            <p>We assist with passport application, renewal, and other passport-related services to make your travel stress-free.</p>
          </div>
          <div className="service">
            <h3>Holiday Packages</h3>
            <p>Choose from a variety of exciting holiday packages that cater to different travel interests and budgets.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Popup with Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button style={{backgroundColor:"transparent", color:"black"}} className="close-btn" onClick={handleClosePopup}>&#10006;</button> {/* Cross button */}
            <h3>Enter your details</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <input 
                type="text" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Surgeet Travel Agency | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
