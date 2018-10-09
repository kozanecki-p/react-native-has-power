import React from 'react';
import PropTypes from 'prop-types';

const PetChoiceDisplay = ({ pets }) => (
  <div className='pets-container'>
    {pets.map((petUrl, i) => (
      <img src={petUrl} key={i} alt='Some cute pet' />
    ))}
  </div>
);

PetChoiceDisplay.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.string
  )
};

export default PetChoiceDisplay;
