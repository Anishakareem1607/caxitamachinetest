import React from 'react';
import { Table } from 'react-bootstrap';

const calculateDuration = (dDate, dTime, aDate, aTime) => {
  const start = new Date(`${dDate}T${dTime}`);
  const end = new Date(`${aDate}T${aTime}`);
  const diffMs = end - start;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
};

const FlightList = ({ flights }) => (
  <Table bordered hover>
    <thead>
      <tr>
        <th>Flight</th>
        <th>From → To</th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Duration</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {flights.map((f, i) => (
        <tr key={i}>
          <td>{f.flightName} ({f.flightNumber})</td>
          <td>{f.departureCity} → {f.arrivalCity}</td>
          <td>{f.departureDate} {f.departureTime}</td>
          <td>{f.arrivalDate} {f.arrivalTime}</td>
          <td>{calculateDuration(f.departureDate, f.departureTime, f.arrivalDate, f.arrivalTime)}</td>
          <td>₹{f.price}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default FlightList;
