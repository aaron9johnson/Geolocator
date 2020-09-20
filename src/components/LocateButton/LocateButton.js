import React from 'react';
import PropTypes from 'prop-types';

export default class LocateButton extends React.Component {
  static propTypes = {
    /**
     * If true, disable all interactions for this component.
     */
    disabled: PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Text to display inside the button
     */
    title: PropTypes.string.isRequired
  };
  render() {
    const {
      disabled,
      onClick,
      title
    } = this.props;
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={styles.button}>
        <p style={styles.text}>{title}</p>
      </button>
    );
  }
}
// Material design blue from https://material.google.com/style/color.html#color-color-palette
const defaultBlue = '#2196F3';
const styles = {
  button: {
    backgroundColor: defaultBlue,
    borderRadius: 2
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500'
  }
};
