import React, {useState} from 'react';
import {View, PanResponder, StyleSheet, Dimensions, Text} from 'react-native';

const CircularSlider = () => {
  const [angle, setAngle] = useState(0);

  // const {width, height} = Dimensions.get('window');
  const center = {
    x: (Dimensions.get('window').width - 70) / 2,
    y: Dimensions.get('window').width + 15,
  };
  const radius = (Dimensions.get('window').width - 60) / 2; // Adjust the radius as needed
  const maxAngle = 360;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const {moveX, moveY} = gestureState;
      const dx = moveX - center.x;
      const dy = moveY - center.y;

      // Calculate angle in degrees
      let newAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

      // Ensure the angle is positive and between 0 and 360 degrees
      newAngle = (newAngle + maxAngle) % maxAngle;
      
      setAngle(newAngle);
    },
  });

  const polarToCartesian = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = center.x + radius * Math.cos(radians);
    const y = center.y + radius * Math.sin(radians);
    return {x, y};
  };

  const {x, y} = polarToCartesian(angle, radius);

  return (
    <View style={styles.container}>
      <View style={styles.MainCircle}></View>
      <View
        {...panResponder.panHandlers}
        style={[styles.slider, {left: x, top: y}]}>
        {/* <Text style={styles.angleText}>{Math.round(angle)}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
  },
  MainCircle: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').width - 30,
    borderRadius: (Dimensions.get('window').width - 30) / 2,
    // overflow: 'hidden',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#E8F2F1',
  },
  slider: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 15,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: '#F80707',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    // justifyContent: 'center',
    // alignItems: 'center',
    // top: 10,
  },
  angleText: {
    color: 'white',
  },
});

export default CircularSlider;
