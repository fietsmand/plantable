import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Plant from './Plant';
import Plants from './Plants';

const Views = () => {
  const routes = [
    {

    },
  ];
  return (
    <Router>
      <Route path="/plant/:id" component={Plant} />
      <Route path="/plants" component={Plants} />
      {/* <Route path="/" component={() => <Redirect to="/plants" />} /> */}
    </Router>
  );
};

Views.propTypes = {

};

export default Views;
