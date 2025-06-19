import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';
import FlightSort from './components/FlightSort';

function App() {
  const [flights, setFlights] = useState([]);
  const [sortedFlights, setSortedFlights] = useState([]); 

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:5000/api/flights");
    setFlights(res.data);
    setSortedFlights(res.data); 
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Flight Search System</h2>
      <FlightForm onAdd={fetchFlights} />
      <FlightSort flights={flights} setSortedFlights={setSortedFlights} />
      <FlightList flights={sortedFlights} />
    </Container>
  );
}

export default App;
