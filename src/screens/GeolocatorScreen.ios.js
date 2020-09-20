import React from 'react'
import { connect } from 'react-redux'
import { LocateAction } from '../actions/LocateAction'
import Label from '../components/Label/Label'
import LocateButton from '../components/LocateButton/LocateButton'
import { View, Text, Image, StyleSheet} from 'react-native'

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
      return (<Image uri={this.state.flag}/>);
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>GeoLocator</Text>
          <Label label={'IP Address'} text={this.state.ip}/>
          <Label label={'Location'} text={this.state.location}/>
          <LocateButton onClick={this.dispatchLocateAction} title='Find my Location' />
          {this.renderFlag()}
        </View>
        <Text>Aaron Johnson</Text>
      </View>
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
    fontSize: 40
  }
}


export default connect(mapStateToProps)(GeolocatorScreen);
