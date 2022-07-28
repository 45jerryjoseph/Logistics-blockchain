import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Footer } from "./Footer";
import SupplierNav from "./Navigation";
import TenderTable from "./TenderTable"

export default function Manage() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("new")
  const tenders = [
    {
      num: 1,
      title: "Tender Document For the Supply of Laboratory Commodities ",
      date: "27/08/2022",
    },
    {
      num: 2,
      title:
        "Tender Document For the Supply of Health Products (Topical, Disinfectants, Antiseptics & Oral Liquid",
      date: "12/08/2022",
    },
    {
      num: 3,
      title:
        "Tender Document For the Supply of Health Products",
      date: "21/08/2022",
    },
  ];

  useEffect(() => {
    
  }, [type])
  
  return (
    <div>
      <SupplierNav />
      <div className="sup-tab">
        <ListGroup horizontal>
          <ListGroup.Item action onClick={() => setType("new")}>
            New Tenders
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setType("pending")}>
            Pending
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setType("current")}>
            Current
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setType("completed")}>
            Completed
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="sup-list">
        <TenderTable tenders={tenders}/>
      </div>
      <Footer />
    </div>
  );
}
