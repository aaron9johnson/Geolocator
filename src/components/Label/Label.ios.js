import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class Label extends React.Component {
  static propTypes = {
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: PropTypes.string,
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
    onPress: PropTypes.func.isRequired,
    /**
     * Text to display inside the button
     */
    title: PropTypes.string.isRequired
  };
  render() {
    const {
      accessibilityLabel,
      color,
      disabled,
      onPress,
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
      <Text style={textStyles}>{title}</Text>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
});
