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
    { name: "Maroon Festive Suit", image: "/p1.png",  price: "₹2199" },
    { name: "Blue Cotton Kurta",   image: "/p2.jpeg", price: "₹1199" },
    { name: "Green Ethnic Set",    image: "/p3.jpeg", price: "₹2499" },
    { name: "Modern Co-ord Set",   image: "/p4.jpeg", price: "₹1899" },
  ];

  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div style={{ fontFamily: "Georgia, serif", background: "#f5efe6", paddingBottom: "80px" }}>

        {/* HEADER — small logo only */}
        <div style={{ textAlign: "center", padding: "20px 30px 8px" }}>
          <img
            src="/logo.png"
            alt="Cotton Konnect"
            style={{ width: "72px", height: "auto" }}
          />
          <p style={{ letterSpacing: "2px", fontSize: "11px", color: "#888", margin: "6px 0 0" }}>
            LETS EXPERIENCE A NEW WAY OF SHOPPING
          </p>
        </div>

        {/* COUNTDOWN */}
        <div style={{ textAlign: "center", margin: "10px 0 24px", fontSize: "15px", color: "#999" }}>
          {timeLeft.days !== undefined
            ? `Exhibition in ${timeLeft.days} days ${timeLeft.hours} hours`
            : "Exhibition has started!"}
        </div>

        {/* PRODUCTS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "0 20px"
        }}>
          {products.map((p, i) => (
            <div key={i} style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
            }}>
              <img src={p.image} style={{ width: "100%", borderRadius: "6px" }} alt={p.name} />
              <h3 style={{ margin: "12px 0 4px" }}>{p.name}</h3>
              <p style={{ color: "#bfa46f", fontWeight: "bold", margin: "4px 0 12px" }}>{p.price}</p>
              <select
                id={`size-${i}`}
                style={{ padding: "6px 12px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              >
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
                <option>3XL</option>
              </select>
              <br />
              <button
                onClick={() => {
                  const size = document.getElementById(`size-${i}`).value;
                  window.open(`https://wa.me/919082780235?text=I want ${p.name} Size ${size}`);
                }}
                style={{
                  marginTop: "8px",
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                🛒 Order on WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* INSTAGRAM */}
        <div style={{ textAlign: "center", padding: "40px 20px 20px" }}>
          <h2>Follow Us on Instagram</h2>
          <div
            className="elfsight-app-63a4bd68-25c1-4cd8-9fab-17e05369e6bc"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* CONTACT + GOOGLE MAP */}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h3>Visit Us</h3>
          <p>901 Laxmi Baug Estate, Phadke Road, Dombivli East 421201</p>
          <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "700px", margin: "16px auto 0" }}>
            <iframe
              src="https://maps.google.com/maps?q=Phadke+Road,+Dombivli+East,+Maharashtra+421201&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cotton Konnect Location"
            ></iframe>
          </div>
          <a
            href="https://maps.google.com/?q=Phadke+Road+Dombivli+East+421201"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "12px",
              color: "#bfa46f",
              fontWeight: "bold",
              textDecoration: "underline"
            }}
          >
            📍 Open in Google Maps
          </a>
        </div>

        {/* BOOK EXHIBITION */}
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <h2>Book Exhibition Visit</h2>
          <form action="https://formspree.io/f/your-id" method="POST">
            <input
              placeholder="Your Name"
              name="name"
              required
              style={{ padding: "8px 14px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", width: "260px", display: "block", margin: "0 auto 12px" }}
            />
            <input
              placeholder="Phone Number"
              name="phone"
              required
              style={{ padding: "8px 14px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", width: "260px", display: "block", margin: "0 auto 12px" }}
            />
            <button
              type="submit"
              style={{ background: "#bfa46f", color: "white", border: "none", padding: "10px 28px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Book Slot
            </button>
          </form>
        </div>

      </div>

      {/* WHATSAPP FLOATING CHAT ICON */}
      <a
        href="https://wa.me/919082780235"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="34" height="34" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.747-1.833l-.484-.287-5.003 1.194 1.216-4.875-.317-.501A13.233 13.233 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.561-.232.266-.465.299-.863.1-.398-.2-1.681-.619-3.203-1.975-1.184-1.055-1.983-2.357-2.216-2.755-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.778-.653-.672-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.855 1.627 4.121c.2.266 2.811 4.293 6.812 6.021.952.411 1.695.657 2.274.841.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.099-.166-.365-.266-.763-.465z"/>
        </svg>
      </a>
    </>
  );
}
