import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let width = Dimensions.get('window').width;

export default class List extends Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          "_id": "650000197609238338",
          "thumb": "http://dummyimage.com/1200x600/054e6b)",
          "title": "测试内容mr28",
          "video": "123"
        },
        {
          "_id": "370000199909140860",
          "thumb": "http://dummyimage.com/1200x600/08a7d5)",
          "title": "测试内容mr28",
          "video": "123"
        }
      ]),
    };
  }

  renderRow(row) {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{row.title}</Text>
          <Image source={{url: 'http://dummyimage.com/1200x600/c7c038'}} style={styles.thumb}>
            <Icon name="ios-play" size={28} style={styles.play}/>
          </Image>
          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon name="ios-heart-outline" size={28} style={styles.up}/>
              <Text style={styles.handleText}>喜欢</Text>
            </View>
            <View style={styles.handleBox}>
              <Icon name="ios-chatboxes-outline" size={28} style={styles.commentIcon}/>
              <Text style={styles.handleText}>评论</Text>
            </View>
          </View>
        </View>

      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>列表页面</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee753c'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },
  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  thumb: {
    width: width,
    height: width * 0.5,
    resizeMode: 'cover',
  },
  itemTitle: {
    padding: 10,
    fontSize: 18,
    color: '#333'
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },
  handleBox: {
    padding: 10,
    flexDirection: 'row',
    width: width * 0.5 - 0.5,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 23,
    color: '#ed7b66',
  },
  handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: '#333'
  },
  up: {
    fontSize: 22,
    color: '#333'
  },
  commentIcon: {
    fontSize: 22,
    color: '#333'
  }
});