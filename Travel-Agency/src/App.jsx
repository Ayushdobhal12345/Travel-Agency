import React, { useState, useEffect } from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { saveUserData, saveBookingData } from './firebase'; // handle popup and booking form

import logo from './assets/Logo.png';
import destination1 from './assets/Baku.jpg'; // Example image
import destination2 from './assets/Bali.jpg'; // Example image
import destination3 from './assets/Thailand.jpg'; // Example image

import destination4 from './assets/Goa.jpg'; // Example image
import destination5 from './assets/Goa.jpg'; // Example image

import destination6 from './assets/Rajasthan.jpg'; // Example image
import destination7 from './assets/Srinagar.jpg'; // Example image
import destination8 from './assets/Singapore.jpg'; // Example image

import destination9 from './assets/Vietnam.jpg'; // Example image
import destination10 from './assets/Vietnam.jpg'; // Example image

import destination11 from './assets/Odisha.jpg'; // Example image
import destination12 from './assets/Andaman.jpg'; // Example image
import destination13 from './assets/Kerala.jpg'; // Example image


import heroImage1 from './assets/home.png'; // Example hero image
import heroImage2 from './assets/badrinath.jpg'; // Example hero image
import heroImage3 from './assets/kedarnath.jpg'; // Example hero image
import heroImage4 from './assets/8905891.jpg'; // Example hero image
import heroImage5 from './assets/9378822.jpg'; // Example hero image
import callIcon from './assets/phone.jpg'; // Your call icon
import PhoneIcon from './assets/phone.webp'; // Your call icon for header
import whatsappIcon from './assets/watsaap.png'; // Your WhatsApp icon
import emailIcon from './assets/mail.webp'; // Email icon (example)
import instaIcon from './assets/insta.webp'; // Instagram icon (example)

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
   const [currentDestination, setCurrentDestination] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  const destinations = [
    { src: destination1, alt: "Baku", location: "Baku, Azerbaijan" },
    { src: destination2, alt: "Bali", location: "Bali, Indonesia" },
    { src: destination3, alt: "Thailand", location: "Thailand" },
    { src: destination4, alt: "Goa", location: "Goa, India" },
    { src: destination5, alt: "Goa", location: "Goa, India" },
    { src: destination6, alt: "Rajasthan", location: "Rajasthan, India" },
    { src: destination7, alt: "Srinagar", location: "Srinagar, India" },
    { src: destination8, alt: "Singapore", location: "Singapore" },
    { src: destination9, alt: "Vietnam", location: "Vietnam" },
    { src: destination10, alt: "Vietnam", location: "Vietnam" },
    { src: destination11, alt: "Odisha", location: "Odisha, India" },
    { src: destination12, alt: "Andaman", location: "Andaman, India" },
    { src: destination13, alt: "Kerala", location: "Kerala, India" }
  ];
  
  
  
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

 // Auto slide for Destinations
 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDestination(prev => (prev + 1) % Math.ceil(destinations.length / 3));
  }, 5000);

  return () => clearInterval(interval);
}, [destinations.length]);



