'use client'

import React from "react";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Footer/>
    </div>

  );
}
