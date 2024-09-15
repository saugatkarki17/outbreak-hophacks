const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const outbreakRoutes = require('./routes/outbreakRoutes');
const outbreakRoutesFlu = require('./routes/outbreakRoutesFlu');
const outbreakRoutesEbola = require('./routes/outbreakRoutesEbola');
const outbreakRoutesDengue = require('./routes/outbreakRoutesDengue');
const outbreakRoutesMeasles = require('./routes/outbreakRoutesMeasles');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// Calling APIs
app.use('/api/outbreaks', outbreakRoutes);
app.use('/api/flu-outbreaks', outbreakRoutesFlu);
app.use('/api/Ebola-outbreaks', outbreakRoutesEbola);
app.use('/api/Dengue-outbreaks', outbreakRoutesDengue);
app.use('/api/Measles-outbreaks', outbreakRoutesMeasles);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
