import Hero from "app/ui/Hero";
import Navbar from "./ui/Navbar";
import TextBoxBreak from "@/componentsTextBoxBreak";
import Features from "./ui/Features";
import Packages from "./ui/Packages";
import Footer from "./ui/Footer";






export default function page() {
    return (
      <>
     
      <Navbar />
      <Hero />
      <TextBoxBreak className="fill-motviolt-50"/>
      <Features />
      <Packages  />
      <Footer />
      </>
      
    )
  }
