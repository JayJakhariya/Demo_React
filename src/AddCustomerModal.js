import React, { useState, useEffect } from 'react';
const AddCustomerModal=({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    customerNumber: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    username: '',
    status: 'Active',
  });
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        customerNumber: '',
        name: '',
        address: '',
        phone: '',
        email: '',
        username: '',
        status: 'Active',
      });
    }
  }, [initialData, open]);
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.customerNumber) newErrors.customerNumber = 'Customer Number is required.';
    if (!form.name) newErrors.name = 'Customer Name is required.';
    if (!form.address) newErrors.address = 'Customer Address is required.';
    if (!form.phone) newErrors.phone = 'Customer Phone Number is required.';
    if (!form.email) {
      newErrors.email = 'Customer Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.username) newErrors.username = 'Customer Username is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
    setForm({
      customerNumber: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      username: '',
      status: 'Active',
    });
    setErrors({});
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{initialData ? 'Edit Client' : 'Add Client'}</h3>
        <form onSubmit={handleSubmit} className="customer-form">
          <div>
            <label htmlFor="customerNumber">Customer Number:</label>
            <input
              id="customerNumber"
              name="customerNumber"
              value={form.customerNumber}
              onChange={handleChange}
              className={errors.customerNumber ? 'input-error' : ''}
              
            />
            {errors.customerNumber && <div className="error-message">{errors.customerNumber}</div>}
          </div>
          <div>
            <label htmlFor="name">Customer Name:</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
              
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="username">Customer Username:</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={errors.username ? 'input-error' : ''}
              
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>
          <div>
            <label htmlFor="address">Customer Address:</label>
            <input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className={errors.address ? 'input-error' : ''}
              
            />
            {errors.address && <div className="error-message">{errors.address}</div>}
          </div>
          <div>
            <label htmlFor="phone">Customer Phone Number:</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
              
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          <div>
            <label htmlFor="email">Customer Email:</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
              
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="submit">{initialData ? 'Update' : 'Create'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomerModal;
