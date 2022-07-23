import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import SupAccordion from "./Accordion";
import Navigation from "./Navigation";
import ListGroup from "react-bootstrap/ListGroup";

export default function Manage() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("new")

  useEffect(() => {
    
  }, [type])
  
  return (
    <div>
      <Navigation />
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

      </div>
      <SupAccordion />
    </div>
  );
}
