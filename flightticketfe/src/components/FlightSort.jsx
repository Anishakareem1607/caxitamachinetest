import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const calculateDuration = (f) => {
  const start = new Date(`${f.departureDate}T${f.departureTime}`);
  const end = new Date(`${f.arrivalDate}T${f.arrivalTime}`);
  return end - start;
};

const FlightSort = ({ flights, setSortedFlights }) => {
  const handleSort = (type) => {
    let sorted = [...flights];
    if (type === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (type === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (type === "duration-asc") sorted.sort((a, b) => calculateDuration(a) - calculateDuration(b));
    if (type === "duration-desc") sorted.sort((a, b) => calculateDuration(b) - calculateDuration(a));
    if (type === "name-asc") sorted.sort((a, b) => a.flightName.localeCompare(b.flightName));
    if (type === "name-desc") sorted.sort((a, b) => b.flightName.localeCompare(a.flightName));
    setSortedFlights(sorted);
  };

  return (
    <ButtonGroup className="mb-3">
      <Button onClick={() => handleSort("price-asc")}> Price ↑</Button>
      <Button onClick={() => handleSort("price-desc")}>Price ↓</Button>
      <Button onClick={() => handleSort("duration-asc")}>Duration ↑</Button>
      <Button onClick={() => handleSort("duration-desc")}> Duration ↓</Button>
      <Button onClick={() => handleSort("name-asc")}>A-Z</Button>
      <Button onClick={() => handleSort("name-desc")}>Z-A</Button>
    </ButtonGroup>
  );
};

export default FlightSort;
