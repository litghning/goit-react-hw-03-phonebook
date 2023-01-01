import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="InputId" className={css.Label}>
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={value}
        id="InputId"
        onChange={onChange}
        className={css.Input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};

export default Filter;