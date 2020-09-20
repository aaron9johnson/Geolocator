// import React from 'react'
// import { Button, StyleSheet, View } from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
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
     * Text to display inside the Label
     */
    text: PropTypes.string.isRequired,
    /**
     * Text to display inside the Label
     */
    label: PropTypes.string.isRequired
  };
  render() {
    const {
      color,
      disabled,
      text,
      label
    } = this.props;
    const textStyles = [ styles.text ];
    const labelStyles = [ styles.label ];

    if (color) {
      textStyles.push({ color: color });
    }

    if (disabled) {
      textStyles.push(styles.textDisabled);
      labelStyles.push(styles.textDisabled);
    }

    return (
      <div>
        <p style={labelStyles}>{label}:<span style={textStyles}>{text}</span></p>
      </div>
      
    );
  }
}
const styles = {
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500'
  },
  label: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
};
