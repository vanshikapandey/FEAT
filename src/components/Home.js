import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Courses from "./Courses";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      {/* <OurStory /> */}
      <WhatWeDo />
      <Courses />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
