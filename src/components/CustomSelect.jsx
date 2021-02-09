import React, { useState } from 'react';

function CustomSelect(props) {
  const { options, placeholder } = props;
  const [initialValue, setInitialValue] = useState('');
  const [show, onShow] = useState(false);
  const handleChangeValue = (value) => {
    setInitialValue(value);
    onShow(false);
  };

  return (
    <div className='custom-select'>
      <input
        type='text'
        value={initialValue}
        onClick={() => onShow(!show)}
        placeholder={placeholder}
      />
      {show && <div className='option-box'>
        {
          options.map((lang) => (
            <div
              key={lang}
              onClick={() => handleChangeValue(lang)}
              className='option'
              role='list'
            >
              {lang}
            </div>
          ))
        }
      </div>}
    </div>
  );
}

export default CustomSelect;
