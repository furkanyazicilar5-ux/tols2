const express = require('express');
const path = require('path');
const siparisRoute = require('./routes/siparisRoute');
const statusRoute = require('./routes/statusRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/siparis', siparisRoute);
app.use('/durum', statusRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
