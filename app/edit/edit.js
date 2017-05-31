import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Edit extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>制作页面</Text>
      </View>
    )
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