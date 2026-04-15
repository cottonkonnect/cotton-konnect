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
      image: "https://via.placeholder.com/300",
      price: "₹2199",
    },
    {
      name: "Blue Printed Kurta",
      image: "https://via.placeholder.com/300",
      price: "₹1199",
    },
  ];

  return (
    <div style={{ fontFamily: "serif", background: "#f8f5f0", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Cotton Konnect</h1>
      <p style={{ textAlign: "center" }}>
        LETS EXPERIENCE A NEW WAY OF SHOPPING
      </p>

      <div style={{ textAlign: "center", margin: "20px" }}>
        Exhibition in {timeLeft.days}d {timeLeft.hours}h
      </div>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={p.image} width="200" />
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <a
              href={`https://wa.me/919082780235?text=I want ${p.name}`}
              target="_blank"
            >
              <button>Order on WhatsApp</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
