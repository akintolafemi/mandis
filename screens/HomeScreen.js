import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import FadeInView from '../components/FadeInView';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import GridList from 'react-native-grid-list';


const items = [
  { thumbnail: { uri: 'https://lorempixel.com/200/200/fashion' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/people' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
];

export default function HomeScreen() {

  renderItem = ({ item, index }) => (
    <Image style={styles.collections} source={item.thumbnail} />
  );

  const [fadeAdmin] = useState(new Animated.Value(0))  

  React.useEffect(() => {
    Animated.timing(
      fadeAdmin,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{}}
        />
        <Text>
          Fashion App
        </Text>
      </View>
      <Animated.ScrollView
        style={[styles.container, {opacity: fadeAdmin, paddingHorizontal: 20, paddingVertical: 15,}]}
        >
        <View style={{}}>
          <Text style={styles.textTitle}>Explore</Text>
          <View style={styles.labelBar}></View>
        </View>

        <View style={styles.getStartedContainer}>
          <GridList
            showSeparator={false}
            separatorBorderWidth={2}
            data={items}
            numColumns={2}
            renderItem={this.renderItem}
          />
        </View>
        
      </Animated.ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  headerBar: {
    height: 80,
    paddingTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
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
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
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
  getStartedContainer: {
    marginTop: 10,
    flex: 1,
  },
  collections: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

});
