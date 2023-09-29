const express = require('express');
const app = express();
app.use(express.json());

// Dummy data in JSON
const doctors = [
  { id: 1, name: 'Dr. Mohammed', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Afthab', specialty: 'Dermatologist' },
  { id: 3, name: 'Dr. Reva', specialty: 'Dermatologist' },
  { id: 4, name: 'Dr. Johnson', specialty: 'Cardiologist' },
];

const appointments = [];

app.get('/', (req, res) => {
  res.send('Outpatient Appointment System');
});

// to get all the doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// to get doc by id
app.get('/api/doctors/:doctorId', (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const doctor = doctors.find((doc) => doc.id === doctorId);
  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ error: 'Doctor not found' });
  }
});

// appointments
app.post('/api/appointments', (req, res) => {
  const { doctorId, appointmentTime } = req.body;

  const doctor = doctors.find((doc) => doc.id === doctorId);
  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }


  const appointment = {
    doctorId,
    appointmentTime,
    status: 'booked',
  };
  appointments.push(appointment);

  res.status(201).json(appointment);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