const destinationsPerPage = 3; // Show 3 images at a time

  const nextDestination = () => {
    if (currentDestination < Math.ceil(destinations.length / destinationsPerPage) - 1) {
      setCurrentDestination(currentDestination + 1);
    }
  };

  const prevDestination = () => {
    if (currentDestination > 0) {
      setCurrentDestination(currentDestination - 1);
    }
  };


  return (
    <div className="App">
      {/* New Navbar with Contact Information */}
      <header className="top-header">
        <div className="top-navbar">
          <div className="contact-info">
            <a href="tel:+919536534140" className="contact-item">
              <img src={PhoneIcon} alt="Phone" />
              <span>+91 95365 34140</span>
            </a>
            <a href="mailto:info@surgeettravel.com" className="contact-item">
              <img src={emailIcon} alt="Email" />
              <span>info@surgeettravel.com</span>
            </a>
            <a href="https://www.instagram.com/surgeettravel.in" className="contact-item">
              <img src={instaIcon} alt="Instagram" />
              <span>@surgeettravel</span>
            </a>
          </div>
        </div>
      </header>

      {/* Existing Navbar with Logo */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Surgeet Travel Logo" className="logo-image" />
            <div>Surgeet Travels</div>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Destinations</a></li> {/* New link */}
            <li style={{backgroundColor:"red", paddingTop:"7px", marginTop:"-5px", borderRadius:"4px"}}><a href="#contact">Book Now</a></li>
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

      {/* Destinations Section with Slider */}
      <section id="destinations" className="destinations">
  <h2>Our Popular Destinations</h2>
  <div className="destination-slider">
    <div
      className="slider-images"
      style={{
        transform: `translateX(-${(currentDestination * 100) / destinationsPerPage}%)`,
        transition: "transform 20s ease-in-out",
      }}
    >
      {destinations.map((destination, index) => (
        <div className="destination-item" key={index}>
          <img src={destination.src} alt={destination.alt} className="destination-img" />
          <div className="destination-location">
            <center><h3>{destination.location}</h3></center>
          </div>
        </div>
      ))}
    </div>

    {/* Manual Navigation arrows */}
    <button className="arrow left" onClick={prevDestination} disabled={currentDestination === 0}>
      &#8249;
    </button>
    <button className="arrow right" onClick={nextDestination} disabled={currentDestination >= Math.ceil(destinations.length / destinationsPerPage) - 1}>
      &#8250;
    </button>
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
      
      <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <div className="footer-column">
            <div className="footer-content">
              <a href="/contact">
                <img
                  width="170"
                  height="170"
                  src="https://safarnamaventures.com/wp-content/uploads/2023/01/icon-headphone.png"
                  alt="Support"
                />
              </a>
              <h2>
                <a href="/contact">Need any support for tour & travels?</a>
              </h2>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-content">
              <a href="/tours">
                <img
                  width="170"
                  height="167"
                  src="https://safarnamaventures.com/wp-content/uploads/2023/01/icon-travel.png"
                  alt="Tours"
                />
              </a>
              <h2>
                <a href="/tours">Ready to Get Started With Vacations!</a>
              </h2>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-logo">
            <a href="/" title="Home">
              <img src={logo} alt="Safarnama Logo" />
            </a>
            <p>
              One of the most reputed travel agencies in Dehradun with 2+ years of business experience. We provide
              Customized Holidays, Sightseeing Services, Transport, and Hotel Booking Deals with Discounts.
            </p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <br></br>

            <ul>
              <li>
                <a href="#about">About Us</a>

              </li>
              <li>
                <a href="/spiritual-tour">Spiritual Tour</a>
              </li>
              <li>
                <a href="#destinations">Destination</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-tour-types">
            <h2>Tour Types</h2>
            <br></br>
            <ul>
              <li><a href="/honeymoon-tours">Honeymoon Tours</a></li>
              <li><a href="/corporate-tours">Corporate Tours</a></li>
              <li><a href="/group-tour">Group Tour</a></li>
              <li><a href="/weekend-getaways">Weekend Getaways</a></li>
              <li><a href="/backpacking-trips">Backpacking Trips</a></li>
              <li><a href="/spiritual-tour">Spiritual Tour</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <br></br>

            <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+91 9536534140</p>
            </div>
            <div className="contact-item">     
           <FontAwesomeIcon icon={faEnvelope} />
              <p>surgeettravel2004@gmail.com</p>
            </div>
            <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Raipur, Dehradun, Uttarakhand 248008</p>
            </div>
          </div>
        </div>

        <div className="footer-social-icons">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com/surgeettravel.in" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/surgeettravel.in" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com/surgeettravel.in" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Copyrights by Surjeet Travel. All Rights Reserved</p>
        </div>
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
