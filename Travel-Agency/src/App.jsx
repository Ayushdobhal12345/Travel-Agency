import React, { useState, useEffect } from "react";
import './App.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing FontAwesome icons
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { saveUserData, saveBookingData } from './firebase'; // handle popup and booking form

import logo from './assets/Logo.png';
import callIcon from './assets/phone.jpg'; // Your call icon
import PhoneIcon from './assets/phone.webp'; // Your call icon for header
import whatsappIcon from './assets/watsaap.png'; // Your WhatsApp icon
import emailIcon from './assets/mail.webp'; // Email icon (example)
import instaIcon from './assets/insta.webp'; // Instagram icon (example)


import heroImage2 from './assets/badrinath.jpg'; // Example hero image
import heroImage3 from './assets/kedarnath.jpg'; // Example hero image
import heroImage4 from './assets/8905891.jpg'; // Example hero image
import heroImage5 from './assets/9378822.jpg'; // Example hero image

import Whychoose from './assets/Whychoose.png';

import service1 from './assets/Flights.jpg'; // Example image
import service2 from './assets/Train.jpg'; // Example image
import service3 from './assets/Bus.jpg'; // Example image
import service4 from './assets/Hotel & Stay.jpg'; // Example image
import service5 from './assets/Travel Visa.jpg'; // Example image
import service6 from './assets/Travel Insurance.jpg'; // Example image
import service7 from './assets/Passport.jpg'; // Example image
import service8 from './assets/Holiday Vaccations.jpg'; // Example image


