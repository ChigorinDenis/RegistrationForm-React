import React, { useState } from 'react';

function CustomSelect(props) {
  const { options, placeholder } = props;
  const [ initialValue, setInitialValue ] = useState('');
  const [ show, onShow ] = useState(false);
  const handleChangeValue = (value) => {
    setInitialValue(value);
    onShow(false);
  };

  return (
    <div className="custom-select">
      <input
        type="text"
        value={initialValue}
        onClick={() => onShow(!show)}
        placeholder={placeholder}
      />
      {show && <ul className="option-box">
        {
          options.map((lang, id) => (
            <li key={id} onClick={() => handleChangeValue(lang)}>{lang}</li>
          ))
        }
      </ul>
      }
    </div>
  );
}

export default CustomSelect;
