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
  const {heading, Category} = useSelector(
    useMemo(
      () => state => ({
        heading: WordBankHeading(state),
        Category: WordBankCategories(state, index),
      }),
      [index],
    ),
  );
  const [angle, setangle] = useState();
  useEffect(() => {
    if (angle === 360 || angle === 0) {
      setindex(0);
    } else if (angle === 90) {
      setindex(1);
    } else if (angle === 180) {
      setindex(2);
    } else if (angle === 270) {
      setindex(3);
    }
  }, [angle]);
  return (
    <View style={styles.flexContainer}>
      <View style={styles.MainHeadingContainer}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <Circle angle={angle} setAngle={setangle} />

      <View style={{marginTop: 50}}>
        <Text style={styles.heading1}>{Category.title}</Text>
        <Text style={styles.description}>{Category.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    // marginHorizontal:25,
    fontSize: 18,
    // fontWeight: '900',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  MainHeadingContainer: {
    marginBottom: 30,
  },
});
