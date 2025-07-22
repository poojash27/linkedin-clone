import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, iconColor, onClick }) {
  return (
    <div className="inputOption" onClick={onClick}> {/* ✅ Add onClick here */}
      <Icon style={{ color: iconColor }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
