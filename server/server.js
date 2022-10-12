const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {
  submitEmployee,
  getDefaultDept,
  getEmployeeForm,
} = require('./controllers/formControllers');
const app = express();
const port = 8000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => res.send('API service for our dynamic form!'));
app.get('/get_employee_form', getEmployeeForm);
app.get('/get_default_department', getDefaultDept);
app.post('/submit_employee', submitEmployee);

app.listen(process.env.PORT || port, () => {
  console.log(`Hello World app listening on port ${port}`);
});
