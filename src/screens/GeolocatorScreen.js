import { findLastIndex } from 'lodash'
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
      location: '',
      flag: ''
    }

    this.dispatchLocateAction = this.dispatchLocateAction.bind(this)
  }

  dispatchLocateAction() {
    this.props.dispatch(LocateAction())
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ip: nextProps.locate.ip ? nextProps.locate.ip : this.state.ip,
      location: nextProps.locate.location ? nextProps.locate.location : this.state.location,
      flag: nextProps.locate.flag ? nextProps.locate.flag : this.state.flag
    });
  }

  renderFlag(){
    if(this.state.flag != ''){
      return (<img style={styles.flag} src={this.state.flag}/>);
    }
  }

  render() {
    return (
      <div style={styles.main}>
        <div style={styles.box}>
          <h1 style={styles.title}>GeoLocator</h1>
          <Label label={'IP Address'} text={this.state.ip}/>
          <Label label={'Location'} text={this.state.location}/>
          <LocateButton onClick={this.dispatchLocateAction} title='Find my Location' />
          {this.renderFlag()}
        </div>
        <p style={styles.developer}>Aaron Johnson</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    locate: state.locate
})
const styles = {
  box: {
    width: '400px',
    borderStyle: 'double',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center'
  },
  developer: {
    color: 'lightGrey'
  },
  flag: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    width: '64px',
    height: '32px'
  }
}
export default connect(mapStateToProps)(GeolocatorScreen);
