import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
  PanResponder,
} from 'react-native';

const Circle = ({angle, setAngle, setcenterClick}) => {
  const [DragRotaition] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const {moveX, moveY} = gestureState;

        // Calculate the displacement from the center
        const dx = moveX - center.x;
        const dy = moveY - center.y;

        // Calculate the angle in radians
        const angleRad = Math.atan2(dy, dx);

        // Convert the angle to degrees
        const angleDeg = (angleRad * 180) / Math.PI;

        // Adjust the angle to be positive and between 0 and 360
        const dynamicOffset = calculateDynamicOffset(moveX, moveY);
        const positiveAngle = (angleDeg + 360) % 360;
        console.log(
          `dynamicoffset: ${dynamicOffset} moveX: ${moveX} moveY: ${moveY} angle: ${positiveAngle}`,
        );
        rotation.setValue(positiveAngle);
        setAngle(positiveAngle);
        // Set the angle state
        // rotation.setValue(positiveAngle);
        // setAngle(positiveAngle);
      },
    }),
  );
  const [TouchResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        const {pageX, pageY} = event.nativeEvent;

        // Get the screen dimensions
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;

        // Normalize pageX and pageY values
        const normalizedX = pageX / screenWidth;
        const normalizedY = pageY / screenHeight;
        console.log(`normalizedX: ${normalizedX}, normalizedY: ${normalizedY}`);

        // Define regions based on normalized values
        const region1 =
          normalizedX >= 0.25 &&
          normalizedX <= 0.67 &&
          normalizedY >= 0.25 &&
          normalizedY <= 0.34;
        const region2 =
          normalizedX >= 0.72 &&
          normalizedX <= 0.88 &&
          normalizedY >= 0.35 &&
          normalizedY <= 0.55;
        const region3 =
          normalizedX >= 0.3 &&
          normalizedX <= 0.7 &&
          normalizedY >= 0.57 &&
          normalizedY <= 0.63;
        const region4 =
          normalizedX >= 0.12 &&
          normalizedX <= 0.24 &&
          normalizedY >= 0.36 &&
          normalizedY <= 0.54;
        const regionMiddle =
          normalizedX >= 0.3 &&
          normalizedX <= 0.65 &&
          normalizedY >= 0.38 &&
          normalizedY <= 0.54;

        if (region1) {
          setTouchResponce(1);
          setAngle(270);
        } else if (region2) {
          setTouchResponce(2);

          setAngle(360);
        } else if (region3) {
          setTouchResponce(3);
          setAngle(90);
        } else if (region4) {
          setTouchResponce(4);
          setAngle(180);
        } else if (regionMiddle) {
          setcenterClick(true);
        } else {
          const dx = pageX - center.x;
          const dy = pageY - center.y;

          // Calculate the angle in radians
          const angleRad = Math.atan2(dy, dx);

          // Convert the angle to degrees
          const angleDeg = (angleRad * 180) / Math.PI;

          // Adjust the angle to be positive and between 0 and 360
          // const dynamicOffset = calculateDynamicOffset(moveX, moveY);
          const positiveAngle = (angleDeg + 360) % 360;
          console.log(
            ` pageX: ${pageX} pageY: ${pageY} angle: ${positiveAngle}`,
          );
          // rotation.setValue(positiveAngle);
          setTouchResponce(5);
          //  setAngle(180);
          setAngle(positiveAngle);
        }

        // console.log(`pageX: ${pageX} pageY: ${pageY}`);
        // Additional tasks or setup when the touch gesture begins
      },
      onPanResponderMove: (event, gestureState) => {
        const {moveX, moveY} = gestureState;

        // Calculate the displacement from the center
        const dx = moveX - center.x;
        const dy = moveY - center.y;

        // Calculate the angle in radians
        const angleRad = Math.atan2(dy, dx);

        // Convert the angle to degrees
        const angleDeg = (angleRad * 180) / Math.PI;

        // Adjust the angle to be positive and between 0 and 360
        const dynamicOffset = calculateDynamicOffset(moveX, moveY);
        const positiveAngle = (angleDeg + 360) % 360;
        console.log(
          `dynamicoffset: ${dynamicOffset} moveX: ${moveX} moveY: ${moveY} angle: ${positiveAngle}`,
        );
        rotation.setValue(positiveAngle);
        setAngle(positiveAngle);
        // Set the angle state
        // rotation.setValue(positiveAngle);
        // setAngle(positiveAngle);
      },
    }),
  );
  const rotation = useRef(new Animated.Value(0)).current;
  const [touchResponce, setTouchResponce] = useState(0);
  const radius = (Dimensions.get('window').width - 80) / 2;
  const center = {
    x: (Dimensions.get('window').width - 50) / 2,
    y: Dimensions.get('window').width - 15,
  };

  useEffect(() => {
    if (touchResponce) {
      console.log(touchResponce);
      setTouchResponce(0);
      const rotateAnimation = Animated.timing(rotation, {
        toValue: angle, // Rotate to the specified angle
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      });
      rotateAnimation.start();
    }
  }, [rotation, touchResponce]);

  const calculateDynamicOffset = (pageX, pageY) => {
    // You can customize this function to calculate the dynamic offset based on your requirements
    // The offset determines how much the angle should be adjusted based on the touch position
    // This helps to keep the circular slider within a certain range

    // For example, you can calculate the offset based on the distance from the center
    const distanceX = Math.abs(pageX - center.x);
    const distanceY = Math.abs(pageY - center.y);
    const totalDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = Math.sqrt(center.x ** 2 + center.y ** 2);
    const maxOffset = 50; // Adjust this value based on your preference

    return (totalDistance / maxDistance) * maxOffset;
  };
  const polarToCartesian = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = center.x + radius * Math.cos(radians);
    const y = center.y + radius * Math.sin(radians);
    return {x, y};
  };

  const {x, y} = polarToCartesian(0, radius);
  // : polarToCartesian(angle, radius);
  const getTriangleStyle = () => {
    const radians = rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const triangleBasePosition = {
      left: x,
      top: y,
    };

    const triangleStyle = {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 15,
      borderLeftWidth: 25,
      borderRightWidth: 25,
      borderBottomWidth: 15,
      // borderLeftColor: '#F80707',
      borderLeftColor: 'transparent',
      borderRightColor: '#F80707',
      // borderBottomColor: '#F80707',
      // borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      position: 'absolute',
      transform: [
        {translateX: -radius},
        {rotate: radians},
        {translateX: radius},
      ],
    };

    return [styles.triangle, triangleStyle, triangleBasePosition];
  };

  return (
    <>
      <View style={styles.MainCircle} {...TouchResponder.panHandlers}>
        <View style={styles.topinnerCircle}>
          <Animated.Image
            source={require('../Images/wordbank.png')}
            style={styles.imgStyle}
          />
        </View>
      </View>
      <Animated.View
        style={getTriangleStyle()}
        {...DragRotaition.panHandlers}
      />
    </>
  );
};

const styles = StyleSheet.create({
  MainCircle: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').width - 30,
    borderRadius: (Dimensions.get('window').width - 30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F2F1',
    position: 'relative',
  },
  topinnerCircle: {
    width: Dimensions.get('window').width - 90,
    height: Dimensions.get('window').width - 90,
    borderRadius: (Dimensions.get('window').width - 90) / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgStyle: {
    width: Dimensions.get('window').width - 90,
    height: Dimensions.get('window').width - 90,
    borderRadius: (Dimensions.get('window').width - 90) / 2,
  },
  triangle: {
    position: 'absolute',
  },
});

export default Circle;
