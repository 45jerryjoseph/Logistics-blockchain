import React from "react";
import { Footer } from "../components/Footer";
import SupplierNav from "./Navigation";
import HeroCarousel from "../components/carousel";
import SupCards from "../components/SupCards";

export default function Supplier() {
  let cards = [
    { title: "Check Tenders", link: "/tenders" },
    { title: "Manage Storage", link: "/supplier/manage" },
    { title: "Request Funds", link: "/funds" },
  ];
  let name = "Kemsa";
  return (
    <div>
      <SupplierNav />
      <div className="h-50 w-100"><HeroCarousel/></div>
      <SupCards cards={cards}/>
      <Footer />
    </div>
  );
}
