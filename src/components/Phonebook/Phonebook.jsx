import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';


class Phonebook extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    this.setState({ id: nanoid() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.Form}>
        <label htmlFor="InputId" className={css.Label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            id="InputId"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={css.Input}
            required
          />
        </label>
        <label htmlFor="numberInputId" className={css.Label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id="numberInputId"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={css.Input}
            required
          />
        </label>
        <button type="submit" className={css.Submit}>
          Add contact
        </button>
      </form>
    );
  }
}



export default Phonebook;