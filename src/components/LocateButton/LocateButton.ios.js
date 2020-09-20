import React from 'react'
import { Button } from 'react-native'

export default class LocateButton extends React.Component {
  render() {
    return (
      <Button
        onPress={this.props.onClick}
        title={this.props.title}/>
    );
  }
}