import destination1 from './assets/Baku.jpg'; // Example image
import destination2 from './assets/Bali.jpg'; // Example image
import destination3 from './assets/Thailand.jpg'; // Example image
import destination4 from './assets/Goa.jpg'; // Example image
import destination5 from './assets/Dubai.jpg'; // Example image
import destination6 from './assets/Rajasthan.jpg'; // Example image
import destination7 from './assets/Srinagar.jpg'; // Example image
import destination8 from './assets/Thailand.jpg'; // Example image
import destination9 from './assets/Singapore.jpg'; // Example image
import destination10 from './assets/Vietnam.jpg'; // Example image
import destination11 from './assets/Odisha.jpg'; // Example image
import destination12 from './assets/Andaman.jpg'; // Example image
import destination13 from './assets/Kerala.jpg'; // Example image


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [destination7, heroImage2, heroImage3, heroImage4, heroImage5];

 
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,  // Speed of slide transition in milliseconds
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768, // For tablets
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  
  const destinations = [
    { id: 1, image: destination1, alt: "Baku", location: "Baku" },
    { id: 2, image: destination2, alt: "Bali", location: "Bali"},
    { id: 3, image: destination3, alt: "Thailand", location: "Thailand" },
    { id: 4, image: destination4, alt: "Goa", location: "Goa" },
    { id: 5, image: destination5, alt: "Dubai", location: "Dubai" },
    { id: 6, image: destination6, alt: "Rajasthan", location: "Rajasthan"},
    { id: 7, image: destination7, alt: "Srinagar", location: "Srinagar"  },
    { id: 8, image: destination8, alt: "Thailand", location: "Thailand"},
    { id: 9, image: destination9, alt: "Singapore", location: "Singapore"},
    { id: 10, image: destination10, alt: "Vietnam", location: "Vietnam" },
    { id: 11, image: destination11, alt: "Odisha", location: "Odisha" },
    { id: 12, image: destination12, alt: "Andaman", location: "Andaman"},
    { id: 13, image: destination13, alt: "Kerala", location: "Kerala" }
  ];


  
  // Change the Hero section background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  
  // Show popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    
    return () => clearTimeout(timer);
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

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
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

  

 
  return (
    <div className="App">
      {/* New Navbar with Contact Information */}
      <header className="top-header">
        <div className="top-navbar">
          <div className="contact-info">
            <a href="tel:+919536534140" className="contact-item">
              <img src={PhoneIcon} alt="Phone" />
              <span>+91 9259247172</span>
            </a>
            <a href="mailto:info@surgeettravel.com" className="contact-item">
              <img src={emailIcon} alt="Email" />
              <span>surgeettravel2004@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/surgeettravel.in" className="contact-item">
              <img src={instaIcon} alt="Instagram" />
              <span>@surgeettravel.in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Existing Navbar with Logo */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Surgeet Travel Logo" className="logo-image" />
            <div>Surgeet Travel</div>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#ourdestination">Destinations</a></li> 
            <li><a href="#contact-container1">Contact Us</a></li> 
            <li style={{backgroundColor:"red", paddingTop:"7px", marginTop:"-5px", borderRadius:"4px"}}><a href="#contact">Book Now</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Changing Background */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` ,loading:"lazy" }}>
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
{/* why choose Section */}

<section id="why-choose">
  <h2>Why Choose Surgeet Travel..?</h2>
  <div id="why-choose-img">
    <img src={Whychoose}alt="Why Choose Surgeet Travel" loading="lazy"/>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="services">
      <h2>Our Services</h2>
  <div className="services-content">
   
    <div className="service">
      <img src={service1 }alt="Flight Tickets" className="service-image" loading="lazy" />
      <h3>Flight Tickets Booking</h3>
      <p>We provide the best deals on flight tickets, ensuring you travel with comfort and convenience at the best prices.</p>
    </div>

    <div className="service">
      <img src={service2 }alt="Train Tickets " className="service-image" loading="lazy" />
      <h3>Train Tickets Booking</h3>
      <p>Book train tickets seamlessly through our platform for a comfortable journey.</p>
    </div>
    <div className="service">
      <img src={service3 }alt=" Cab/Bus Booking" className="service-image"loading="lazy" />
      <h3> Cab/Bus Booking</h3>
      <p>Book cabs, and buses seamlessly through our platform for a comfortable journey.</p>
    </div>

    <div className="service">
      <img src={service4 } alt="Hotel & Accommodation" className="service-image" loading="lazy"/>
      <h3>Hotel & Accommodation</h3>
      <p>We offer a wide range of hotel options, from budget to luxury, to suit your accommodation needs.</p>
    </div>

    <div className="service">
      <img src={service5 } alt="Tourist Visa Assistance" className="service-image"loading="lazy"/>
      <h3>Tourist Visa Assistance</h3>
      <p>Get expert assistance for obtaining tourist visas for various countries with our hassle-free services.</p>
    </div>

    <div className="service">
      <img src={service6 } alt="Travel Insurance" className="service-image"loading="lazy" />
      <h3>Travel Insurance</h3>
      <p>Protect your trip with our reliable travel insurance packages, covering medical emergencies and trip cancellations.</p>
    </div>

    <div className="service">
      <img src={service7 } alt="Passport Services" className="service-image"loading="lazy" />
      <h3>Passport Services</h3>
      <p>We assist with passport application, renewal, and other passport-related services to make your travel stress-free.</p>
    </div>

    <div className="service">
      <img src={service8 } alt="Holiday Packages" className="service-image"loading="lazy" />
      <h3>Holiday Packages</h3>
      <p>Choose from a variety of exciting holiday packages that cater to different travel interests and budgets.</p>
    </div>
  </div>
</section>



      {/* Destinations Section with Slider */}
      <section id="ourdestination" className="ourdestination">
      <div className="destinations">
        <h2>Our Destinations</h2>
        <br />
        <Slider {...settings}>
          {destinations.map((destination) => (
            <div key={destination.id} className="destination">
              <img
                src={destination.image}
                alt={destination.alt}
                className="destination-image" loading="lazy"
              />
              <div style={{ color: 'black', fontSize: '20px',backgroundColor:"grey", borderRadius:"8px" }}>
                {destination.location}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>

    {/* contact us */}
  
    <section  id="contact-container1"  className="contact-container1">
      <div className="contact-column">
        <div className="contact-widget-wrap">
          <div className="contact-heading">
            <div className="contact-content">
              {/* Sub-title with icon */}
              <div className="contact-sub-title">
                <span className="contact-tagline">
                  <FaPhoneAlt /> Contact Us
                </span>
              </div>

              {/* Title */}
              <h2 className="contact-title">
                <span>Ready to experience our top-notch services?</span>
              </h2>

              {/* Description */}
              <div className="contact-desc">
                Don’t hesitate to reach out to us!
              </div>

              {/* Address, Email, and Phone Number Section */}
              <div className="contact-details">
                {/* Address Section */}
                <div className="contact-item1 address1">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="contact-info">
                    <strong>Our Office</strong>
                    <p>
                      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                      Raipur, Dehradun, Uttarakhand 248008
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="contact-item1 email1">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-info">
                    <strong>Email Us</strong>
                    <p>
                      <a href="mailto:surgeettravel2004@gmail.com">surgeettravel2004@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="contact-item1 phone1">
                  <FaPhoneAlt className="contact-icon" />
                  <div className="contact-info">
                    <strong>Call Us</strong>
                    <p>
                      <a href="tel:+1234567890">+919259247172</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* booking section with contact name */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Book Now </h2>
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
              <img src={logo} alt="Surgeet Travels" />
            </a>
            <p>
              One of the most reputed travel agencies in Dehradun with 2+ years of business experience. We provide
              Customized Holiday Packages,Tickets, Sightseeing Services, Transportation, and Hotel Booking Deals with Discounts.
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
              <li><a href="#">Honeymoon Tours</a></li>
              <li><a href="#">Corporate Tours</a></li>
              <li><a href="#">Group Tour</a></li>
              <li><a href="#">Weekend Getaways</a></li>
              <li><a href="#">Backpacking Trips</a></li>
              <li><a href="#">Spiritual Tour</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <br></br>

            <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+919259247172</p>
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
          <p>© 2025 Copyrights by Surgeet Travel. All Rights Reserved</p>
        </div>
      </div>
    </footer>
     

      {/* Fixed Icons */}
      <div className="fixed-icons">
        <a href="tel:+919259247172" className="fixed-icon call">
          <img src={callIcon} alt="Call Us" />
        </a>
        <a href="https://wa.me/+919259247172" className="fixed-icon whatsapp">
          <img src={whatsappIcon} alt="Chat on WhatsApp" />
        </a>
      </div>

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
    </div>

    
  );
  
}

export default App;
