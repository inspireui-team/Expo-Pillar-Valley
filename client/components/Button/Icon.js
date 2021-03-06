import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { FontAwesome } from '@expo/vector-icons'; // 6.2.0

import AudioManager from '../../AudioManager';

export default class Icon extends Component {
  static defaultProps = {
    soundIn: 'button_in',
    soundOut: 'button_out',
    size: 24,
    color: '#ffffff',
  };

  render() {
    const {
      onPress,
      size,
      color,
      name,
      soundOut,
      soundIn,
      source,
      style,
      iconStyle,
    } = this.props;
    return (
      <TouchableBounce
        onPress={onPress}
        onPressIn={() => AudioManager.shared.playAsync(soundIn)}
        onPressOut={() => AudioManager.shared.playAsync(soundOut)}
        style={[styles.container, style]}
      >
        <FontAwesome
          size={size}
          color={color}
          name={name}
          style={[styles.icon, iconStyle]}
        />
      </TouchableBounce>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    minWidth: 56,
    aspectRatio: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  icon: {
    backgroundColor: 'transparent',
  },
});
