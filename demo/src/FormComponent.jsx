 import React from 'react';
import PropTypes from 'prop-types';

class FormComponent extends React.Component {
      render() {
    return <div>{this.props.message}</div>;
   }
 }

 FormComponent.propTypes = {
   message: PropTypes.string.isRequired,
 };

 export default FormComponent;
