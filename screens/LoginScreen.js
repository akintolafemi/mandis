import React, { useState, useEffect, Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

import {
  Icon,
  Button,
} from 'native-base';
import FadeInView from '../components/FadeInView';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

export default class LoginScreen extends Component {
  
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  constructor(props) {
    super(props);
    this.state = {
      isLogShow: false,
      uId: null,
      uPwd: null,
      checkKey: null,
      passedKey: null,
      isIdValid: false,
    }
    // this.onContinuePress = this.onContinuePress.bind(this);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text>
            Fashion App
          </Text>
        </View>
        <View
          style={[styles.container, {paddingHorizontal: 20, paddingVertical: 15,}]}
          >
          <View style={{}}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{alignSelf: 'flex-end',}}
            />
            <Text style={styles.textTitle}>Log in</Text>
            <View style={styles.labelBar}></View>
            <Text style={{marginTop: 5}}>Please log in to your account for personalized a experience</Text>
          </View>

          <KeyboardAvoidingView
            style={{justifyContent: 'center', flex: 1}}
            behavior="padding" enabled
          >
            <FadeInView>
              <View style={styles.customInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardAppearance='light'
                  keyboardType='email-address'
                  returnKeyType='next'
                />
                <Icon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-mail`
                      : 'md-mail'
                  }
                  style={{color: Colors.primaryColor}}
                />
              </View>
            </FadeInView>
            <FadeInView>
              <View style={styles.customInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  keyboardAppearance='light'
                  returnKeyType='send'
                />
                <Icon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-lock`
                      : 'md-lock'
                  }
                  style={{color: Colors.primaryColor}}
                />
              </View>
            </FadeInView>
            <TouchableOpacity style={{marginTop: 5}}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.onLoginPress()}
                style = {[styles.customButton, {borderColor: Colors.primaryColor, borderWidth: 0.3,}]}
              >
              <Text style={{color: Colors.primaryColor}}> LOG IN </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 5}}>
              <Text style={{color: Colors.primaryColor, }}>Don't have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}
                style = {[styles.customButton, {backgroundColor: Colors.primaryColor}]}
              >
              <Text style={{color: '#fff'}}> CREATE ACCOUNT </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

      </View>
    );
  }

  onLoginPress() {
    this.props.navigation.navigate('Home');
  }
}

LoginScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  headerBar: {
    height: 80,
    paddingTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#fff',
    color: '#000',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.colorWhite,
  },
  textTitle: {
    color: '#000000',
    fontSize: 48,
    fontWeight: 'bold',
  },
  labelBar: {
    backgroundColor: Colors.primaryColor,
    height: 10,
    width: 60,
  },
  customInput: {
    width: '100%',
    flexDirection: 'row',
    borderColor: Colors.primaryColor,
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: 'center',
    paddingRight: 10,
    marginTop: 15,
  },
  textInput: {
    height: 50,
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 10
  },
  customButton: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginHorizontal: 15,
    marginTop: 10
  }
});
