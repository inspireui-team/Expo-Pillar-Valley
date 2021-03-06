import { connectActionSheet } from '@expo/react-native-action-sheet';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AchievementsItem from '../components/AchievementsItem';
import List from '../components/List';
import UserAchievementsItem from '../components/UserAchievementsItem';
import connectAchievementToast from '../ExpoParty/connectAchievementToast';

import Achievements from '../constants/Achievements';

class App extends Component {
  static navigationOptions = {};

  state = {
    filter: 'All',
  };

  _onOpenActionSheet = () => {
    let options = ['All', 'Completed', 'Cancel'];
    let destructiveButtonIndex = 0;
    let cancelButtonIndex = options.length - 1;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex !== cancelButtonIndex) {
          this.setState({ filter: options[buttonIndex] });
        }
      },
    );
  };

  componentDidMount() {
    // this._onPressItem(data[0]);
  }

  _onPressItem = item => {
    // console.log(item);
  };

  _loadMore = () => {};

  render() {
    return (
      <View style={styles.container}>
        <List
          noMore
          renderItem={({ item, index }) => (
            <AchievementsItem
              onPress={this._onPressItem}
              {...item}
              index={index}
            />
          )}
          title={`${Achievements.length} Achievements`}
          headerButtonTitle={this.state.filter}
          data={Achievements}
          renderUserItem={props => null}
          onPress={this._onPressItem}
          onPressHeader={this._onOpenActionSheet}
          onPressFooter={this._loadMore}
        />
      </View>
    );
    // renderUserItem={props => <UserAchievementsItem data={props} />}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default connectActionSheet(connectAchievementToast(App));
