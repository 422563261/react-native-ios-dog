/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import List from './app/list/list'
import Edit from './app/edit/edit'
import Account from './app/account/account'


export default class reactNativeDemo extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'List'
    }
  }

  render() {
    return (
      <TabBarIOS
        tintColor="#ee735c"
      >
        <Icon.TabBarItem
          iconName='ios-videocam-outline'
          selectedIconName='ios-videocam-outline'
          selected={this.state.selectedTab === 'List'}
          onPress={() => {
            this.setState({
              selectedTab: 'List',
            });
          }}>
          <List/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName='ios-recording-outline'
          selectedIconName='ios-recording'
          selected={this.state.selectedTab === 'Edit'}
          onPress={() => {
            this.setState({
              selectedTab: 'Edit',
            });
          }}>
          <Edit/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName='ios-more-outline'
          selectedIconName='ios-more'
          renderAsOriginal
          selected={this.state.selectedTab === 'Account'}
          onPress={() => {
            this.setState({
              selectedTab: 'Account',
            });
          }}>
          <Account/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    color: 'red'
  },
});

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
