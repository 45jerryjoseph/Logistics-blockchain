import React from "react";
import { Footer } from "../components/footer";
import SupplierNav from "./Navigation";
import HeroCarousel from "../components/carousel";
import SupCards from "../components/SupCards";

export default function Supplier() {
  let cards = [{title:"Check Tenders"}, {title:"Manage Storage"}, {title:"Request Funds"}]
  let name = "Kemsa";
  return (
    <div>
      <SupplierNav />
      <div className="h-50 w-100"><HeroCarousel/></div>
      <HeroCarousel/>
      <SupCards cards={cards}/>
      <Footer />
    </div>
  );
}
