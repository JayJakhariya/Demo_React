import React from 'react';
import './AddCustomerModal.css';

function DeleteCustomerModal({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Delete Customer</h3>
        <p>Are you sure you want to delete this customer?</p>
        <div className="modal-actions">
          <button onClick={onConfirm} style={{ background: '#e53935', color: '#fff' }}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCustomerModal;
