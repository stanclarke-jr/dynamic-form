/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import FormTemplate from './FormTemplate';

const EmployeeForm = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState(null);
  const [defaultDept, setDefaultDept] = useState('');

  const initialEmployeeState = {
    name: '',
    is_employee: '',
    departments: defaultDept,
  };

  const [employeeData, setEmployeeData] = useState(initialEmployeeState);

  const { form_title, fields } = formData ?? {};

  useEffect(() => {
    const fetchForm = async () => {
      const response = await fetch(
        '/api/forms/employee_form/get_employee_form'
      );
      const form = await response.json();
      setFormData(form.data);
    };

    fetchForm().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchDepartment = async () => {
      const response = await fetch(
        '/api/forms/employee_form/get_default_department'
      );
      const department = await response.json();
      setDefaultDept(department?.data);
      if (defaultDept.length)
        setEmployeeData({ ...employeeData, departments: defaultDept });
    };

    fetchDepartment().catch(console.error);
  }, [defaultDept]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/forms/employee_form/submit_employee', {
      method: 'POST',
      body: JSON.stringify(employeeData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        const { success } = jsonData;
        success
          ? setMessage('Employee sumbitted successfully!')
          : setMessage('Something went wrong :(');
        setEmployeeData(initialEmployeeState);
        handleReset();
        console.log(message);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach((input) => {
      input.value = '';
      input.checked = false;
    });
    const departments = document.querySelectorAll('#departments');
    departments[0][0].selected = true;
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <FormTemplate
      title={form_title}
      fields={fields}
      defaultDept={defaultDept}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default EmployeeForm;
