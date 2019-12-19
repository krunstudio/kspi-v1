import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from "../screen/register";
import Register2 from "../screen/register2";
import Register3 from "../screen/register3";
import Kartunama from "../screen/kartunama";
import {Share,Text,TouchableOpacity} from 'react-native';
import Onboarding from '../screen/Onboarding';

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const RootStack = createStackNavigator({
  Login: {
    screen: Onboarding,
    navigationOptions : {
      header : null
    }
  },  
  Account: {
    screen: Register,
    navigationOptions: navOpt => ({
      drawerLabel: ({ focused }) => (
        <DrawerItem focused={focused} screen="Register" title="Account" />
      )
    })
  },
  Register : {
    screen: Register,
    navigationOptions : {
      header : null
    }
  },
  Register2 : {
    screen: Register2,
    navigationOptions : {
      header : null
    }
  },
  Register3 : {
    screen: Register3,
    navigationOptions : {
      header : null
    }
  },
  Kartunama : {
    screen: Kartunama,
    navigationOptions : {
      header : null
    }
  },
});

export default createAppContainer(RootStack);