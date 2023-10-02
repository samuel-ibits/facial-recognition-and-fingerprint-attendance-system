
import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      biometryType: null,
    };
  }
        
  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        this.setState({biometryType});
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  }
  
  getMessage=()=>{
  const {biometryType}=this.state;
    if(biometryType=='Face ID')
    {
      return 'Scan your Face on the device to continue'
    }
    else
    {
      return 'Scan your Fingerprint on the device scanner to continue'
    }
  }

  showAuthenticationDialog = () => {
    const {biometryType}=this.state;
    if(biometryType!==null && biometryType!==undefined )
    {
    FingerprintScanner.authenticate({
      description: this.getMessage()
    })
      .then(() => {
        //you can write your logic here to what will happen on successful authentication
      })
      .catch((error) => {
        console.log('Authentication error is => ', error);
      });
    }
    else
    {
    console.log('biometric authentication is not available');
    }
  };

  render() {
    const {biometryType}=this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.showAuthenticationDialog()}>
          <Text style={styles.textStyle}>Authenticate</Text>
        </TouchableOpacity>
        <Text
          style={
            styles.biometryText
          }>{`biometryType is  ${biometryType}`}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '70%',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
  biometryText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
  },
});