const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 8000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// ----- ROUTES ----- //
app.use('/api/forms/employee_form', formRoutes);

app.listen(process.env.PORT || port, () => {
  console.log(`Hello World app listening on port ${port}`);
});
