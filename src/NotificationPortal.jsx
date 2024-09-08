import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const NotificationPortal = ({ children }) => {
  useEffect(() => {
    let notificationRoot = document.getElementById('notification-root');
    if (!notificationRoot) {
      notificationRoot = document.createElement('div');
      notificationRoot.id = 'notification-root';
      document.body.appendChild(notificationRoot);
    }
  }, []);

  const notificationRoot = document.getElementById('notification-root');

  if (!notificationRoot) {
    console.error('Notification root element not found');
    return null;
  }

  console.log('Rendering notification:', children); // Check what is being passed to the portal

  return ReactDOM.createPortal(children, notificationRoot);
};

export default NotificationPortal;
