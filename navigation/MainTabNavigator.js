import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CollectionsScreen from '../screens/CollectionsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const CollectionsStack = createStackNavigator(
  {
    Collection: CollectionsScreen,
  },
  config
);

CollectionsStack.navigationOptions = {
  tabBarLabel: 'Collection',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-analytics' : 'md-analytics'} />
  ),
};

CollectionsStack.path = '';

const CartStack = createStackNavigator(
  {
    Cart: CartScreen,
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cart`
          : 'md-cart'
      }
    />
  ),
};

CartStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CollectionsStack,
  CartStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
