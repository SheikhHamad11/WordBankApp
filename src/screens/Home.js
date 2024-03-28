import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Circle from '../components/Circle';
import {
  WordBankCategories,
  WordBankHeading,
} from '../Redux_Configuration/Selector';
import {useWordBank} from '../Context_Configuration/Main_Context';
export default function Home({navigation}) {
  const [index, setindex] = useState(0);
  const [centerClick, setcenterClick] = useState(false);
  const state = useWordBank();
  const {heading, Category} = useMemo(
    () => ({
      heading: WordBankHeading(state),
      Category: WordBankCategories(state, index),
    }),
    [index, state],
  );

  const [angle, setangle] = useState(0);
  useEffect(() => {
    if (!centerClick) {
      if (angle > 143 && angle <= 220) {
        setindex(0);
      } else if (angle > 54 && angle <= 138) {
        setindex(3);
      } else if ((angle > 321 && angle <= 360) || (angle >= 0 && angle <= 48)) {
        setindex(2);
      } else if (angle > 227 && angle < 315) {
        setindex(1);
      }
    } else {
      navigate();
    }
  }, [angle, centerClick]);
  const navigate = () => {
    setcenterClick(false);
    navigation.navigate('DetailPage', {index});
  };
  return (
    <ScrollView>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  flexContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    minHeight: Dimensions.get('window').height,
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
