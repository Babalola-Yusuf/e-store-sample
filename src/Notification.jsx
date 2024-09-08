// src/components/Notification.jsx
import React from 'react';
import NotificationPortal from './NotificationPortal';

const Notification = ({ message, type = 'success' }) => (
  <NotificationPortal>
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 bg-white p-4 rounded shadow-lg border-l-4
        ${type === 'success' ? 'border-green-500' : ''}
        ${type === 'error' ? 'border-red-500' : ''}
        ${type === 'info' ? 'border-blue-500' : ''}
        ${type === 'warning' ? 'border-yellow-500' : ''}`}
    >
      <p className="text-sm">{message}</p>
    </div>
  </NotificationPortal>
);

export default Notification;
