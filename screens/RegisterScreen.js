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
  Picker,
} from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

import {
  Icon,
  Button,
} from 'native-base';
import FadeInView from '../components/FadeInView';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';

export default class RegisterScreen extends Component {
  
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
        <KeyboardAvoidingView
          behavior={"position"}
          keyboardVerticalOffset={0}
          style={{justifyContent: 'center', flex: 1, paddingHorizontal: 15,}}
          >
          <View style={{}}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{alignSelf: 'flex-end',}}
            />
            <Text style={styles.textTitle}>Register</Text>
            <View style={styles.labelBar}></View>
            <Text style={{marginTop: 5}}>Thank you for registering, you can now have VIP experience and other features unlocked</Text>
          </View>

          <FadeInView>
            <View style={styles.customBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Firstname"
                keyboardAppearance='light'
                keyboardType='default'
                returnKeyType='next'
              />
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? `ios-person`
                    : 'md-person'
                }
                style={{color: Colors.primaryColor}}
              />
            </View>
          </FadeInView>
          <FadeInView>
            <View style={styles.customBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Lastname"
                keyboardAppearance='light'
                keyboardType='default'
                returnKeyType='next'
              />
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? `ios-person`
                    : 'md-person'
                }
                style={{color: Colors.primaryColor}}
              />
            </View>
          </FadeInView>
          <FadeInView>
            <View style={styles.customBox}>
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
            <View style={styles.customBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Age"
                keyboardAppearance='light'
                keyboardType='phone-pad'
                returnKeyType='next'
              />
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? `ios-calendar`
                    : 'md-calendar'
                }
                style={{color: Colors.primaryColor}}
              />
            </View>
          </FadeInView>
          <FadeInView>
            <View style={styles.customBox}>
              <Picker
                selectedValue={this.state.language}
                style={{height: 40, borderWidth: 0, flex: 1, paddingHorizontal: 10}}
                >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? `ios-transgender`
                    : 'md-transgender'
                }
                style={{color: Colors.primaryColor}}
              />
            </View>
          </FadeInView>
          <FadeInView>
            <View style={styles.customBox}>
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
          <TouchableOpacity
              style = {[styles.customButton, {backgroundColor: Colors.primaryColor}]}
            >
            <Text style={{color: '#fff'}}> Sign Up </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

RegisterScreen.navigationOptions = {
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
  customBox: {
    width: '100%',
    flexDirection: 'row',
    borderColor: Colors.primaryColor,
    borderBottomWidth: 0.3,
    alignItems: 'center',
    paddingRight: 10,
    marginTop: 15,
  },
  textInput: {
    height: 40,
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 10
  },
  customButton: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 15
  }
});
