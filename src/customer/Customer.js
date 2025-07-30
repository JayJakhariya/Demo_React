import React, { useState } from 'react';
import './Customer.css';
import DeleteCustomerModal from './DeleteCustomerModal';
import AddCustomerModal from './AddCustomerModal';

const initialCustomers = [
  {
    id: 1,
    customerNumber: 'CUST001',
    name: 'John Doe',
    address: '123 Main St',
    phone: '+91 9876543210',
    email: 'john@example.com',
    username: 'johnny',
    status: 'Active'
  },
  {
    id: 2,
    customerNumber: 'CUST002',
    name: 'Jane Smith',
    address: '456 Park Ave',
    phone: '+91 9123456780',
    email: 'jane@example.com',
    username: 'janeS',
    status: 'Inactive'
  }
];

function Customer() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);




  const handleAdd = () => {
    setModalData(null);
    setShowModal(true);
  };

  const handleEdit = (customer) => {
    setModalData(customer);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    setCustomers(customers.filter(c => c.id !== deleteId));
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const handleModalSubmit = (data) => {
    if (data.id) {
      setCustomers(customers.map(c => c.id === data.id ? { ...data } : c));
    } else {
      const newId = customers.length ? Math.max(...customers.map(c => c.id)) + 1 : 1;
      setCustomers([...customers, { ...data, id: newId }]);
    }
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div className="customer-container">
      <div className="customer-header">
        <h2>Customers</h2>
        <button className="add-btn" onClick={handleAdd}>Add Customer</button>
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer Number</th>
            <th>Customer Name</th>
            <th>Username</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center', color: '#888' }}>No customers found.</td>
            </tr>
          ) : (
            customers.map((c) => (
              <tr key={c.id}>
                <td>{c.customerNumber}</td>
                <td>{c.name}</td>
                <td>{c.username}</td>
                <td>{c.address}</td>
                <td>{c.email}</td>
                <td>
                  <span className={c.status === 'Active' ? 'status-active' : 'status-inactive'}>{c.status}</span>
                </td>
                <td>{c.phone}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(c)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <AddCustomerModal
        open={showModal}
        onClose={() => { setShowModal(false); setModalData(null); }}
        onSubmit={handleModalSubmit}
        initialData={modalData}
      />
      <DeleteCustomerModal
        open={deleteId !== null}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />

    </div>
  );
}

export default Customer;
