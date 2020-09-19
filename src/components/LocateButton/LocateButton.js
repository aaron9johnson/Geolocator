// import React from 'react'
// import { Button, StyleSheet, View } from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';

export default class LocateButton extends React.Component {
  static propTypes = {
    /**
     * Color of the text (iOS), or background color of the button (Android)
     */
    color: PropTypes.string,
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
      color,
      disabled,
      onClick,
      title
    } = this.props;
    const buttonStyles = [ styles.button ];
    const textStyles = [ styles.text ];

    if (color) {
      buttonStyles.push({ backgroundColor: color });
    }

    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
    }

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={buttonStyles}>
        <p style={textStyles}>{title}</p>
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
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
};
