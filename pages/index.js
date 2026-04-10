import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CottonKonnectLuxury() {
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
      image: "/mnt/data/ck1.png",
      price: "₹2199",
    },
    {
      name: "Blue Printed Kurta",
      image: "/mnt/data/ck2.jpeg",
      price: "₹1199",
    },
    {
      name: "Green Designer Set",
      image: "/mnt/data/ck3.jpeg",
      price: "₹2499",
    },
    {
      name: "Modern Co-ord",
      image: "/mnt/data/ck4.jpeg",
      price: "₹1999",
    },
  ];

  const sizes = ["M", "L", "XL", "2XL", "3XL"];

  return (
    <div className="bg-[#f8f5f0] text-gray-800 font-serif">

      {/* Header */}
      <header className="p-6 text-center">
        <img src="/mnt/data/Golden_emblem_with_Cotton_Konnect_logo.png" className="w-60 mx-auto" />
        <p className="mt-2 text-sm tracking-widest text-gray-600">
          LETS EXPERIENCE A NEW WAY OF SHOPPING
        </p>
      </header>

      {/* Real Banner */}
      <section className="relative h-[80vh]">
        <img
          src="/mnt/data/ck1.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Cotton Konnect</h1>
          <p className="mt-2">Premium Cotton Wear</p>
          <Button className="mt-4">Shop Now</Button>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-black text-white text-center p-4">
        Exhibition in {timeLeft.days}d {timeLeft.hours}h
      </section>

      {/* Products */}
      <section className="p-10 grid md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:scale-105 transition">
            <img src={p.image} className="h-64 w-full object-cover rounded-t-2xl" />
            <CardContent className="p-4 text-center">
              <h3>{p.name}</h3>
              <p className="font-semibold mt-1">{p.price}</p>

              {/* Size selector */}
              <select className="mt-2 w-full border p-2 rounded">
                {sizes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <a href={`https://wa.me/919082780235?text=I want ${p.name}`} target="_blank">
                <Button className="mt-3 w-full flex gap-2">
                  <MessageCircle size={16} /> Order Now
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Instagram Live Feed (connected) */}
      <section className="p-10 text-center">
        <h2 className="text-2xl mb-4">Instagram</h2>
        <iframe
          src="https://snapwidget.com/embed/1037266"
          className="w-full h-96 border-0"
        ></iframe>
      </section>

      {/* Booking */}
      <section className="p-10 text-center bg-[#efe7dc]">
        <h2 className="text-2xl mb-4">Book Appointment / Bulk Orders</h2>
        <a href="https://wa.me/919082780235?text=I want to book appointment" target="_blank">
          <Button>Book on WhatsApp</Button>
        </a>
      </section>

      <footer className="p-6 text-center text-sm">
        © Cotton Konnect | Premium Cotton Studio
      </footer>
    </div>
  );
}
