import React from 'react'
import { connect } from 'react-redux'
import { LocateAction } from '../actions/LocateAction'
import Label from '../components/Label/Label'
import LocateButton from '../components/LocateButton/LocateButton'

class GeolocatorScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      ip: '',
      location: ''
    }

    this.dispatchLocateAction = this.dispatchLocateAction.bind(this)
  }

  dispatchLocateAction() {
    this.props.dispatch(LocateAction())
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ip: nextProps.locate.ip ? nextProps.locate.ip : this.state.ip,
      location: nextProps.locate.location ? nextProps.locate.location : this.state.location
    });
  }

  render() {
    return (
      <div>
        <LocateButton onClick={this.dispatchLocateAction} title='Find my Location' />
        <Label label={'IP Address'} text={this.state.ip}/>
        <Label label={'Location'} text={this.state.location}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    locate: state.locate
})

export default connect(mapStateToProps)(GeolocatorScreen);
