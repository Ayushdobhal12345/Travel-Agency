import React, { useState, useEffect } from "react";
import './App.css';

import { saveUserData, saveBookingData } from './firebase'; // handle popup and booking form

import logo from './assets/Logo.png';
import destination1 from './assets/Logo1.png'; // Example image
import destination2 from './assets/menu-1.png'; // Example image
import destination3 from './assets/menu-2.png'; // Example image
import heroImage1 from './assets/home.png'; // Example hero image
import heroImage2 from './assets/menu-2.png'; // Example hero image
import heroImage3 from './assets/menu-3.png'; // Example hero image
import callIcon from './assets/phone.webp'; // Your call icon
import whatsappIcon from './assets/watsaap.png'; // Your WhatsApp icon

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);

  const heroImages = [heroImage1, heroImage2, heroImage3];
  const destinations = [destination1, destination2, destination3];
  
  // Show popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  // Change the Hero section background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle form submission for the popup form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      saveUserData(name, phone); // Save user data
      alert("Your data has been submitted!");
      setShowPopup(false); // Close the popup after submission
    } else {
      alert("Please fill in both fields.");
    }
  };

  // Handle form submission for the contact form (booking data)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactName && contactPhone && contactMessage) {
      saveBookingData(contactName, contactPhone, contactMessage); // Save booking data
      alert("Your message has been submitted!");
      setContactName('');
      setContactPhone('');
      setContactMessage('');
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Change Destination image
  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="App">
      {/* Header Section with Navigation */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Surgeet Travel Logo" className="logo-image" />
            <div>Surgeet Travels</div>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Destinations</a></li> {/* New link */}
            <li style={{backgroundColor:"red",paddingTop:"7px", marginTop:"-5px",borderRadius:"4px"}}><a href="#contact">Book Now</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Changing Background */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}>
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

      {/* Destinations Section with Arrow Navigation */}
      <section id="destinations" className="destinations">
        <h2>Our Popular Destinations</h2>
        <div className="destination-slider">
          <button className="arrow left" onClick={prevDestination}>&#8249;</button>
          <div className="destination">
            <img src={destinations[currentDestination]} alt="Destination" />
          </div>
          <button className="arrow right" onClick={nextDestination}>&#8250;</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <form onSubmit={handleContactSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={contactName} 
              onChange={(e) => setContactName(e.target.value)} 
              required 
            />
            <input 
              type="number" 
              placeholder="Your Phone no" 
              value={contactPhone} 
              onChange={(e) => setContactPhone(e.target.value)} 
              required 
            />
            <textarea 
              placeholder="Enter your queries here" 
              value={contactMessage} 
              onChange={(e) => setContactMessage(e.target.value)} 
              required 
            />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </section>

      {/* Popup with Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button style={{backgroundColor:"transparent", color:"black"}} className="close-btn" onClick={handleClosePopup}>&#10006;</button>
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
                type="number" 
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

      {/* Fixed Icons */}
      <div className="fixed-icons">
        <a href="tel:+919536534140" className="fixed-icon call">
          <img src={callIcon} alt="Call Us" />
        </a>
        <a href="https://wa.me/9536534140" className="fixed-icon whatsapp">
          <img src={whatsappIcon} alt="Chat on WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default App;
