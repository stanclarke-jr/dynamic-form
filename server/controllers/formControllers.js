const data = require('../data/employee-data.json');

const getEmployeeForm = (request, response) => {
  data
    ? response.status(200).json({
        status: 200,
        data,
      })
    : response.status(404).json({ message: 'Not employee data found' });
};

const getDefaultDept = (request, response) => {
  const { fields } = data;
  return fields.map((field) => {
    const filteredField = field.options?.filter(
      // Change default Department here
      (option) => option.value === 'HR'
    );
    // TODO: failure response instead of null
    filteredField
      ? response.status(200).json({ data: filteredField[0].value })
      : null;
  });
};

const submitEmployee = (request, response) => {
  const data = request.body;
  console.log(data);
  data
    ? response.status(200).json({ success: 'true' })
    : response.status(400).json({ message: 'An error occured' });
};

module.exports = { getEmployeeForm, getDefaultDept, submitEmployee };
