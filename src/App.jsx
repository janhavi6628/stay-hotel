import { useState } from "react";
import "./App.css";

const rooms = [
  {
    name: "Deluxe Room",
    price: 2500,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    description: "Relax in a comfortable room designed for a peaceful stay.",
  },
  {
    name: "Premium Room",
    price: 3500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    description: "Enjoy elegant interiors, extra space and modern comfort.",
  },
  {
    name: "Family Suite",
    price: 5000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    description: "A spacious room for families and group travellers.",
  },
];

function App() {
  const [selectedRoom, setSelectedRoom] = useState("Deluxe Room");
  const [message, setMessage] = useState("");

  function handleBooking(event) {
    event.preventDefault();
    setMessage(
      `Thank you, ${event.target.name.value}! Your request for ${selectedRoom} has been prepared. Please contact the hotel to confirm availability.`
    );
  }

  return (
    <div>
      <header className="navbar">
        <a href="#home" className="logo">Stay<span>Hotel</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#booking" className="nav-button">Book Now</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO STAY HOTEL</p>
          <h1>Your Comfort.<br />Our Priority.</h1>
          <p>
            Discover comfortable rooms, warm hospitality and a relaxing
            stay designed around you.
          </p>
          <a href="#rooms" className="button">Explore Our Rooms</a>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">A BETTER WAY TO STAY</p>
        <h2>Feel at Home, Wherever You Go</h2>
        <p>
          Enjoy welcoming spaces, thoughtful facilities and comfortable
          rooms that make every visit special.
        </p>
      </section>

      <section className="section rooms-section" id="rooms">
        <div className="section-title">
          <p className="eyebrow">OUR ACCOMMODATION</p>
          <h2>Choose Your Perfect Room</h2>
          <p>Find the right room for your next stay.</p>
        </div>

        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <img src={room.image} alt={room.name} />
              <div className="room-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className="price">
                  ₹{room.price.toLocaleString("en-IN")}
                  <span> / night</span>
                </div>
                <button
                  className="room-button"
                  onClick={() => {
                    setSelectedRoom(room.name);
                    document.getElementById("booking").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Select Room →
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="price-note">Sample prices — replace with your actual hotel rates.</p>
      </section>

      <section className="section facilities" id="facilities">
        <div className="section-title">
          <p className="eyebrow">YOUR COMFORT MATTERS</p>
          <h2>Hotel Facilities</h2>
        </div>
        <div className="facility-grid">
          <div className="facility-card"><span>📶</span><h3>Free Wi-Fi</h3><p>Stay connected during your visit.</p></div>
          <div className="facility-card"><span>❄️</span><h3>Air Conditioning</h3><p>Relax in a comfortable room.</p></div>
          <div className="facility-card"><span>🛎️</span><h3>Guest Support</h3><p>Friendly assistance for your stay.</p></div>
          <div className="facility-card"><span>🅿️</span><h3>Parking</h3><p>Ask us about parking availability.</p></div>
        </div>
      </section>

      <section className="section booking-section" id="booking">
        <div className="booking-info">
          <p className="eyebrow">PLAN YOUR VISIT</p>
          <h2>Book Your Stay</h2>
          <p>Fill in your details to prepare a booking request.</p>
          <p className="booking-note">
            Please contact the hotel directly to confirm room availability
            and your reservation.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleBooking}>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Your email" required />

          <label htmlFor="room">Choose Room</label>
          <select
            id="room"
            value={selectedRoom}
            onChange={(event) => setSelectedRoom(event.target.value)}
          >
            {rooms.map((room) => (
              <option key={room.name} value={room.name}>{room.name}</option>
            ))}
          </select>

          <div className="date-row">
            <div>
              <label htmlFor="checkin">Check-in Date</label>
              <input id="checkin" type="date" required />
            </div>
            <div>
              <label htmlFor="checkout">Check-out Date</label>
              <input id="checkout" type="date" required />
            </div>
          </div>

          <label htmlFor="guests">Number of Guests</label>
          <select id="guests">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>

          <button type="submit" className="button submit-button">
            Send Booking Request
          </button>

          {message && <p className="success-message">{message}</p>}
          <p className="price-note">Demo only — this form does not confirm a real reservation.</p>
        </form>
      </section>

      <footer className="footer">
        <div>
          <a href="#home" className="logo footer-logo">Stay<span>Hotel</span></a>
          <p>Comfortable stays. Memorable experiences.</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Stay Hotel. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;