import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
  static propTypes = {
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
      text,
      label
    } = this.props;

    return (
      <div>
        <p style={styles.label}><strong>{label}</strong>: <span style={styles.text}>{text}</span></p>
      </div>
      
    );
  }
}
const styles = {
  text: {
    textAlign: 'center',
    color: 'black',
    padding: 8,
    fontWeight: '500'
  },
  label: {
    textAlign: 'left',
    color: 'black',
    padding: 8,
    fontWeight: '500'
  }
};
