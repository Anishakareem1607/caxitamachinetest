const Flight=require('../Model/flightSchema')

const addFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json({ message: 'Flight added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addFlight, getFlights };
