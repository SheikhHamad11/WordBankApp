import React, {useState} from 'react';
import {View, PanResponder, StyleSheet, Dimensions, Text} from 'react-native';

const CircularSlider = () => {
  const [angle, setAngle] = useState(0);

  const {width, height} = Dimensions.get('window');
  const center = {x: width / 2, y: height / 2};
  const radius = 100; // Adjust the radius as needed
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
      <View
        {...panResponder.panHandlers}
        style={[styles.slider, {left: x, top: y}]}>
        <Text style={styles.angleText}>{Math.round(angle)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  angleText: {
    color: 'white',
  },
});

export default CircularSlider;
