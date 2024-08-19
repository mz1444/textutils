import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function DismissibleAlert({ type, message, onDismiss }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onDismiss) {
        onDismiss();
      }
    }, 2000); // Auto-dismiss after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onDismiss]);

  if (!visible) return null;

  const alertStyle = {
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '5px',
    position: 'relative',
    border: '1px solid transparent',
    backgroundColor: {
      success: '#d4edda',
      danger: '#f8d7da',
      warning: '#fff3cd',
      info: '#d1ecf1',
    }[type],
    color: {
      success: '#155724',
      danger: '#721c24',
      warning: '#856404',
      info: '#0c5460',
    }[type],
    borderColor: {
      success: '#c3e6cb',
      danger: '#f5c6cb',
      warning: '#ffeeba',
      info: '#bee5eb',
    }[type],
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: alertStyle.color,
  };

  return (
    <div style={alertStyle}>
      <span>{message}</span>
      <button style={closeButtonStyle} onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
}

DismissibleAlert.propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
};

export default DismissibleAlert;
