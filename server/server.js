const express = require('express');
const morgan = require('morgan');
const {
  submitEmployee,
  getDefaultDept,
  getEmployeeForm,
} = require('./controllers/formControllers');
const app = express();
const port = 8000;

app.use(morgan('tiny'));
app.use(express.json());

app.get('/get_employee_form', getEmployeeForm);
app.get('/get_default_department', getDefaultDept);
app.post('/submit_employee', submitEmployee);

app.listen(port, () => {
  console.log(`Hello World app listening on port ${port}`);
});
