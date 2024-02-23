import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Circle from '../components/Circle';
import {useSelector} from 'react-redux';
import {
  WordBankCategories,
  WordBankHeading,
} from '../Redux_Configuration/Selector';
export default function Home({navigation}) {
  const [index, setindex] = useState(0);
  const [centerClick, setcenterClick] = useState(false);
  const {heading, Category} = useSelector(
    useMemo(
      () => state => ({
        heading: WordBankHeading(state),
        Category: WordBankCategories(state, index),
      }),
      [index],
    ),
  );
  const [angle, setangle] = useState(90);
  useEffect(() => {
    if (!centerClick) {
      if (angle === 360 || angle === 0) {
        setindex(0);
      } else if (angle === 90) {
        setindex(1);
      } else if (angle === 180) {
        setindex(2);
      } else if (angle === 270) {
        setindex(3);
      }
    } else {
      navigate();
    }
  }, [angle, centerClick]);
  const navigate = () => {
    // console.log(`HOme index: ${index}`);
    setcenterClick(false);
    navigation.navigate('DetailPage', {index});
  };
  return (
    <View style={styles.flexContainer}>
      <View>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <Circle
        angle={angle}
        setAngle={setangle}
        setcenterClick={setcenterClick}
      />

      <View style={{height: 100}}>
        <Text style={styles.heading1}>{Category?.title}</Text>
        <Text style={styles.description}>{Category?.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  heading1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 25,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
