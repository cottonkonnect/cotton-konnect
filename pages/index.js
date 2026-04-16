import Script from "next/script";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const exhibitionDate = new Date("2026-04-11T10:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = exhibitionDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { name: "Maroon Festive Suit", image: "/p1.jpg", price: "₹2199" },
    { name: "Blue Cotton Kurta", image: "/p2.jpg", price: "₹1199" },
    { name: "Green Ethnic Set", image: "/p3.jpg", price: "₹2499" },
    { name: "Modern Co-ord Set", image: "/p4.jpg", price: "₹1899" },
  ];

  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div style={{ fontFamily: "Georgia, serif", background: "#f5efe6" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", padding: "30px" }}>
          <h1 style={{ fontSize: "40px", color: "#bfa46f" }}>Cotton Konnect</h1>
          <p style={{ letterSpacing: "2px" }}>LETS EXPERIENCE A NEW WAY OF SHOPPING</p>
        </div>

        {/* HERO BANNER */}
        <div style={{ textAlign: "center" }}>
          <img src="/p1.jpg" style={{ width: "90%", borderRadius: "10px" }} alt="Hero" />
        </div>

        {/* COUNTDOWN */}
        <div style={{ textAlign: "center", margin: "30px", fontSize: "20px" }}>
          {timeLeft.days !== undefined
            ? `Exhibition in ${timeLeft.days} days ${timeLeft.hours} hours`
            : "Exhibition has started!"}
        </div>

        {/* PRODUCTS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}>
          {products.map((p, i) => (
            <div key={i} style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <img src={p.image} style={{ width: "100%" }} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <select id={`size-${i}`}>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <br /><br />
              <button
                onClick={() => {
                  const size = document.getElementById(`size-${i}`).value;
                  window.open(
                    `https://wa.me/919082780235?text=I want ${p.name} Size ${size}`
                  );
                }}
              >
                Order on WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* INSTAGRAM */}
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2>Follow Us on Instagram</h2>
          <div
            className="elfsight-app-63a4bd68-25c1-4cd8-9fab-17e05369e6bc"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* CONTACT */}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h3>Visit Us</h3>
          <p>901 Laxmi baug estate, phadke road, Dombivli east 421201</p>
        </div>

        {/* BOOK EXHIBITION */}
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Book Exhibition Visit</h2>
          <form action="https://formspree.io/f/your-id" method="POST">
            <input placeholder="Your Name" name="name" required /><br /><br />
            <input placeholder="Phone Number" name="phone" required /><br /><br />
            <button type="submit">Book Slot</button>
          </form>
        </div>

      </div>
    </>
  );
}
