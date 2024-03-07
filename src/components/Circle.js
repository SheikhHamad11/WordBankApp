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
  const circleLayout = useRef(null);
  const [circleCenter, setCircleCenter] = useState({centerX: 0, centerY: 0});
  const circleRef = useRef(null);
  const [DragRotaition] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const {moveX, moveY} = gestureState;
        const dx = moveX - circleLayout.current.centerX;
        const dy = moveY - circleLayout.current.centerY;
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = (angleRad * 180) / Math.PI;
        const positiveAngle = (angleDeg + 360) % 360;
        rotation.setValue(positiveAngle);
        setAngle(positiveAngle);
      },
    }),
  );
  const [TouchResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        const {pageX, pageY} = event.nativeEvent;
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const normalizedX = pageX / screenWidth;
        const normalizedY = pageY / screenHeight;
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
          const dx = pageX - circleLayout.current.centerX;
          const dy = pageY - circleLayout.current.centerY;
          const angleRad = Math.atan2(dy, dx);
          const angleDeg = (angleRad * 180) / Math.PI;
          const positiveAngle = (angleDeg + 360) % 360;
          setTouchResponce(5);
          setAngle(positiveAngle);
        }
      },
      onPanResponderMove: (event, gestureState) => {
        const {moveX, moveY} = gestureState;
        const dx = moveX - circleLayout.current.centerX;
        const dy = moveY - circleLayout.current.centerY;
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = (angleRad * 180) / Math.PI;
        const positiveAngle = (angleDeg + 360) % 360;
        rotation.setValue(positiveAngle);
        setAngle(positiveAngle);
      },
    }),
  );
  const rotation = useRef(new Animated.Value(0)).current;
  const [touchResponce, setTouchResponce] = useState(0);
  const radius = circleCenter.radius
    ? circleCenter.radius - 27
    : (Dimensions.get('window').width - 80) / 2;
  const center = {
    x: circleCenter.centerX,
    y: circleCenter.centerY,
  };

  useEffect(() => {
    if (touchResponce) {
      setTouchResponce(0);
      const rotateAnimation = Animated.timing(rotation, {
        toValue: angle, 
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      });
      rotateAnimation.start();
    }
  }, [rotation, touchResponce]);
  const polarToCartesian = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = center.x + radius * Math.cos(radians);
    const y = center.y + radius * Math.sin(radians);
    return {x, y};
  };
  const {x, y} = polarToCartesian(0, radius);
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
      borderLeftColor: 'transparent',
      borderRightColor: '#F80707',
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
  const handleCircleLayout = event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    const centerX = x + width / 2 - 25;
    const centerY = y + height / 2 - 15.18;
    const radius = width / 2;
    setCircleCenter({centerX, centerY, radius});
    circleLayout.current = {x, y, width, height, centerX, centerY};
  };
  return (
    <>
      <View
        style={styles.MainCircle}
        onLayout={handleCircleLayout}
        ref={circleRef}
        {...TouchResponder.panHandlers}>
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
