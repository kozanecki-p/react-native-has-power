import React, { Component } from 'react';

import PetChoiceForm from './PetChoiceForm';
import PetChoiceDisplay from './PetChoiceDisplay';
import { getPets } from '../../services/shibeServices';
import { TYPE_OPTIONS } from '../../services/constants';

export default class PetSelector extends Component {
  constructor (props) {
    super(props);
    this.state={
      pets: [],
      formDisabled: false
    };
  }

  render () {
    const { formDisabled, pets } = this.state;

    return (
      <div>
        PET SELECTOR
        <PetChoiceForm onSubmit={this.handleFormSubmit} typeOptions={TYPE_OPTIONS} disabled={formDisabled}/>
        <PetChoiceDisplay pets={pets} />
      </div>
    )
  }

  handleFormSubmit = (data) => {
    this.setState({ formDisabled: true });
    getPets(data)
      .then(resp => this.setState({ pets: resp, formDisabled: false }))
      .catch(err => this.setState({ formDisabled: false }))
  }
}
