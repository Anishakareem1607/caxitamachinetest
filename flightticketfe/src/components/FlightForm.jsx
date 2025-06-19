
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const FlightForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    flightName: '',
    flightNumber: '',
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    arrivalDate: '',
    departureTime: '',
    arrivalTime: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price) 
    };

    console.log("Submitting form:", payload);

    try {
      await axios.post("http://localhost:5000/api/flights", payload);
      alert("Flight added successfully!");
      setForm({
        flightName: '',
        flightNumber: '',
        departureCity: '',
        arrivalCity: '',
        departureDate: '',
        arrivalDate: '',
        departureTime: '',
        arrivalTime: '',
        price: ''
      });
      onAdd(); 
    } catch (err) {
      console.error("Error submitting flight:", err.response?.data || err.message);
      alert("Failed to add flight. Check console for error details.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Flight Name</Form.Label>
            <Form.Control
              name="flightName"
              placeholder="Flight Name"
              required
              value={form.flightName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Flight Number</Form.Label>
            <Form.Control
              name="flightNumber"
              placeholder="Flight Number"
              required
              value={form.flightNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Form.Group>
            <Form.Label>Departure City</Form.Label>
            <Form.Control
              name="departureCity"
              placeholder="Departure City"
              required
              pattern="[A-Za-z\s]+"
              value={form.departureCity}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Arrival City</Form.Label>
            <Form.Control
              name="arrivalCity"
              placeholder="Arrival City"
              required
              pattern="[A-Za-z\s]+"
              value={form.arrivalCity}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Form.Group>
            <Form.Label>Departure Date</Form.Label>
            <Form.Control
              type="date"
              name="departureDate"
              required
              value={form.departureDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Arrival Date</Form.Label>
            <Form.Control
              type="date"
              name="arrivalDate"
              required
              value={form.arrivalDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Form.Group>
            <Form.Label>Departure Time</Form.Label>
            <Form.Control
              type="time"
              name="departureTime"
              required
              value={form.departureTime}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control
              type="time"
              name="arrivalTime"
              required
              value={form.arrivalTime}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              required
              min="1"
              value={form.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="primary" className="mt-3">Add Flight</Button>
    </Form>
  );
};

export default FlightForm;
