import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'Components/Button';
import { plants } from 'Utils/plants';

const Plants = () => (
  <div>
    {plants.map((plant) => (
      <Button>
        <Link to={`/plant/${plant.id}`} />
      </Button>
    ))}
  </div>
);

Plants.propTypes = {

};

export default Plants;
