import React, { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import SupAccordion from "./Accordion";
import Navigation from "./navigation";

export default function Manage() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("new")

  useEffect(() => {
    
  }, [type])
  
  const updateItems = (type) => {
    setItems(type);
  };
  return (
    <div>
      <Navigation />
      <div>
        <ListGroup horizontal>
          <ListGroup.Item action onClick={() => updateItems(type)}>
            New Tenders
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => updateItems(type)}>
            Applied
          </ListGroup.Item>
          <ListGroup.Item acttion onClick={() => updateItems(type)}>
            Current
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => updateItems(type)}>
            Completed
          </ListGroup.Item>
        </ListGroup>
      </div>

      <SupAccordion />
    </div>
  );
}
