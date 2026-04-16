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
    {
      name: "Maroon Festive Suit",
      image: "/p1.jpg",
      price: "₹2199",
    },
    {
      name: "Blue Cotton Kurta",
      image: "/p2.jpg",
      price: "₹1199",
    },
    {
      name: "Green Ethnic Set",
      image: "/p3.jpg",
      price: "₹2499",
    },
    {
      name: "Modern Co-ord Set",
      image: "/p4.jpg",
      price: "₹1899",
    },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f5efe6" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1 style={{ fontSize: "40px", color: "#bfa46f" }}>
          Cotton Konnect
        </h1>
        <p style={{ letterSpacing: "2px" }}>
          LETS EXPERIENCE A NEW WAY OF SHOPPING
        </p>
      </div>

      {/* HERO BANNER */}
      <div style={{ textAlign: "center" }}>
        <img src="/p1.jpg" style={{ width: "90%", borderRadius: "10px" }} />
      </div>

      {/* COUNTDOWN */}
      <div style={{ textAlign: "center", margin: "30px", fontSize: "20px" }}>
        Exhibition in {timeLeft.days} days {timeLeft.hours} hours
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
            <img src={p.image} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <a
              href={`https://wa.me/919082780235?text=I want ${p.name}`}
              target="_blank"
            >
      <select id={`size-${i}`}>
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>
</select>

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
            </a>
          </div>
        ))}
      </div>

      {/* INSTAGRAM */}
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Follow Us on Instagram</h2>
<div class="elfsight-app-XXXX"></div>
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </div>

      {/* CONTACT */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h3>Visit Us</h3>
        <p>
          901 Laxmi baug estate, phadke road,  
          Dombivli east 421201
        </p>
      </div>

    </div>
  );
}
