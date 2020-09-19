import React from 'react'
import { connect } from 'react-redux'
import { SampleAction, SampleActionRunning } from '../actions/SampleAction'
import Label from '../components/Label/Label'
import LocateButton from '../components/LocateButton/LocateButton'
import SampleView from '../components/SampleView/SampleView'

class StartScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      message: 'Welcome to the app!',
      dispatchMessage: 'Dispatch an action to:',
      label: 'Action:',
      ip: 'Hello',
      location: 'Hello'
    }

    this.dispatchActionsRunning(true)

    this.dispatchSuccessAction = this.dispatchSuccessAction.bind(this)
    this.dispatchActionsRunning = this.dispatchActionsRunning.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.dispatchSuccessAction(false), 1500)
    setTimeout(() => this.dispatchSuccessAction(true), 3000)
    setTimeout(() => this.dispatchActionsRunning(false), 3500)
  }

  dispatchSuccessAction(action) {
    this.props.dispatch(SampleAction(action))
  }

  dispatchActionsRunning(action) {
    this.props.dispatch(SampleActionRunning(action))
  }
  _handlePress(event) {
    event.preventDefault();
    console.log('Clicked!');
  }

  render() {
    return (
      <div>
        <LocateButton accessibilityLabel='Locate Button' onClick={this._handlePress} title='Click me!' />
        <Label label={'IP Address'} text={this.state.ip}/>
        <Label label={'Location'} text={this.state.location}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    actions: state.sample
})

export default connect(mapStateToProps)(StartScreen);
