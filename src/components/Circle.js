import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  PanResponder,
  Alert,
} from 'react-native';
const Circle = ({angle, setAngle}) => {
  const [panResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
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
        const regionMiddle =
          normalizedX >= 0.27 &&
          normalizedX <= 0.7 &&
          normalizedY >= 0.35 &&
          normalizedY <= 0.56;

        if (region1) {
          setAngle(90);
        } else if (region2) {
          setAngle(180);
        } else if (region3) {
          setAngle(270);
        } else if (regionMiddle) {
          Alert.alert('Middle Touch');
        } else {
          setAngle(360);
        }

        // console.log(`pageX: ${pageX} pageY: ${pageY}`);
        // Additional tasks or setup when the touch gesture begins
      },
    }),
  );
  const [triangleResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        const {pageX, pageY} = event.nativeEvent;

        // Calculate the displacement from the center
        const dx = pageX - center.x;
        const dy = pageY - center.y;

        // Calculate the angle in radians
        const angleRad = Math.atan2(dy, dx);

        // Convert the angle to degrees
        const angleDeg = (angleRad * 180) / Math.PI;

        // Adjust the angle to be positive and between 0 and 360
        const dynamicOffset = calculateDynamicOffset(pageX, pageY);
        const positiveAngle = (angleDeg - dynamicOffset + 360) % 360;

        // Set the angle state
        rotation.setValue(positiveAngle);

        // Log the values for debugging
        console.log(
          `dx: ${dx.toFixed(3)}, dy: ${dy.toFixed(
            3,
          )}, Angle: ${angleDeg}, dynamic Offset: ${dynamicOffset}`,
        );
        console.log(`Positive Angle: ${positiveAngle}`);

        // Additional logic based on regions (uncomment and modify as needed)
        /*
      if (positiveAngle >= 45 && positiveAngle < 135) {
        // Region 1 (e.g., setAngle(90);)
      } else if (positiveAngle >= 135 && positiveAngle < 225) {
        // Region 2 (e.g., setAngle(180);)
      } else if (positiveAngle >= 225 && positiveAngle < 315) {
        // Region 3 (e.g., setAngle(270);)
      } else {
        // Middle Region (e.g., Alert.alert('Middle Touch');)
      }
      */
      },
    }),
  );

  const [timeId, setTimeId] = useState(null);
  const rotation = useRef(new Animated.Value(0)).current;
  const radius = (Dimensions.get('window').width - 80) / 2; // Adjust the radius as needed
  // const scalingFactor = 0.5;
  const center = {
    x: (Dimensions.get('window').width - 80) / 2,
    y: Dimensions.get('window').width - 70,
  };
  // const rotateView = () => {
  //   // Clear the previous interval if any
  //   clearInterval(timeId);

  //   // Start a new interval
  //   const newTimeId = setInterval(() => {
  //     setAngle(prevAngle => {
  //       console.log(prevAngle);
  //       if (prevAngle >= 360) {
  //         // Stop the interval when the angle reaches or exceeds 360 degrees
  //         clearInterval(newTimeId);
  //         return 0;
  //       }
  //       // Increment the angle by a small value (e.g., 3 degrees)
  //       return prevAngle + 3;
  //     });
  //   }, 500); // Use the desired interval duration

  //   // Save the new interval ID
  //   setTimeId(newTimeId);
  // };

  useEffect(() => {
    // console.log(rotation.__getValue());
    if (angle === 360 && rotation.__getValue() === 0) {
      return;
    }
    const rotateAnimation = Animated.timing(rotation, {
      toValue: angle, // Rotate 360 degrees
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    });
    rotateAnimation.start(() => {
      if (angle === 360) {
        rotation.setValue(0);
        setAngle(0);
      }
    });
  }, [rotation, angle]);
  const calculateDynamicOffset = (pageX, pageY) => {
    // Define reference points or regions on the screen

    // Calculate distance between touch position and reference points
    const distanceX = Math.abs(pageX - center.x);
    const distanceY = Math.abs(pageY - center.y);

    // Calculate total distance from reference point (hypotenuse of triangle)
    const totalDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Calculate maximum distance from reference point
    const maxDistance = Math.sqrt(center.x ** 2 + center.y ** 2);

    // Calculate offset as a proportion of maximum distance
    const offset =
      (totalDistance / maxDistance) * 208.5674561007116 + 208.5674561007116; // Adjust maxOffset as needed

    return offset;
  };
  const getTriangleStyle = () => {
    const radians = rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    const triangleBasePosition = {
      left: center.x - radius,
      top: center.y - radius,
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
      borderLeftColor: '#F80707',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent', // Adjust the color as needed
      position: 'absolute',
      transform: [
        {translateX: radius},
        {rotate: radians},
        {translateX: -radius},
      ],
    };

    return [styles.triangle, triangleStyle, triangleBasePosition];
  };

  return (
    <View style={styles.MainCircle}>
      {/* <TouchableOpacity onPress={rotateView} style={{alignSelf: 'flex-start'}}>
        <View
          style={[
            styles.upArrow,
            {transform: [{rotate: `${angle}deg`}]},
          ]}></View>
      </TouchableOpacity> */}
      <Animated.View style={getTriangleStyle()} />
      <View style={styles.topinnerCircle}>
        <Animated.Image
          source={require('../Images/wordbank.png')}
          style={styles.imgStyle}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainCircle: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').width - 30,
    borderRadius: (Dimensions.get('window').width - 30) / 2,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F2F1',
    position: 'relative',
  },
  topinnerCircle: {
    width: Dimensions.get('window').width - 90,
    height: Dimensions.get('window').width - 90,
    borderRadius: (Dimensions.get('window').width - 80) / 2,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 40,
    // borderLeftColor: '#5390D4',
    // borderRightColor: '#FEBF00',
    // borderTopColor: '#00B04E',
    // borderBottomColor: '#D50100',
  },
  imgStyle: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width - 80,
    borderRadius: (Dimensions.get('window').width - 80) / 2,
  },
  upArrow: {
    alignSelf: 'flex-start',
    width: 0,
    height: 0,
    // backgroundColor: 'green',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 50,
    borderBottomColor: 'green',
    // margin: 20,
  },
  triangle: {
    position: 'absolute',
  },
});
export default Circle;
