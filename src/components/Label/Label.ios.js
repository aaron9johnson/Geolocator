import React from 'react'
import { Text } from 'react-native'

export default class Label extends React.Component {
  render() {
    return (
      <Text>{this.props.label}: <Text>{this.props.text}</Text></Text>
    );
  }
}
