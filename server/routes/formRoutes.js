const express = require('express');
const {
  getEmployeeForm,
  getDefaultDept,
  submitEmployee,
} = require('../controllers/employeeFormController');

const router = express.Router();

// ----- EMPLOYEE FORM ROUTES ----- //
router.route('/get_employee_form').get(getEmployeeForm);
router.route('/get_default_department').get(getDefaultDept);
router.route('/submit_employee').post(submitEmployee);

module.exports = router;
