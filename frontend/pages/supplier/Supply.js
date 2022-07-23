import React from 'react'
import Navigation from ".Navigation"
import { Footer } from '../components/Footer';

export default function Supply({supply}) {
  return (
    <div>
      <Navigation />
      <div className="supply">
        <h1>Id: {supply.id}</h1>
        <h1>Hospital: {supply.hospital}</h1>
        <h3>Sponsor: {supply.sponsor}</h3>
        <h3>Supplier: {supply.supplier}</h3>
        <h3>Supply Cost: {supply.supply_cost}</h3>
        <h3>Miscellaneous Costs: {supply.misc_cost}</h3>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Tender Supplies</Accordion.Header>
              <Accordion.Body>
                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Miscellaneous Items</Accordion.Header>
              <Accordion.Body>
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
