import React, { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import SupAccordion from "./Accordion";
import Navigation from "./navigation";

export default function Manage() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("new")

  useEffect(() => {
    
  }, [type])
  
  return (
    <div>
      <Navigation />
      <div>
        <ListGroup horizontal>
          <ListGroup.Item action onClick={() => setType("new")}>
            New Tenders
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setType("pending")}>
            Pending
          </ListGroup.Item>
          <ListGroup.Item acttion onClick={() => setType("current")}>
            Current
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setType("completed")}>
            Completed
          </ListGroup.Item>
        </ListGroup>
      </div>

      <SupAccordion />
    </div>
  );
}
