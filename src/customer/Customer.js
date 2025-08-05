import React, { useState } from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
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
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customers</h2>
        <Button variant="primary" onClick={handleAdd}>
          Add Customer
        </Button>
      </div>
      
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>Customer Number</th>
            <th>Customer Name</th>
            <th>Username</th>
            <th>Address</th>
            <th>Email</th>
            <th>Status</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No customers found.
              </td>
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
                  <Badge bg={c.status === 'Active' ? 'success' : 'secondary'}>
                    {c.status}
                  </Badge>
                </td>
                <td>{c.phone}</td>
                <td>
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2"
                    onClick={() => handleEdit(c)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <AddCustomerModal
        open={showModal}
        onClose={() => { setShowModal(false); setModalData(null); }}
        onSubmit={handleModalSubmit}
        initialData={modalData}
      />
      <DeleteCustomerModal
        show={deleteId !== null}
        handleClose={cancelDelete}
        handleDelete={confirmDelete}
      />
    </div>
  );
}

export default Customer;