import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RANDOM_TYPE } from '../../services/constants';

class PetChoiceForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      amount: 1,
      type: this.props.typeOptions[0] ? this.props.typeOptions[0].value : ''
    }
  }

  render () {
    const { amount, type } = this.state;
    const { typeOptions, disabled } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="amount">
          Ilość zdjęć do wyświetlenia
          <input name="amount" min="1" max="10" type="number" value={amount}  onChange={this.handleChange} required />
        </label>

        <label htmlFor="type">
          Rodzaj zwierząt do wyświetlenia
          <select name="type" value={type} onChange={this.handleChange} required>
            {typeOptions.map(typeItem => (
              <option value={typeItem.value} key={typeItem.value}>{typeItem.label}</option>
            ))}
            <option value={RANDOM_TYPE.value} key={RANDOM_TYPE.value}>{RANDOM_TYPE.label}</option>
          </select>
        </label>

        <input type="submit" value={disabled ? "Ładowanie danych" : "Szukaj"}  disabled={disabled} />
      </form>
    );
  }

  handleChange = (event) => {
    let value;
    if (event.target.type === 'number') {
      const min = parseInt(event.target.min);
      const max = parseInt(event.target.max);
      value = parseInt(event.target.value)
      if (min > value || max < value) {
        return
      }
    }

    const newState = {};
    newState[event.target.name] = value || event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      amount: parseInt(this.state.amount),
      type: this.state.type
    });
  }
}

PetChoiceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  typeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  disabled: PropTypes.bool
};

export default PetChoiceForm;
