import React, { useEffect, useState } from 'react'
import Navigation from "./Navigation"
import { Footer } from './Footer';
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table';

export default function Supply({supply}) {
  return (
    <div>
      <Navigation />
      <div className="supply">
        <h2>title: {supply.title}</h2>
        <h2>Hospital: {supply.hospital}</h2>
        <h3>Sponsor: {supply.sponsor}</h3>
        <h3>Supplier: {supply.supplier}</h3>
        <h3>Supply Cost: {supply.supply_cost}</h3>
        <h3>Miscellaneous Costs: {supply.misc_cost}</h3>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Tender Supplies</Accordion.Header>
              <Accordion.Body>
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>type</th>
                      <th>quantity</th>
                      <th>cost</th>
                      <th>manufacturer</th>
                      <th>D.O.M</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tbody>
                    {supply.supplies.map((items, index) => {
                      const [item, setItem] = useState({});
                      useEffect(() => {
                        // let result = await getItem(items[0])
                        let result = {
                          name: "String",
                          cost: 20,
                          quantity: 10,
                          manufacturer: "String",
                          types: "String",
                          date_of_manufacture: "String",
                        };
                        setItem(result);
                      }, []);

                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.name}</td>
                          <td>{item.types}</td>
                          <td>{item.quantity}</td>
                          <td>{item.cost}</td>
                          <td>{item.manufacturer}</td>
                          <td>{item.date_of_manufacture}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Miscellaneous Items</Accordion.Header>
              <Accordion.Body>
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>cost</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tbody>
                    {supply.misc.map((items, index) => {
                      const [item, setItem] = useState({});
                      useEffect(() => {
                        // let result = await getItem(items[0])
                        let result = {
                          name: "String",
                          cost: 20,
                        };
                        setItem(result);
                      }, []);

                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.name}</td>
                          <td>{item.cost}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
